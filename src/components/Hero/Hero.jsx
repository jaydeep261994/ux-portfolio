import { motion } from "framer-motion";
import { SPRING_SLOW } from "../../constants/motion";

export default function Hero() {
  return (
    <motion.section
      className="flex flex-col gap-5 px-4 md:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={SPRING_SLOW}
    >
      {/* Greeting */}
      <div className="flex items-center gap-3">
        <span
          className="text-[clamp(1.25rem,1rem+1.5vw,1.625rem)] text-white tracking-[-0.26px] leading-7"
        >
          hey, i&apos;m
        </span>
        <img
          src="/images/jaydeep-signature.png"
          alt="Jaydeep"
          className="h-7 w-auto"
        />
      </div>

      {/* Title */}
      <p className="text-xs text-[var(--color-text-dim)] leading-[14px]">
        Interaction Design Senior Analyst at Accenture
      </p>

      {/* Bio */}
      <div className="text-sm font-light text-white leading-[18px]">
        <p>I design and build digital products &amp; visual interfaces</p>
        <p>Welcome to my small corner of web.</p>
      </div>

      {/* Location & Time */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1">
          <img src="/images/icons/map-pin.svg" alt="" className="w-3 h-3" />
          <span className="text-xs text-[var(--color-text-dimmer)] leading-[14px]">
            Pune, India
          </span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/images/icons/clock.svg" alt="" className="w-3 h-3" />
          <span className="text-xs text-[var(--color-text-dimmer)] leading-[14px]">
            {new Date().toLocaleTimeString("en-IN", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
        </div>
      </div>
    </motion.section>
  );
}
