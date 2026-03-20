import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SPRING } from "../../constants/motion";

export default function CaseStudyBlock({ project, index, onPasswordClick }) {
  const coverContent = (
    <div className="relative w-full aspect-[2/1] overflow-hidden">
      <img
        src={project.coverImage}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
      {project.logo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={project.logo}
            alt={`${project.title} logo`}
            className={`${project.logoClass || "max-w-[200px] max-h-[80px]"} object-contain drop-shadow-lg`}
          />
        </div>
      )}
    </div>
  );

  return (
    <motion.article
      className="flex flex-col gap-[30px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...SPRING, delay: index * 0.05 }}
    >
      {/* Text */}
      <div className="flex flex-col gap-2 max-w-[710px]">
        <p className="text-[16px] text-[#cecece] leading-[20px]">
          {project.title}
        </p>
        <p className="text-[14px] text-[#5b5b5b] leading-[18px]">
          {project.description}
        </p>
      </div>

      {/* Cover image with logo overlay */}
      {project.passwordProtected ? (
        <button
          type="button"
          className="block group text-left w-full cursor-pointer"
          onClick={() => onPasswordClick(project)}
        >
          {coverContent}
        </button>
      ) : (
        <Link to={project.link} className="block group">
          {coverContent}
        </Link>
      )}
    </motion.article>
  );
}
