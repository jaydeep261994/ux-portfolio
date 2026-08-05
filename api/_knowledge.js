import projects from "../src/data/projects.js";
import {
  certifications,
  education,
  profile,
  roles,
  skillGroups,
} from "../src/data/resume.js";

/**
 * Flattens the same data the site renders from into prose the model can read.
 *
 * Importing the source of truth rather than maintaining a second copy is the whole
 * point: add a project to projects.js and the agent knows about it, with no
 * parallel knowledge file to forget to update.
 */

const META_LABELS = {
  timeline: "Timeline",
  role: "Role",
  platform: "Platform",
  deliverables: "Deliverables",
  tools: "Tools",
};

/** Blocks carry layout data too; only the ones holding words are worth sending. */
function blockToText(block) {
  switch (block.type) {
    case "heading":
      return `\n## ${block.text}`;
    case "paragraph":
    case "text":
      return block.body;
    case "list":
      return [block.intro, ...(block.items || []).map((i) => `- ${i}`)]
        .filter(Boolean)
        .join("\n");
    default:
      // image, video, carousel, embed, divider — nothing to say about them.
      return null;
  }
}

function projectToText(project) {
  const cs = project.caseStudy || {};
  const meta = Object.entries(META_LABELS)
    .filter(([key]) => cs.meta?.[key])
    .map(([key, label]) => `${label}: ${cs.meta[key]}`);

  const body = (cs.blocks || []).map(blockToText).filter(Boolean);

  return [
    `# ${cs.title || project.title}`,
    `URL: https://itsmejaydeep.com${project.link}`,
    project.description,
    cs.summary,
    ...meta,
    ...body,
  ]
    .filter(Boolean)
    .join("\n");
}

function profileToText() {
  return [
    `# About`,
    `${profile.name} — ${profile.title}`,
    `Based in ${profile.location}.`,
    `Contact: ${profile.email} · ${profile.site} · ${profile.linkedin}`,
    `${profile.years} years of experience.`,
    profile.summary,
  ].join("\n");
}

/** Dates, titles and employers come from the résumé, so they can't drift from
 *  the PDF a recruiter downloads from the same page. */
function rolesToText() {
  const rows = roles.map((r) =>
    [
      `${r.title}, ${r.company} — ${r.location} (${r.from} – ${r.to})`,
      ...r.points.map((p) => `  - ${p}`),
    ].join("\n")
  );
  return ["# Work history", ...rows].join("\n");
}

function educationToText() {
  return [
    "# Education",
    ...education.map((e) => `- ${e.award}, ${e.institution} (${e.date})`),
    "",
    "# Certifications",
    ...certifications.map((c) => `- ${c.award}, ${c.issuer} (${c.date})`),
  ].join("\n");
}

function skillsToText() {
  return [
    "# Skills",
    ...Object.entries(skillGroups).map(([group, list]) => `${group}: ${list}`),
  ].join("\n");
}

/** Built once per cold start — this is pure string work over static imports. */
export const knowledge = [
  profileToText(),
  rolesToText(),
  educationToText(),
  skillsToText(),
  ...projects.map(projectToText),
].join("\n\n---\n\n");

export const projectIndex = projects.map((p) => ({
  title: p.caseStudy?.title || p.title,
  link: p.link,
}));
