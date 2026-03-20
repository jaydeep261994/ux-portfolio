import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../data/projects";

export default function TopBar() {
  const { pathname } = useLocation();
  const [copied, setCopied] = useState(false);

  // Find the current project from the URL
  const currentProject = projects.find((p) => p.link === pathname);

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
          className="flex items-center justify-between bg-[#1d1d1d]"
          style={{ padding: "12px 20px" }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-[6px]">
            <img src="/images/icons/house.svg" alt="" className="w-[19px] h-[19px]" />
            <Link
              to="/"
              className="text-[13px] text-[#878787] leading-5 tracking-[-0.13px] hover:text-white transition-colors"
            >
              Home
            </Link>
            {currentProject && (
              <>
                <span className="text-[13px] text-[#878787] leading-5">/</span>
                <span className="text-[13px] text-[#878787] leading-5 tracking-[-0.13px]">
                  {currentProject.title}
                </span>
              </>
            )}
          </div>

          <button
            className="flex items-center gap-[6px] bg-[#2d2c2c] rounded-[6px] hover:bg-white/10 transition-colors"
            style={{ padding: "4px 10px" }}
            onClick={handleCopy}
          >
            <img src="/images/icons/link.svg" alt="" className="w-[19px] h-[19px]" />
            <span className="text-[13px] text-[#878787] leading-5 tracking-[-0.13px]">
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
            <div className="flex items-center gap-[10px] bg-white rounded-full px-[10px] py-[6px] shadow-lg">
              <div className="flex items-center justify-center w-[28px] h-[28px] bg-[#f2f1f1] rounded-[15px] shrink-0">
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
              <span className="text-[12px] text-[#5b5b5b] whitespace-nowrap pr-[5px]">
                Link Copied
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
