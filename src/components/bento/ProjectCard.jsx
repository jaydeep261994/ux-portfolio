import { Link } from "react-router-dom";
import Card from "./Card";

/**
 * A project card is a single link when a case study exists, and an inert card when it
 * does not — no dead links. Chips are real text, not baked into the image, so they are
 * readable by screen readers and searchable.
 */
export default function ProjectCard({ card }) {
  const { id, title, outcome, image, imageDark, alt, link, ar } = card;
  const linkProps = link ? { as: Link, to: link, "aria-label": `${title} — ${outcome}` } : {};

  return (
    <Card
      {...linkProps}
      // Lets a single visual opt out of the themed plate; see .project-card in bento.css.
      data-project={id}
      className={`project-card${link ? " project-card--link" : ""}`}
      style={{ "--ar": ar }}
    >
      {/* A card can ship a dark-mode twin. Both render and CSS shows one, the same
          way the case-study logos handle their `-ink` variants. The hidden one is
          marked decorative so the alt text is announced once. */}
      <div className="project-card__well">
        <img
          className={imageDark ? "project-card__img--light" : undefined}
          src={image}
          alt={alt}
          loading="lazy"
        />
        {imageDark && (
          <img
            className="project-card__img--dark"
            src={imageDark}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        )}
      </div>

      <div className="project-card__chips">
        <span className="chip">{title}</span>
        <span className="chip">{outcome}</span>
      </div>
    </Card>
  );
}
