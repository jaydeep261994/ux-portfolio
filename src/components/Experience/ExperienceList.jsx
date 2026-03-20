import { motion } from "framer-motion";
import experience from "../../data/experience";
import { SPRING_SLOW } from "../../constants/motion";

export default function ExperienceList() {
  return (
    <motion.section
      className="flex flex-col gap-[14px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...SPRING_SLOW, delay: 0.1 }}
    >
      <p className="text-[16px] font-light text-[#8c8c8c] tracking-[0.16px] leading-[20px]">
        Experience
      </p>

      <div className="flex flex-col">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="flex items-center justify-between py-4 border-b border-[#323131]"
          >
            <div className="flex items-center gap-[17px]">
              {exp.logo ? (
                <div className="w-[26px] h-[26px] shrink-0 flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt=""
                    className="max-w-[26px] max-h-[26px] object-contain"
                  />
                </div>
              ) : (
                <div className="w-[26px] h-[26px] shrink-0" />
              )}
              <div className="flex items-center gap-[9px] text-[16px] leading-[20px] whitespace-nowrap">
                <span className="text-[#cecece]">
                  {exp.company}
                </span>
                <span className="text-[#5b5b5b]">/</span>
                <span className="text-[#5b5b5b]">
                  {exp.role}
                </span>
              </div>
            </div>
            <span className="text-[16px] text-[#5b5b5b] leading-[20px] text-right whitespace-nowrap shrink-0">
              {exp.yearStart && exp.yearEnd
                ? `${exp.yearStart} — ${exp.yearEnd}`
                : exp.year}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
