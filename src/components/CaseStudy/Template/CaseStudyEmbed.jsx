import { useState } from "react";
import { motion } from "framer-motion";

function FigmaMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 38 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83" />
      <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
    </svg>
  );
}

export default function CaseStudyEmbed({
  src,
  title = "Embedded prototype",
  aspectRatio = "16 / 9",
  bg = "transparent",
  allow,
}) {
  const [loaded, setLoaded] = useState(false);
  if (!src) return null;
  return (
    <motion.div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio, backgroundColor: bg }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#1d1d1d]">
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <FigmaMark className="w-10 h-auto" />
          </motion.div>
          <span className="text-[12px] tracking-wide text-[#8c8c8c]">
            Loading prototype…
          </span>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        className="w-full h-full block border border-black/10 relative z-10"
        allow={allow}
        allowFullScreen
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 300ms ease" }}
      />
    </motion.div>
  );
}
