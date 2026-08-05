/* global process */
import assert from "node:assert/strict";
import test from "node:test";

process.env.OPENROUTER_API_KEY = "test-key";
const { default: handler } = await import("./chat.js");

/** Builds an SSE body shaped like OpenRouter's, including the frames that trip parsers. */
function sseStream(chunks) {
  const frames = chunks.map(
    (c) => `data: ${JSON.stringify({ choices: [{ delta: { content: c } }] })}\n\n`
  );
  const body = [": keep-alive\n\n", ...frames, "data: [DONE]\n\n"].join("");
  return new Response(body, { status: 200 });
}

function post(messages, ip = "1.1.1.1") {
  return new Request("http://x/api/chat", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": ip },
    body: JSON.stringify({ messages }),
  });
}

const ask = [{ role: "user", content: "hi" }];
let stubbed;
globalThis.fetch = async () => stubbed();

test("streams the concatenated deltas as plain text", async () => {
  stubbed = () => sseStream(["Hello", " there", "!"]);
  const res = await handler(post(ask, "ip-stream"));
  assert.equal(res.status, 200);
  assert.equal(await res.text(), "Hello there!");
});

test("survives an SSE frame split across chunks", async () => {
  // The real failure mode: a data: line arriving in two network reads.
  const whole = `data: ${JSON.stringify({ choices: [{ delta: { content: "split ok" } }] })}\n\n`;
  stubbed = () =>
    new Response(
      new ReadableStream({
        start(c) {
          const e = new TextEncoder();
          c.enqueue(e.encode(whole.slice(0, 20)));
          c.enqueue(e.encode(whole.slice(20)));
          c.enqueue(e.encode("data: [DONE]\n\n"));
          c.close();
        },
      })
    );
  const res = await handler(post(ask, "ip-split"));
  assert.equal(await res.text(), "split ok");
});

test("rejects non-POST and malformed bodies", async () => {
  stubbed = () => sseStream(["x"]);
  assert.equal((await handler(new Request("http://x/api/chat"))).status, 405);

  const bad = new Request("http://x/api/chat", {
    method: "POST",
    headers: { "x-forwarded-for": "ip-bad" },
    body: "not json",
  });
  assert.equal((await handler(bad)).status, 400);

  assert.equal((await handler(post([], "ip-empty"))).status, 400);
  assert.equal((await handler(post([{ role: "system", content: "x" }], "ip-sys"))).status, 400);
});

test("rate limits per IP, and limits are not shared between IPs", async () => {
  stubbed = () => sseStream(["ok"]);
  for (let i = 0; i < 8; i++) {
    assert.equal((await handler(post(ask, "ip-limit"))).status, 200, `call ${i + 1}`);
  }
  assert.equal((await handler(post(ask, "ip-limit"))).status, 429);
  assert.equal((await handler(post(ask, "ip-other"))).status, 200);
});

test("upstream failure surfaces as an error, not a broken stream", async () => {
  stubbed = () => new Response("nope", { status: 500 });
  const res = await handler(post(ask, "ip-fail"));
  assert.equal(res.status, 502);
  assert.match((await res.json()).error, /unavailable/i);
});
