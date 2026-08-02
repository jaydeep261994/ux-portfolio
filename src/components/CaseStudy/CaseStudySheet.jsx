import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import CaseStudy from "../../pages/CaseStudy";

const TITLE_ID = "cs-sheet-title";

/**
 * Case study presented as a scrollable bottom sheet over the homepage. The route
 * still owns the URL, so links stay shareable and Back closes the sheet.
 */
export default function CaseStudySheet({ projectId }) {
  const navigate = useNavigate();
  const prefersReduced = useReducedMotion();
  const scrollRef = useRef(null);
  const closeRef = useRef(null);
  const restoreFocusRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const close = useCallback(() => navigate("/"), [navigate]);

  // Escape closes, matching the backdrop and the close button.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  // Lock the page behind the sheet. Padding compensates for the removed scrollbar
  // so the homepage doesn't shift as the sheet opens.
  useEffect(() => {
    const { overflow, paddingRight } = document.body.style;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, []);

  // Move focus into the sheet, and hand it back to whatever opened it on close.
  useEffect(() => {
    restoreFocusRef.current = document.activeElement;
    closeRef.current?.focus();
    return () => restoreFocusRef.current?.focus?.();
  }, []);

  // Each project starts at the top of its own scroll region, not the page.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "instant" });
    setScrolled(false);
  }, [projectId]);

  return (
    <div className="cs-sheet-root" role="dialog" aria-modal="true" aria-labelledby={TITLE_ID}>
      <motion.button
        type="button"
        className="cs-backdrop"
        aria-label="Close case study"
        onClick={close}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      />

      <motion.div
        className="cs-sheet"
        initial={prefersReduced ? { opacity: 0 } : { y: "100%" }}
        animate={prefersReduced ? { opacity: 1 } : { y: 0 }}
        exit={prefersReduced ? { opacity: 0 } : { y: "100%" }}
        transition={
          prefersReduced
            ? { duration: 0.2 }
            : { type: "spring", stiffness: 260, damping: 32 }
        }
      >
        <div className="cs-sheet__bar" data-scrolled={scrolled}>
          <span className="cs-sheet__grabber" aria-hidden="true" />
          <span className="cs-sheet__crumb">Case study</span>
          <button type="button" className="cs-sheet__close" onClick={close} ref={closeRef}>
            Close
          </button>
        </div>

        <div
          className="cs-sheet__scroll"
          ref={scrollRef}
          onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 8)}
        >
          <CaseStudy projectId={projectId} titleId={TITLE_ID} />
        </div>
      </motion.div>
    </div>
  );
}
