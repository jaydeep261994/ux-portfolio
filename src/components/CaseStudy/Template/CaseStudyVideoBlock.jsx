import { motion } from "framer-motion";

export default function CaseStudyVideoBlock({
  src,
  poster,
  aspectRatio = "1032 / 514",
  bg = "#FFFFFF",
}) {
  return (
    <motion.div
      className="cs-full w-full overflow-hidden flex items-center justify-center"
      style={{ aspectRatio, backgroundColor: bg }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {src ? (
        <video
          src={src}
          poster={poster}
          autoPlay
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
