import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SPRING_SLOW } from "../../constants/motion";
import SignatureAnimation from "./SignatureAnimation";
import LiveClock from "./LiveClock";

const formatTime = () =>
  new Date().toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

export default function Hero() {
  const [time, setTime] = useState(formatTime());

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.section
      className="flex flex-col gap-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={SPRING_SLOW}
    >
      {/* Greeting */}
      <div className="flex items-center gap-2">
        <span className="text-[26px] text-white tracking-[-0.26px] leading-7">
          hey, i&apos;m
        </span>
        <SignatureAnimation className="h-12 w-auto" />
      </div>

      {/* Title */}
      <p className="text-[16px] text-[#5b5b5b] leading-[20px]">
        Interaction Design Senior Analyst at Accenture
      </p>

      {/* Bio */}
      <div className="text-[16px] font-light text-white leading-[22px]">
        <p>I design and build digital products &amp; visual interfaces</p>
        <p>Welcome to my small corner of web.</p>
      </div>

      {/* Location & Time */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1.5">
          <img src="/images/icons/map-pin.svg" alt="" className="w-5 h-5" />
          <span className="text-[16px] text-[#5e5e5e] leading-[20px]">
            Pune, India
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <LiveClock className="w-5 h-5" />
          <span className="text-[16px] text-[#5e5e5e] leading-[20px]">
            {time}
          </span>
        </div>
      </div>
    </motion.section>
  );
}
