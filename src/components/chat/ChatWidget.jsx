import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import useChat from "../../hooks/useChat";
import ChatPanel from "./ChatPanel";

/**
 * Floating agent, centre-bottom on every page. Collapsed it is the pill from
 * Figma 3725-5889; open it is the panel from 3729-5933.
 *
 * One surface, not two. The pill and the panel are the same element — `layout`
 * animates the box from 155x48 to the panel's size, and the contents crossfade
 * inside it, so the chat opens *out of* the pill rather than replacing it.
 *
 * Focus handling mirrors CaseStudySheet: move in on open, hand back on close.
 * The page behind is deliberately NOT made inert — unlike the case-study sheet
 * this is a non-modal companion, and a reader should be able to keep scrolling
 * the work while the panel stays open.
 */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const prefersReduced = useReducedMotion();
  const chat = useChat();
  const closeRef = useRef(null);
  const pillRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Skips the first run: on mount `open` is already false, and focusing the pill
  // there would yank focus to the widget the moment the page loads.
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (open) closeRef.current?.focus();
    else pillRef.current?.focus();
  }, [open]);

  // The box morph is the whole point of the interaction, so it survives reduced
  // motion — only its duration collapses.
  const morph = prefersReduced
    ? { duration: 0 }
    : { type: "spring", stiffness: 420, damping: 38, mass: 0.9 };

  // Symmetric in both directions: whatever is leaving clears out fast, so the box
  // is already empty while it resizes and nothing stretches or drifts inside it.
  // Whatever is arriving waits for the box to be most of the way there, then fades
  // up into the space it made. Opening and closing feel like the same gesture.
  const fadeIn = prefersReduced
    ? { duration: 0 }
    : { duration: 0.22, delay: 0.09, ease: "easeOut" };
  const fadeOut = prefersReduced
    ? { duration: 0 }
    : { duration: 0.1, ease: "easeOut" };

  return (
    <div className="chat-root">
      <motion.div
        layout
        transition={morph}
        className={`chat-surface${open ? " chat-surface--open" : ""}`}
        style={{ borderRadius: open ? 30 : 29 }}
        role={open ? "dialog" : undefined}
        aria-label={open ? "Portfolio agent" : undefined}
      >
        {/* No `mode` — the two must overlap. With mode="wait" the pill finishes
            fading before the panel starts, which reads as two separate events
            rather than one box opening. */}
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              key="panel"
              className="chat-surface__content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: fadeOut }}
              transition={fadeIn}
            >
              <ChatPanel onClose={close} chat={chat} closeRef={closeRef} />
            </motion.div>
          ) : (
            <motion.button
              key="pill"
              type="button"
              ref={pillRef}
              className="chat-pill"
              onClick={() => setOpen(true)}
              aria-expanded={false}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: fadeOut }}
              transition={fadeIn}
            >
              <img
                className="chat-pill__orb"
                src="/images/chat/orb.webp"
                alt=""
                width="40"
                height="40"
              />
              <span className="chat-pill__label">Ask Jaydeep</span>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
