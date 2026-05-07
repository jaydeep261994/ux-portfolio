import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";
import {
  CaseStudyHero,
  CaseStudyTitleRow,
  CaseStudyLead,
  CaseStudyMeta,
  CaseStudyImageBlock,
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

  return (
    <motion.div
      key={project.id}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 220, damping: 28 }}
      className="relative bg-[#181818] min-h-screen"
    >
      {/* Hero — full bleed within the right column */}
      <CaseStudyHero
        bg={cs.hero?.bg || "#EDEDED"}
        height={cs.hero?.height || 507}
        image={cs.hero?.image || project.coverImage}
        alt={`${project.title} hero`}
      />

      {/* Content column */}
      <div className="pt-[54px] pb-[120px] px-[64px]">
        <div className="flex flex-col gap-[36px]">
          <CaseStudyTitleRow
            title={cs.title || project.title}
            logo={cs.logo || project.logo}
            logoAlt={`${project.title} logo`}
          />

          {cs.summary && <CaseStudyLead maxWidth={663}>{cs.summary}</CaseStudyLead>}

          {metaItems.length > 0 && <CaseStudyMeta items={metaItems} />}

          {blocks.map((block, i) => {
            if (block.type === "image") {
              return (
                <CaseStudyImageBlock
                  key={i}
                  src={block.src}
                  alt={block.alt}
                  height={block.height}
                  bg={block.bg}
                />
              );
            }
            if (block.type === "text") {
              return (
                <CaseStudyLead key={i} maxWidth={block.maxWidth || 725}>
                  {block.body}
                </CaseStudyLead>
              );
            }
            return null;
          })}

          {blocks.length === 0 && (
            <p className="text-[12px] text-[#5b5b5b] font-['Poppins',sans-serif]">
              Detailed case study coming soon.
            </p>
          )}

          <div className="pt-[24px]">
            <Link
              to="/"
              className="inline-block text-[12px] text-[#D2D2D2] hover:text-white transition-colors font-['Poppins',sans-serif]"
            >
              ← Back to all projects
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
