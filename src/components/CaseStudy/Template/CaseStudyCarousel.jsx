import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudyCarousel({
  images = [],
  aspectRatio = "1032 / 514",
  bg = "#EDEDED",
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  if (!count) return null;

  const go = (delta) => {
    setIndex((i) => (i + delta + count) % count);
  };

  const current = images[index];

  return (
    <motion.div
      className="cs-full w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="relative w-full overflow-hidden flex items-center justify-center"
        style={{ aspectRatio, backgroundColor: bg }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.alt || ""}
            className="w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous"
              onClick={() => go(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 cs-title text-xl flex items-center justify-center transition-colors"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => go(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 cs-title text-xl flex items-center justify-center transition-colors"
            >
              ›
            </button>
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 cs-title text-[12px]">
              {index + 1} / {count}
            </div>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
