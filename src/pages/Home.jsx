import { motion } from "framer-motion";
import { PAGE_TRANSITION } from "../constants/motion";
import { workRows } from "../data/bento";
import HomeHero from "../components/bento/HomeHero";
import ProjectCard from "../components/bento/ProjectCard";
import ThemeToggle from "../components/bento/ThemeToggle";
import {
  PlaygroundCard,
  PuneCard,
  ResumeCard,
  SkillsCard,
  ToolsCard,
} from "../components/bento/InfoCards";

export default function Home() {
  return (
    <motion.div className="bento" {...PAGE_TRANSITION}>
      {/* Screen one — three columns, matching the Figma order. */}
      <div className="bento__top">
        <div className="bento__top-left">
          <HomeHero />
          <div className="bento__top-left-cards">
            <ResumeCard />
            <PuneCard />
          </div>
          <ToolsCard />
        </div>

        <PlaygroundCard />

        <div className="bento__top-right">
          <ThemeToggle />
          <SkillsCard />
        </div>
      </div>

      {/* Work — every card carries its client and what changed. */}
      <section className="bento__work" aria-label="Selected work">
        {workRows.map((row, i) => (
          <div
            key={i}
            className="bento__row"
            style={{
              "--cols": row.widths.map((w) => `${w}fr`).join(" "),
              "--row-gap": `${row.gap}px`,
            }}
          >
            {row.cards.map((card) => (
              <ProjectCard key={card.id} card={card} />
            ))}
          </div>
        ))}
      </section>

      <footer className="bento__footer">
        <span>© {new Date().getFullYear()} Jaydeep Das</span>
        <span>Made with React, Cursor, Figma and Claude Code</span>
      </footer>
    </motion.div>
  );
}
