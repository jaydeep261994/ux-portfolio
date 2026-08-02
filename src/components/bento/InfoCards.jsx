import { useEffect, useState } from "react";
import Card from "./Card";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { playgroundFrames, skills, tools } from "../../data/bento";

const formatPuneTime = () =>
  new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

/**
 * Résumé — the only route to full work history now that the experience list is gone.
 * Served under its full name rather than resume.pdf: the link opens in a tab, so
 * whatever the reader saves keeps a filename that identifies it.
 */
export function ResumeCard() {
  return (
    <Card
      as="a"
      href="/Jaydeep_Das_Product_Designer_2026.pdf"
      target="_blank"
      rel="noopener"
      aria-label="Resume (opens in a new tab)"
      className="info-card resume-card"
    >
      <span className="info-card__label">Resume</span>
      {/* Figma 3665-77127 fills the disc with the portrait. Decorative here — the
          card's own label is what names the link. */}
      <img
        className="resume-card__disc"
        src="/images/bento/portrait.webp"
        alt=""
        width="96"
        height="96"
      />
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

      {/* Location marker from Figma 3627-75452, with an Apple-style accuracy pulse. */}
      <span className="pune-marker" aria-hidden="true">
        <span className="pune-marker__pulse" />
        <span className="pune-marker__pulse pune-marker__pulse--delayed" />
        <span className="pune-marker__ring" />
        <span className="pune-marker__tip" />
        <span className="pune-marker__dot" />
      </span>

      <span className="pune-card__place">
        Pune
        <br />
        India
      </span>
      <time className="pune-card__time" dateTime={time}>
        {time}
      </time>
    </Card>
  );
}

export function ToolsCard() {
  return (
    <Card tint="green" className="info-card tools-card">
      <span className="info-card__label info-card__label--lg info-card__label--tint">
        I design and built websites with
      </span>
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
      <span className="info-card__label">I&apos;m good at</span>
      <ul className="skills-card__list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Card>
  );
}

const PLAYGROUND_INTERVAL = 3800;

/**
 * Explorations. Deliberately not a link — these have no case study behind them.
 * Crossfades between states on a timer, and holds on the first frame when the
 * visitor has asked for reduced motion.
 */
export function PlaygroundCard() {
  const prefersReduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReduced || playgroundFrames.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % playgroundFrames.length),
      PLAYGROUND_INTERVAL
    );
    return () => clearInterval(id);
  }, [prefersReduced]);

  return (
    <Card tint="violet" className="info-card playground-card">
      <span className="info-card__label info-card__label--lg info-card__label--violet">
        Things i play around with
      </span>
      {/* The first frame is above the fold — lazy-loading it would delay LCP. */}
      <div className="playground-card__well">
        {playgroundFrames.map((frame, i) => (
          <img
            key={frame.id}
            src={frame.image}
            alt={i === index ? frame.alt : ""}
            aria-hidden={i === index ? undefined : "true"}
            data-visible={i === index}
            data-kind={frame.kind}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
          />
        ))}
      </div>
    </Card>
  );
}
