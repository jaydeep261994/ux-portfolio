import { Link } from "react-router-dom";
import { usePostHog } from "@posthog/react";

export default function CaseStudyFooterNav({ next }) {
  const posthog = usePostHog();
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-[32px] sm:pt-[40px]">
      <Link
        to="/"
        className="flex items-center gap-[11px] text-[16px] cs-text cs-link-hover transition-colors"
      >
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to All Projects
      </Link>

      {next && (
        <Link
          to={next.link}
          className="flex items-center gap-[11px] text-[16px] cs-text cs-link-hover transition-colors"
          onClick={() => posthog?.capture("next_project_clicked", { project_title: next.title })}
        >
          {next.title}
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      )}
    </div>
  );
}
