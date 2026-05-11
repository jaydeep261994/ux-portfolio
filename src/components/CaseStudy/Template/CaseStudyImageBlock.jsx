import { motion } from "framer-motion";

export default function CaseStudyImageBlock({
  src,
  alt = "",
  aspectRatio = "1032 / 514",
  bg = "#FFFFFF",
  fit = "contain",
}) {
  const objectClass = fit === "cover" ? "object-cover" : "object-contain";
  return (
    <motion.div
      className="w-full overflow-hidden flex items-center justify-center"
      style={{ aspectRatio, backgroundColor: bg }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {src ? (
        <img src={src} alt={alt} className={`w-full h-full ${objectClass}`} />
      ) : null}
    </motion.div>
  );
}
