import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";
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

export default function CaseStudy() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [projectId]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const cs = project.caseStudy || {};
  const blocks = cs.blocks || [];
  const metaItems = buildMetaItems(cs.meta);

  // Find next project for footer nav
  const idx = projects.findIndex((p) => p.id === projectId);
  const nextProject = idx >= 0 ? projects[(idx + 1) % projects.length] : null;

  return (
    <motion.div
      key={project.id}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 220, damping: 28 }}
      className="relative bg-[#181818] min-h-screen"
    >
      <CaseStudyHero
        bg={cs.hero?.bg || "#EDEDED"}
        height={cs.hero?.height || 507}
        image={cs.hero?.image || project.coverImage}
        video={cs.hero?.video}
        poster={cs.hero?.poster}
        fit={cs.hero?.fit || "contain"}
        alt={`${project.title} hero`}
      />

      <div className="pt-[36px] sm:pt-[44px] lg:pt-[54px] pb-[80px] lg:pb-[120px] px-5 sm:px-8 lg:px-[64px]">
        <div className="flex flex-col gap-[28px] sm:gap-[36px]">
          <CaseStudyTitleRow
            title={cs.title || project.title}
            logo={cs.logo || project.logo}
            logoAlt={`${project.title} logo`}
            logoClass={cs.titleLogoClass}
          />

          {cs.summary && <CaseStudyLead maxWidth={663}>{cs.summary}</CaseStudyLead>}

          {metaItems.length > 0 && <CaseStudyMeta items={metaItems} />}

          {blocks.map(renderBlock)}

          {blocks.length === 0 && (
            <p className="text-[12px] text-[#5b5b5b] font-['Poppins',sans-serif]">
              Detailed case study coming soon.
            </p>
          )}

          {nextProject && (
            <CaseStudyFooterNav next={{ title: nextProject.title.toUpperCase(), link: nextProject.link }} />
          )}
        </div>
      </div>
    </motion.div>
  );
}
