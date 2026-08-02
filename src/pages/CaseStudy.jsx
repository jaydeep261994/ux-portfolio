import { useEffect } from "react";
import projects from "../data/projects";
import { usePostHog } from "@posthog/react";
import {
  CaseStudyHero,
  CaseStudyTitleRow,
  CaseStudyLead,
  CaseStudyMeta,
  CaseStudyImageBlock,
  CaseStudyVideoBlock,
  CaseStudyCarousel,
  CaseStudyEmbed,
  CaseStudySectionHeading,
  CaseStudyParagraph,
  CaseStudyDivider,
  CaseStudyFooterNav,
  CaseStudyList,
} from "../components/CaseStudy/Template";

const META_LABELS = {
  timeline: "TIMELINE",
  role: "ROLE",
  platform: "PLATFORM",
  deliverables: "DELIVERABLES",
  tools: "TOOLS USED",
};

function buildMetaItems(meta = {}) {
  return Object.entries(META_LABELS)
    .filter(([key]) => meta[key])
    .map(([key, label]) => ({ label, value: meta[key] }));
}

function renderBlock(block, i) {
  switch (block.type) {
    case "image":
      return (
        <CaseStudyImageBlock
          key={i}
          src={block.src}
          alt={block.alt}
          aspectRatio={block.aspectRatio}
          bg={block.bg}
          fit={block.fit}
        />
      );
    case "video":
      return (
        <CaseStudyVideoBlock
          key={i}
          src={block.src}
          poster={block.poster}
          aspectRatio={block.aspectRatio}
          bg={block.bg}
        />
      );
    case "carousel":
      return (
        <CaseStudyCarousel
          key={i}
          images={block.images}
          aspectRatio={block.aspectRatio}
          bg={block.bg}
        />
      );
    case "embed":
      return (
        <CaseStudyEmbed
          key={i}
          src={block.src}
          title={block.title}
          aspectRatio={block.aspectRatio}
          bg={block.bg}
          allow={block.allow}
        />
      );
    case "heading":
      return <CaseStudySectionHeading key={i}>{block.text}</CaseStudySectionHeading>;
    case "paragraph":
      return (
        <CaseStudyParagraph
          key={i}
          size={block.size}
          weight={block.weight}
          maxWidth={block.maxWidth}
        >
          {block.body}
        </CaseStudyParagraph>
      );
    case "text":
      return (
        <CaseStudyLead key={i} maxWidth={block.maxWidth || 725}>
          {block.body}
        </CaseStudyLead>
      );
    case "divider":
      return <CaseStudyDivider key={i} />;
    case "list":
      return (
        <CaseStudyList
          key={i}
          intro={block.intro}
          items={block.items}
          maxWidth={block.maxWidth}
        />
      );
    default:
      return null;
  }
}

/** Content only — the sheet in CaseStudySheet owns the surface and the scrolling. */
export default function CaseStudy({ projectId, titleId }) {
  const project = projects.find((p) => p.id === projectId);
  const posthog = usePostHog();

  useEffect(() => {
    if (project) {
      posthog?.capture("case_study_viewed", {
        project_id: project.id,
        project_title: project.title,
      });
    }
  }, [posthog, project]);

  if (!project) return null;

  const cs = project.caseStudy || {};
  const blocks = cs.blocks || [];
  const metaItems = buildMetaItems(cs.meta);

  // Find next project for footer nav
  const idx = projects.findIndex((p) => p.id === projectId);
  const nextProject = idx >= 0 ? projects[(idx + 1) % projects.length] : null;

  return (
    <>
      <CaseStudyHero
        bg={cs.hero?.bg || "#EDEDED"}
        height={cs.hero?.height || 507}
        image={cs.hero?.image || project.coverImage}
        video={cs.hero?.video}
        poster={cs.hero?.poster}
        fit={cs.hero?.fit || "contain"}
        alt={`${project.title} hero`}
      />

      <div className="cs-body">
        <div className="flex flex-col gap-[28px] sm:gap-[36px]">
          <CaseStudyTitleRow
            titleId={titleId}
            title={cs.title || project.title}
            logo={cs.logo || project.logo}
            logoAlt={`${project.title} logo`}
            logoClass={cs.titleLogoClass}
          />

          {cs.summary && <CaseStudyLead maxWidth={663}>{cs.summary}</CaseStudyLead>}

          {metaItems.length > 0 && <CaseStudyMeta items={metaItems} />}

          {blocks.map(renderBlock)}

          {blocks.length === 0 && (
            <p className="text-[12px] cs-muted">
              Detailed case study coming soon.
            </p>
          )}

          {nextProject && (
            <CaseStudyFooterNav next={{ title: nextProject.title.toUpperCase(), link: nextProject.link }} />
          )}
        </div>
      </div>
    </>
  );
}
