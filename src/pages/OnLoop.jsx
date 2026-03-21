import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import songs from "../data/songs";
import { PAGE_TRANSITION } from "../constants/motion";

export default function OnLoop() {
  const [activeSong, setActiveSong] = useState(null);

  const hasActive = activeSong !== null;

  const embedSrc = activeSong
    ? `${activeSong.embedUrl}${activeSong.embedUrl.includes("?") ? "&" : "?"}theme=dark`
    : "";

  return (
    <motion.div className="content-main relative" {...PAGE_TRANSITION}>
      <h1 className="text-[26px] text-white leading-[28px] tracking-[-0.26px] mb-[30px]">
        On Loop
      </h1>

      <div className="w-full h-px bg-[#323131] mb-[25px]" />

      <div className="flex flex-col">
        {songs.map((song) => (
          <div
            key={song.id}
            className={`flex items-center justify-between py-[8px] group cursor-pointer rounded-[8px] px-[10px] -mx-[10px] transition-colors ${
              activeSong?.id === song.id ? "bg-[#282828]" : "hover:bg-[#1f1f1f]"
            }`}
            onClick={() =>
              setActiveSong(activeSong?.id === song.id ? null : song)
            }
          >
            {/* Left: Artwork + Song Info */}
            <div className="flex gap-[16px] items-center">
              <div className="relative w-[48px] h-[48px] shrink-0">
                <img
                  src={song.artwork}
                  alt={song.title}
                  className="w-full h-full rounded-[6px] object-cover bg-[#d9d9d9]"
                />
                {activeSong?.id === song.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-[6px]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-[6px]">
                <p
                  className={`text-[14px] leading-[16px] ${
                    activeSong?.id === song.id ? "text-white" : "text-[#cecece]"
                  }`}
                >
                  {song.title}
                </p>
                <p className="text-[13px] text-[#6f6f6f] leading-[14px]">
                  {song.artist}
                </p>
              </div>
            </div>

            {/* Right: Play on Apple Music */}
            <div className="flex gap-[9px] items-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[12px] text-[#cecece] leading-[14px] font-light whitespace-nowrap">
                Play on Apple Music
              </span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 256 256"
                fill="none"
              >
                <path
                  d="M96 48l96 80-96 80"
                  fill="none"
                  stroke="#cecece"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* ── Side Panel ── */}
      <AnimatePresence>
        {hasActive && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSong(null)}
            />

            {/* Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[400px] bg-[#1a1a1a] border-l border-[#323131] flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between p-5 border-b border-[#323131]">
                <div className="flex items-center gap-3">
                  <img
                    src={activeSong.artwork}
                    alt={activeSong.title}
                    className="w-[44px] h-[44px] rounded-[6px] object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-[14px] text-white leading-[16px]">
                      {activeSong.title}
                    </p>
                    <p className="text-[12px] text-[#6f6f6f] leading-[14px]">
                      {activeSong.artist}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveSong(null)}
                  className="text-[#6f6f6f] hover:text-white transition-colors cursor-pointer p-2"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Embed */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  allow="autoplay *; encrypted-media *;"
                  frameBorder="0"
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    border: "none",
                  }}
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src={embedSrc}
                  title={`${activeSong.title} - ${activeSong.artist}`}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
