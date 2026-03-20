import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GradientCircle from "./GradientCircle";
import SignatureText from "./SignatureText";
import NavLinks from "./NavLinks";
import { SPRING } from "../../constants/motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger — visible below lg */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar panel */}
      <AnimatePresence>
        {(isOpen || null) && (
          <motion.aside
            className="fixed top-0 left-0 h-full z-40 flex flex-col p-6 bg-[var(--color-bg)] border-r border-white/10 lg:hidden"
            style={{ width: "var(--sidebar-width)" }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={SPRING}
          >
            <GradientCircle />
            <SignatureText />
            <NavLinks onNavigate={() => setIsOpen(false)} />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar — always visible at lg+ */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 h-full z-40 flex-col p-6 border-r border-white/10"
        style={{ width: "var(--sidebar-width)" }}
      >
        <GradientCircle />
        <SignatureText />
        <NavLinks />
      </aside>
    </>
  );
}
