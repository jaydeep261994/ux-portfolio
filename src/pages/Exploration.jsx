import { motion } from "framer-motion";
import { PAGE_TRANSITION } from "../constants/motion";

export default function Exploration() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center text-center gap-4 py-24 sm:py-32"
      {...PAGE_TRANSITION}
    >
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#282828] text-[12px] text-[#979797] font-['Poppins',sans-serif]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#cecece]" />
        Exploration
      </span>
      <h1 className="text-[28px] sm:text-[36px] leading-tight font-normal text-white font-['Poppins',sans-serif] m-0">
        Coming soon
      </h1>
      <p className="max-w-[460px] text-[14px] sm:text-[16px] text-[#8c8c8c] leading-[1.6] font-['Poppins',sans-serif]">
        A space for visual experiments, side projects, and work-in-progress
        ideas. Check back in a bit — there&apos;s good stuff on the way.
      </p>
    </motion.section>
  );
}
