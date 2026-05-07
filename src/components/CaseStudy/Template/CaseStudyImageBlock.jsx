import { motion } from "framer-motion";

export default function CaseStudyImageBlock({ src, alt = "", height = 514, bg = "#FFFFFF" }) {
  return (
    <motion.div
      className="w-full overflow-hidden"
      style={{ height, backgroundColor: bg }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : null}
    </motion.div>
  );
}
