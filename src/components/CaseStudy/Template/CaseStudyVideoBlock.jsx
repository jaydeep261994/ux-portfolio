import { motion } from "framer-motion";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

export default function CaseStudyVideoBlock({
  src,
  poster,
  aspectRatio = "1032 / 514",
  bg = "#FFFFFF",
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="cs-full w-full overflow-hidden flex items-center justify-center"
      style={{ aspectRatio, backgroundColor: bg }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Reduced motion holds the poster frame, but controls are handed over so the
          clip stays watchable on demand rather than simply being lost. */}
      {src ? (
        <video
          src={src}
          poster={poster}
          autoPlay={!prefersReduced}
          controls={prefersReduced}
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-contain"
        />
      ) : null}
    </motion.div>
  );
}
