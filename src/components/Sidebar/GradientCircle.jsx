import { motion } from "framer-motion";
import { SPRING_SLOW } from "../../constants/motion";

export default function GradientCircle() {
  return (
    <motion.div
      className="w-10 h-10 rounded-full"
      style={{
        background: "linear-gradient(135deg, var(--color-accent), #a855f7)",
      }}
      whileHover={{ scale: 1.1 }}
      transition={SPRING_SLOW}
      aria-hidden="true"
    />
  );
}
