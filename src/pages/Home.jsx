import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";
import CaseStudyList from "../components/CaseStudy/CaseStudyList";
import { PAGE_TRANSITION } from "../constants/motion";

export default function Home() {
  return (
    <motion.div {...PAGE_TRANSITION}>
      {/* HERO SECTION */}
      <Hero />

      {/* CASE STUDIES SECTION */}
      <CaseStudyList />
    </motion.div>
  );
}
