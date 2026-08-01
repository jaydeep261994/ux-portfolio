import { Link } from "react-router-dom";
import Card from "./Card";

/**
 * A project card is a single link when a case study exists, and an inert card when it
 * does not — no dead links. Chips are real text, not baked into the image, so they are
 * readable by screen readers and searchable.
 */
export default function ProjectCard({ card }) {
  const { title, outcome, image, alt, link } = card;
  const linkProps = link ? { as: Link, to: link, "aria-label": `${title} — ${outcome}` } : {};

  return (
    <Card {...linkProps} className={`project-card${link ? " project-card--link" : ""}`}>
      <div className="project-card__well">
        <img src={image} alt={alt} loading="lazy" />
      </div>

      <div className="project-card__chips">
        <span className="chip">{title}</span>
        <span className="chip">{outcome}</span>
      </div>
    </Card>
  );
}
