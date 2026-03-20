import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SPRING } from "../../constants/motion";

export default function CaseStudyBlock({ project }) {
  return (
    <motion.article
      className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5"
      whileHover={{ y: -4 }}
      transition={SPRING}
    >
      <Link to={project.link}>
        <div className="aspect-video bg-white/5 flex items-center justify-center">
          <span
            className="text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {/* Cover image placeholder */}
            {project.title}
          </span>
        </div>

        <div className="p-5">
          <h3 className="font-semibold">{project.title}</h3>
          <p
            className="mt-2"
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "clamp(0.8125rem, 0.75rem + 0.2vw, 0.9375rem)",
            }}
          >
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full text-xs border border-white/10"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
