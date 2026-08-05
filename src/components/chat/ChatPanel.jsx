import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";

/**
 * The open panel — Figma 3729-5933 (empty) and 3730-5976 (with messages). The
 * shell is identical between the two; only the middle region swaps.
 */
export default function ChatPanel({ onClose, chat, closeRef }) {
  const { messages, pending, error, send } = chat;
  const [draft, setDraft] = useState("");
  const scrollRef = useRef(null);

  // Follow the answer as it streams rather than leaving the reader to chase it.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, pending]);

  const submit = (e) => {
    e.preventDefault();
    if (!draft.trim() || pending) return;
    send(draft);
    setDraft("");
  };

  const empty = messages.length === 0;

  return (
    <div className={`chat-panel${empty ? " chat-panel--empty" : ""}`}>
      <header className="chat-panel__head">
        <h2 className="chat-panel__title">Portfolio agent</h2>
        <button
          type="button"
          className="chat-panel__close"
          onClick={onClose}
          ref={closeRef}
          aria-label="Close chat"
        >
          {/* Figma 3734-5362: a 6.8 x 6.8 cross centred in the 12px box, 1.0
              stroke, round caps — not the 9 x 9 at 1.4 drawn before. */}
          <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
            <path
              d="M2.6 2.6l6.8 6.8M9.4 2.6l-6.8 6.8"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {empty ? (
        <div className="chat-panel__intro">
          <img
            className="chat-panel__orb"
            src="/images/chat/orb.webp"
            alt=""
            width="76"
            height="76"
          />
          <div className="chat-panel__intro-text">
            <p className="chat-panel__greeting">Hi, I&rsquo;m Jaydeep</p>
            <p className="chat-panel__sub">
              Curious about my work or process? Ask anything and I&rsquo;ll guide
              you through it.
            </p>
          </div>
        </div>
      ) : (
        <div className="chat-panel__scroll" ref={scrollRef}>
          <ul className="chat-panel__list" aria-live="polite" aria-atomic="false">
            {messages.map((m, i) => (
              <ChatMessage key={i} role={m.role} content={m.content} />
            ))}
            {pending && messages[messages.length - 1]?.role === "user" && (
              <li className="chat-msg chat-msg--assistant">
                <span className="chat-msg__bubble chat-msg__typing">
                  <i />
                  <i />
                  <i />
                  <span className="sr-only">Thinking…</span>
                </span>
              </li>
            )}
          </ul>
          {error && (
            <p className="chat-panel__error" role="alert">
              {error}
            </p>
          )}
        </div>
      )}

      <form className="chat-composer" onSubmit={submit}>
        <label className="sr-only" htmlFor="chat-input">
          Ask about Jaydeep&rsquo;s work
        </label>
        <input
          id="chat-input"
          className="chat-composer__input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Tell me about yourself"
          autoComplete="off"
          maxLength={1000}
          disabled={pending}
        />
        <button
          type="submit"
          className="chat-composer__send"
          disabled={!draft.trim() || pending}
          aria-label="Send message"
        >
          {/* Figma 3734-5376: shaft 2.8 → 15.2, chevron spanning 3.95 → 14.05 with
              its apex at 2.8. Slightly larger than what was drawn before. */}
          <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden="true">
            <path
              d="M9 15.2V2.8M3.95 7.9L9 2.8l5.05 5.1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
