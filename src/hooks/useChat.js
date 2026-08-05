import { useCallback, useRef, useState } from "react";
import { usePostHog } from "@posthog/react";

/** Questions only — never the model's answers, and capped so a pasted essay
 *  doesn't end up in analytics. The point is to see which gaps in the portfolio
 *  people keep asking about, not to record conversations. */
const LOG_MAX = 200;

/**
 * Owns the conversation. The reply streams in as plain text, so the assistant's
 * last message is rewritten in place as chunks arrive rather than appended at the
 * end — the reader sees words appear instead of waiting on a spinner.
 */
export default function useChat() {
  const [messages, setMessages] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const abortRef = useRef(null);
  const posthog = usePostHog();

  const send = useCallback(
    async (text) => {
      const content = text.trim();
      if (!content || pending) return;

      setError(null);
      setPending(true);

      const history = [...messages, { role: "user", content }];
      setMessages(history);

      posthog?.capture("chat_question_asked", {
        question: content.slice(0, LOG_MAX),
        // Which turn it is separates opening questions from follow-ups.
        turn: history.filter((m) => m.role === "user").length,
      });

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ messages: history }),
          signal: controller.signal,
        });

        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          // Worth knowing separately: a rate-limited recruiter is a lost one.
          posthog?.capture("chat_failed", { status: res.status });
          throw new Error(body.error || "Something went wrong. Try again.");
        }

        // Open an empty assistant bubble, then fill it as chunks land.
        setMessages((m) => [...m, { role: "assistant", content: "" }]);

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let reply = "";

        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          reply += decoder.decode(value, { stream: true });
          setMessages((m) => {
            const next = [...m];
            next[next.length - 1] = { role: "assistant", content: reply };
            return next;
          });
        }

        // A stream that closes without a single token is a failure, not an answer.
        if (!reply.trim()) {
          setMessages((m) => m.slice(0, -1));
          setError("No response came back. Try again.");
        }
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setPending(false);
        abortRef.current = null;
      }
    },
    [messages, pending, posthog]
  );

  const reset = useCallback(() => {
    abortRef.current?.abort();
    setMessages([]);
    setError(null);
    setPending(false);
  }, []);

  return { messages, pending, error, send, reset };
}
