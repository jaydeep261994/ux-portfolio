import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { SPRING } from "../../constants/motion";
import projects from "../../data/projects";
import BandhanModal from "../CaseStudy/BandhanModal";

const bandhanProject = projects.find((p) => p.id === "bandhan");

const sidebarProjects = projects.map((p) => ({
  to: p.link,
  label: p.title,
  passwordProtected: p.passwordProtected,
}));

const modalThumbnails = [
  { id: "fedex", title: "FedEx", thumbnail: "/images/thumbnails/fedex.png", link: "/case-study/fedex" },
  { id: "audi", title: "Audi", thumbnail: "/images/thumbnails/audi.png", link: "/case-study/audi" },
  { id: "amns", title: "AM/NS India", thumbnail: "/images/thumbnails/amns.png", link: "/case-study/amns" },
  { id: "claypond", title: "Claypond", thumbnail: "/images/thumbnails/claypond.png", link: "/case-study/claypond" },
  { id: "tata-bolt", title: "TATA AIG", thumbnail: "/images/thumbnails/tata-bolt.png", link: "/case-study/tata-bolt" },
  { id: "inspectify", title: "Inspectify", thumbnail: "/images/thumbnails/inspectify.png", link: "/case-study/tata-inspectify" },
  { id: "cartier", title: "Cartier", thumbnail: "/images/thumbnails/cartier.png", link: "/case-study/cartier" },
  { id: "stockmann", title: "Stockmann", thumbnail: "/images/thumbnails/stockmann.png", link: "/case-study/stockmann" },
  { id: "bandhan", title: "Bandhan Bank", thumbnail: "/images/thumbnails/bandhan.png", link: "/case-study/bandhan" },
  { id: "hiranandani", title: "Hiranandani", thumbnail: "/images/thumbnails/hiranandani.png", bg: "#6a1d39", contain: true },
  { id: "oreo", title: "Oreo", thumbnail: "/images/thumbnails/oreo.png", bg: "#ffffff", contain: true },
  { id: "atl", title: "ATL Money Transfer", thumbnail: "/images/thumbnails/atl.png" },
  { id: "zoya", title: "Zoya", thumbnail: "/images/thumbnails/zoya.png" },
  { id: "signature", title: "Signature Collection", thumbnail: "/images/thumbnails/signature.png" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProjectsModal, setShowProjectsModal] = useState(false);
  const [showBandhanModal, setShowBandhanModal] = useState(false);

  const sidebarContent = (
    <div className="flex flex-col items-start w-full">
      {/* ── Profile ── */}
      <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-[11px] w-full hover:opacity-80 transition-opacity" style={{ padding: "23px 24px" }}>
        <img
          src="/images/profile-avatar.png"
          alt="Jaydeep Das"
          className="w-[35px] h-[35px] rounded-full object-cover shrink-0"
        />
        <span className="text-[14px] text-white tracking-[-0.14px] leading-5 whitespace-nowrap">
          Jaydeep Das
        </span>
      </Link>

      {/* ── Projects section ── */}
      <div className="flex flex-col gap-4 items-center w-full">
        {/* Top divider */}
        <div className="w-[242px] h-px bg-[#323131]" />

        {/* Projects label + arrow */}
        <div className="flex items-center justify-between w-[197px]">
          <span className="text-[14px] font-light text-[#8c8c8c] leading-[18px] tracking-[0.14px]">
            Projects
          </span>
          <button
            onClick={() => setShowProjectsModal(true)}
            className="relative group cursor-pointer p-1 hover:opacity-70 transition-opacity"
            aria-label="View all projects"
          >
            <img
              src="/images/icons/arrow-right.svg"
              alt=""
              className="w-3 h-3"
            />
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 text-[11px] text-white bg-[#333] rounded-[6px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              View more
            </span>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col items-start" aria-label="Projects">
          {sidebarProjects.map(({ to, label, passwordProtected }) =>
            passwordProtected ? (
              <button
                key={to}
                onClick={() => {
                  setShowBandhanModal(true);
                  setIsOpen(false);
                }}
                className="flex items-center w-[219px] rounded-[9px] text-[14px] leading-[14px] text-[#cecece] transition-colors hover:bg-[#282828] cursor-pointer text-left"
                style={{ padding: "10px 12px" }}
              >
                {label}
              </button>
            ) : (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center w-[219px] rounded-[9px] text-[14px] leading-[14px] text-[#cecece] transition-colors ${
                    isActive ? "bg-[#282828]" : "hover:bg-[#282828]"
                  }`
                }
                style={{ padding: "10px 12px" }}
              >
                {label}
              </NavLink>
            )
          )}
        </nav>

        {/* Bottom divider */}
        <div className="w-[243px] h-px bg-[#323131]" />
      </div>

      {/* ── On Loop / Exploration ── */}
      <div className="flex flex-col gap-px items-start w-full" style={{ padding: "15px 12px" }}>
        <NavLink
          to="/on-loop"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `flex items-center w-full rounded-[9px] text-[14px] leading-[14px] text-[#cecece] transition-colors ${
              isActive ? "bg-[#282828]" : "hover:bg-[#282828]"
            }`
          }
          style={{ padding: "10px 12px" }}
        >
          On Loop
        </NavLink>
        <NavLink
          to="/exploration"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `flex items-center w-full rounded-[9px] text-[14px] leading-[14px] text-[#cecece] transition-colors ${
              isActive ? "bg-[#282828]" : "hover:bg-[#282828]"
            }`
          }
          style={{ padding: "10px 12px" }}
        >
          Exploration
        </NavLink>
      </div>

      {/* ── Contact section ── */}
      <div className="flex flex-col gap-[13px] items-start w-full" style={{ padding: "17px 22px 17px 11px" }}>
        <div className="flex items-center w-full" style={{ padding: "0 12px" }}>
          <span className="text-[14px] font-light text-[#8c8c8c] leading-[18px] tracking-[0.14px]">
            Contact
          </span>
        </div>
        <div className="flex flex-col items-start">
          <a
            href="mailto:jaydeep@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[10px] rounded-[9px] text-[14px] leading-[14px] text-[#cecece] hover:bg-[#282828]"
            style={{ padding: "10px 12px" }}
          >
            <img src="/images/icons/at.svg" alt="" className="w-4 h-4 shrink-0" />
            Email
          </a>
          <a
            href="https://linkedin.com/in/jaydeep"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[10px] rounded-[9px] text-[14px] leading-[14px] text-[#cecece] hover:bg-[#282828]"
            style={{ padding: "10px 12px" }}
          >
            <img src="/images/icons/linkedin.svg" alt="" className="w-4 h-4 shrink-0" />
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hamburger — visible below lg */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed top-0 left-0 h-full w-[243px] z-40 flex flex-col bg-[#1d1d1d] border-r border-[#444] overflow-y-auto lg:hidden"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={SPRING}
          >
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-[243px] z-40 flex-col bg-[#1d1d1d] border-r border-[#444] overflow-y-auto">
        {sidebarContent}
      </aside>

      {/* Projects Modal */}
      <AnimatePresence>
        {showProjectsModal && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProjectsModal(false)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProjectsModal(false)}
            >
              <motion.div
                className="bg-[rgba(40,39,39,0.77)] backdrop-blur-md rounded-[30px] p-[34px] max-w-[580px] w-full"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-[18px] text-white leading-[20px] tracking-[-0.18px] mb-[20px] font-['Poppins',sans-serif]">
                  Projects
                </p>
                <div className="flex flex-wrap gap-[13px]">
                  {modalThumbnails.map((item) => {
                    const imgEl = (
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className={`w-full h-full ${item.contain ? "object-contain p-[10px]" : "object-cover"}`}
                      />
                    );
                    const style = item.bg ? { backgroundColor: item.bg } : undefined;

                    return item.link ? (
                      <Link
                        key={item.id}
                        to={item.link}
                        onClick={() => {
                          setShowProjectsModal(false);
                          setIsOpen(false);
                        }}
                        className="w-[72px] h-[71px] rounded-[14px] overflow-hidden shrink-0 hover:ring-2 hover:ring-white/30 transition-all"
                        style={style}
                      >
                        {imgEl}
                      </Link>
                    ) : (
                      <div
                        key={item.id}
                        className="w-[72px] h-[71px] rounded-[14px] overflow-hidden shrink-0 hover:ring-2 hover:ring-white/30 transition-all"
                        style={style}
                      >
                        {imgEl}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bandhan Password Modal */}
      {bandhanProject && (
        <BandhanModal
          project={bandhanProject}
          isOpen={showBandhanModal}
          onClose={() => setShowBandhanModal(false)}
        />
      )}
    </>
  );
}
