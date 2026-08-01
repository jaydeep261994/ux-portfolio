import { useEffect, useState } from "react";
import Card from "./Card";
import { skills, tools } from "../../data/bento";

const formatPuneTime = () =>
  new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

/** Résumé — the only route to full work history now that the experience list is gone. */
export function ResumeCard() {
  return (
    <Card as="a" href="/resume.pdf" target="_blank" rel="noopener" className="info-card resume-card">
      <span className="info-card__label">Resume</span>
      <span className="resume-card__disc" aria-hidden="true" />
    </Card>
  );
}

export function PuneCard() {
  const [time, setTime] = useState(formatPuneTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatPuneTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Card className="info-card pune-card">
      <img src="/images/bento/pune-map.png" alt="" aria-hidden="true" />
      <span className="pune-card__place">
        Pune
        <br />
        India
      </span>
      <time className="pune-card__time">{time}</time>
    </Card>
  );
}

export function ToolsCard() {
  return (
    <Card tint="green" className="info-card tools-card">
      <span className="info-card__label info-card__label--tint">I design and built websites with</span>
      <ul className="tools-card__list">
        {tools.map((tool) => (
          <li key={tool.name}>
            <img src={tool.icon} alt={tool.name} title={tool.name} width="44" height="44" />
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function SkillsCard() {
  return (
    <Card tint="cyan" className="info-card skills-card">
      <span className="info-card__label info-card__label--tint">I&apos;m good at</span>
      <ul className="skills-card__list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Card>
  );
}

/** Explorations. Deliberately not a link — these have no case study behind them. */
export function PlaygroundCard() {
  return (
    <Card className="info-card playground-card">
      <span className="info-card__label">Things i play around with</span>
      <div className="playground-card__well">
        <img
          src="/images/bento/playground.png"
          alt="A conversational AI concept — How's it going, Bianca?"
          loading="lazy"
        />
      </div>
    </Card>
  );
}
