import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SPRING } from "../../constants/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function MagneticCursor() {
  const prefersReduced = useReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (prefersReduced) return;

    // Hide on touch devices
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    function handleMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    }

    function handleLeave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-5 h-5 rounded-full border border-white/40 mix-blend-difference"
      animate={{
        x: pos.x - 10,
        y: pos.y - 10,
        opacity: visible ? 1 : 0,
      }}
      transition={SPRING}
    />
  );
}
