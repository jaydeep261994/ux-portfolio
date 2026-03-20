import { motion } from "framer-motion";
import { PAGE_TRANSITION } from "../../constants/motion";

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center px-4 md:px-8"
      {...PAGE_TRANSITION}
    >
      <h1 className="font-bold">
        Designing experiences
        <br />
        that matter.
      </h1>
      <p
        className="mt-4 max-w-xl"
        style={{
          color: "var(--color-text-secondary)",
          fontSize: "clamp(1rem, 0.9rem + 0.4vw, 1.25rem)",
        }}
      >
        UI/UX Designer crafting thoughtful, user-centered digital products.
      </p>
    </motion.section>
  );
}
