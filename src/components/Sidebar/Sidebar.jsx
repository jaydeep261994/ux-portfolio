import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { SPRING } from "../../constants/motion";
import projects from "../../data/projects";

const sidebarProjects = projects.map((p) => ({
  to: p.link,
  label: p.title,
}));

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarContent = (
    <div className="flex flex-col items-start w-full">
      {/* ── Profile ── */}
      <div className="flex items-center gap-[11px] w-full" style={{ padding: "23px 24px" }}>
        <img
          src="/images/profile-avatar.png"
          alt="Jaydeep Das"
          className="w-[35px] h-[35px] rounded-full object-cover shrink-0"
        />
        <span className="text-[14px] text-white tracking-[-0.14px] leading-5 whitespace-nowrap">
          Jaydeep Das
        </span>
      </div>

      {/* ── Projects section ── */}
      <div className="flex flex-col gap-4 items-center w-full">
        {/* Top divider */}
        <div className="w-[242px] h-px bg-[#323131]" />

        {/* Projects label + arrow */}
        <div className="flex items-center justify-between w-[197px]">
          <span className="text-[14px] font-light text-[#8c8c8c] leading-[18px] tracking-[0.14px]">
            Projects
          </span>
          <img
            src="/images/icons/arrow-right.svg"
            alt=""
            className="w-3 h-3"
          />
        </div>

        {/* Nav items */}
        <nav className="flex flex-col items-start" aria-label="Projects">
          {sidebarProjects.map(({ to, label }) => (
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
          ))}
        </nav>

        {/* Bottom divider */}
        <div className="w-[243px] h-px bg-[#323131]" />
      </div>

      {/* ── On Loop / Exploration ── */}
      <div className="flex flex-col gap-px items-start w-full" style={{ padding: "15px 12px" }}>
        <NavLink
          to="/on-loop"
          onClick={() => setIsOpen(false)}
          className="flex items-center w-full rounded-[9px] text-[14px] leading-[14px] text-[#cecece] hover:bg-[#282828]"
          style={{ padding: "10px 12px" }}
        >
          On Loop
        </NavLink>
        <NavLink
          to="/exploration"
          onClick={() => setIsOpen(false)}
          className="flex items-center w-full rounded-[9px] text-[14px] leading-[14px] text-[#cecece] hover:bg-[#282828]"
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
    </>
  );
}
