import { motion } from "framer-motion";
import experience from "../../data/experience";
import { SPRING_SLOW } from "../../constants/motion";

export default function ExperienceList() {
  return (
    <motion.section
      className="flex flex-col gap-[14px] px-4 md:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...SPRING_SLOW, delay: 0.1 }}
    >
      <p className="text-sm font-light text-[var(--color-text-muted)] tracking-[0.14px] leading-[18px]">
        Experience
      </p>

      <div className="flex flex-col">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="flex items-center justify-between py-[13px] border-b border-[var(--color-border)]"
          >
            <div className="flex items-center gap-[17px]">
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt=""
                  className="w-[15px] h-[15px] object-contain shrink-0"
                />
              ) : (
                <div className="w-[15px] h-[15px] shrink-0" />
              )}
              <div className="flex items-center gap-[9px] text-xs leading-[14px]">
                <span className="text-[var(--color-text-secondary)]">
                  {exp.company}
                </span>
                <span className="text-[var(--color-text-dim)]">/</span>
                <span className="text-[var(--color-text-dim)] hidden sm:inline">
                  {exp.role}
                </span>
              </div>
            </div>
            <span className="text-xs text-[var(--color-text-dim)] leading-[14px] text-right shrink-0 ml-4">
              {exp.year}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
