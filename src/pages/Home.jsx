import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";
import ExperienceList from "../components/Experience/ExperienceList";
import CaseStudyList from "../components/CaseStudy/CaseStudyList";
import { PAGE_TRANSITION } from "../constants/motion";

export default function Home() {
  return (
    <motion.div className="flex flex-col gap-[52px]" {...PAGE_TRANSITION}>
      {/* HERO SECTION */}
      <Hero />

      {/* EXPERIENCE SECTION */}
      <ExperienceList />

      {/* CASE STUDIES SECTION */}
      <CaseStudyList />
    </motion.div>
  );
}
