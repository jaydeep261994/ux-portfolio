/* global process -- runs on Vercel's Node runtime, not in the browser */
import { knowledge } from "./_knowledge.js";

/**
 * Chat proxy. Exists so the OpenRouter key stays server-side — every VITE_* var is
 * baked into the client bundle, so a key in the frontend would be public.
 */

/**
 * Free endpoint first; the same model's paid endpoint catches the cases where the
 * free one is rate-limited or unavailable, so the widget never dies mid-conversation.
 *
 * Gemma specifically because it is NOT a reasoning model. Tested live, gpt-oss-20b,
 * ling-3.0-flash and nemotron-nano all spend the token budget on internal monologue
 * and return content: null — a chat that answers with nothing.
 */
const MODELS = (process.env.OPENROUTER_MODELS ||
  "google/gemma-4-31b-it:free,google/gemma-4-31b-it")
  .split(",")
  .map((m) => m.trim())
  .filter(Boolean);

const MAX_HISTORY = 6;
const MAX_CHARS = 1000;
const MAX_TOKENS = 500;

// Sized against OpenRouter's account-level daily cap, not just against abuse: one
// enthusiastic visitor must not be able to exhaust the day's allowance for everyone.
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 8;

/**
 * Per-instance, so it resets on cold start and doesn't see other instances. That's
 * a speed bump, not a wall — the real backstop is the spend cap on the key.
 */
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return true;
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // crude ceiling; the map is not a cache
  return false;
}

const SYSTEM_PROMPT = `You are the portfolio agent for Jaydeep Das, an Interaction Design Senior Analyst at Accenture based in Pune, India. You speak AS Jaydeep, in the first person.

Ground every answer in the material below. It is the case studies and work history from his own portfolio.

Rules:
- Answer only from the material. Never invent a project, client, employer, date, metric or outcome.
- The Work history, Education and Certifications sections are transcribed from the CV that visitors can download from the same page. Treat them as the authority on dates, job titles and employers, and quote them exactly — a date that disagrees with the CV in someone's hand is worse than no answer.
- If something is not covered, say so plainly — "I haven't written about that publicly, but I'm happy to talk it through over email: jaydeepdas06@gmail.com" — rather than guessing.
- If asked whether you are a human or an AI, say clearly that you are an AI trained on Jaydeep's portfolio.
- Recruiters are the main audience. Lead with what he did and what changed, not process vocabulary.
- Stay on the subject of his work, skills and background. For anything else, redirect warmly.
- Plain prose. No markdown headings, no bullet lists, no bold.

ASKED ABOUT A PROJECT — this is the most common question, and the answer must be a summary, never a retelling:
- Three sentences, maximum four. Never more, however much material exists.
- Cover exactly this, in order: what the product was and who it was for, what I did on it, what changed as a result.
- Then offer the case study link once, in the form "Full write-up: <URL>", so anyone wanting the detail can go and read it.
- Do NOT walk through the case study's sections. Do NOT list deliverables, tools or timelines unless asked for them specifically.
- If they follow up asking for more on one part, go deeper on that part only.

Every other kind of question: two or three sentences. This renders in a small chat panel, so length is the enemy.

MATERIAL:

${knowledge}`;

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

async function handler(request) {
  if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const key = process.env.OPENROUTER_API_KEY;
  if (!key) return json({ error: "Chat is not configured." }, 500);

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return json(
      { error: "You've hit the message limit for now. Try again in a bit." },
      429
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const incoming = Array.isArray(body?.messages) ? body.messages : null;
  if (!incoming || incoming.length === 0) return json({ error: "Invalid request." }, 400);

  // Trust nothing from the client: fix the shape, the length and the size.
  const messages = incoming
    .slice(-MAX_HISTORY)
    .filter((m) => m && (m.role === "user" || m.role === "assistant"))
    .map((m) => ({
      role: m.role,
      content: String(m.content ?? "").slice(0, MAX_CHARS),
    }))
    .filter((m) => m.content.trim());

  if (messages.length === 0) return json({ error: "Invalid request." }, 400);

  let upstream;
  try {
    upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "content-type": "application/json",
        "HTTP-Referer": "https://itsmejaydeep.com",
        // ASCII only: header values are ByteStrings, and the em dash this once
        // carried threw before the request ever left the process.
        "X-Title": "Jaydeep Das Portfolio",
      },
      body: JSON.stringify({
        model: MODELS[0],
        models: MODELS,
        stream: true,
        max_tokens: MAX_TOKENS,
        temperature: 0.3,
        // Insurance if a model on this list ever turns out to reason: keep the
        // monologue out of the budget and out of the response.
        reasoning: { exclude: true },
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    });
  } catch {
    return json({ error: "Couldn't reach the model. Try again in a moment." }, 502);
  }

  if (!upstream.ok || !upstream.body) {
    return json({ error: "The model is unavailable right now." }, 502);
  }

  // OpenRouter speaks SSE. Unwrapping it here means the browser just reads text,
  // and the client never has to know the provider's wire format.
  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstream.body.getReader();
      const decoder = new TextDecoder();
      const encoder = new TextEncoder();
      let buffer = "";

      try {
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split("\n");
          buffer = lines.pop() ?? ""; // keep the partial line for the next chunk

          for (const line of lines) {
            if (!line.startsWith("data:")) continue;
            const data = line.slice(5).trim();
            if (!data || data === "[DONE]") continue;
            try {
              const delta = JSON.parse(data).choices?.[0]?.delta?.content;
              if (delta) controller.enqueue(encoder.encode(delta));
            } catch {
              // Comment or keep-alive frame — nothing to emit.
            }
          }
        }
      } catch {
        // Upstream cut out mid-answer; close cleanly so the client keeps what it has.
      } finally {
        controller.close();
        reader.releaseLock();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

/**
 * Exported as a `fetch` object, not a bare function. Vercel reads a bare default
 * export as the legacy Node (req, res) handler and calls it with an
 * IncomingMessage — `request.headers.get` is then not a function, and the
 * function dies on invocation. The object form is what selects the Web signature.
 */
export default { fetch: handler };
