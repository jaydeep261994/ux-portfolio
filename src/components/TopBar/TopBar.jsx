import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../data/projects";

export default function TopBar({ onMenuToggle, isMenuOpen }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const isCaseStudy = pathname.startsWith("/case-study/");

  // Find the current project from the URL
  const currentProject = projects.find((p) => p.link === pathname);

  // Page titles for non-project routes
  const pageTitles = {
    "/on-loop": "On Loop",
    "/exploration": "Exploration",
  };
  const pageTitle = pageTitles[pathname];

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <header className="sticky top-0 z-20">
        {/* Nav row */}
        <div
          className="flex items-center justify-between bg-[#1d1d1d] gap-3 px-3 sm:px-5 py-3"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 sm:gap-[6px] min-w-0">
            {onMenuToggle && (
              <button
                type="button"
                onClick={onMenuToggle}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                className="lg:hidden flex flex-col gap-1 p-1 rounded-md hover:bg-white/5 transition-colors mr-1"
              >
                <span className={`block w-4 h-0.5 bg-[#cecece] transition-transform ${isMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
                <span className={`block w-4 h-0.5 bg-[#cecece] transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-4 h-0.5 bg-[#cecece] transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
              </button>
            )}
            {isCaseStudy ? (
              <button
                type="button"
                onClick={() => navigate(-1)}
                aria-label="Go back"
                className="flex items-center justify-center w-[19px] h-[19px] text-[#878787] hover:text-white transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              </button>
            ) : (
              <img src="/images/icons/house.svg" alt="" className="w-[19px] h-[19px]" />
            )}
            <Link
              to="/"
              className="text-[13px] text-[#878787] leading-5 tracking-[-0.13px] hover:text-white transition-colors"
            >
              Home
            </Link>
            {(currentProject || pageTitle) && (
              <>
                <span className="text-[13px] text-[#878787] leading-5">/</span>
                <span className="text-[13px] text-[#878787] leading-5 tracking-[-0.13px] truncate min-w-0">
                  {currentProject ? currentProject.title : pageTitle}
                </span>
              </>
            )}
          </div>

          <button
            className="flex items-center gap-[6px] bg-[#2d2c2c] rounded-[6px] hover:bg-white/10 transition-colors shrink-0"
            style={{ padding: "4px 10px" }}
            onClick={handleCopy}
            aria-label="Copy link"
          >
            <img src="/images/icons/link.svg" alt="" className="w-[19px] h-[19px]" />
            <span className="text-[13px] text-[#878787] leading-5 tracking-[-0.13px] hidden sm:inline">
              Copy link
            </span>
          </button>
        </div>

        {/* Status badge row */}
        <div
          className="flex items-center justify-center bg-[#292929] h-[38px]"
          style={{ padding: "7px 0" }}
        >
          <div
            className="flex items-center gap-2 bg-[#353434] rounded-full"
            style={{ padding: "5px 7px" }}
          >
            <img src="/images/icons/dot-green.svg" alt="" className="w-[6px] h-[6px]" />
            <span className="text-[14px] text-[#979797] leading-[14px]">
              looking for my next role
            </span>
          </div>
        </div>
      </header>

      {/* Link Copied toast — fixed at bottom center of content area */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="fixed z-50 left-0 lg:left-[243px] right-0 flex justify-center pointer-events-none"
            style={{ bottom: 50 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="flex items-center gap-[8px] bg-white rounded-full pl-[4px] pr-[14px] py-[4px] shadow-lg">
              <div className="flex items-center justify-center w-[28px] h-[28px] bg-[#f2f1f1] rounded-full shrink-0">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5b5b5b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-[12px] text-[#5b5b5b] whitespace-nowrap">
                Link Copied
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
