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
    <>
      {/* Profile */}
      <div className="flex items-center gap-[11px] px-6 pt-[22px] pb-4">
        <img
          src="/images/profile-avatar.png"
          alt="Jaydeep Das"
          className="w-[35px] h-[35px] rounded-full object-cover"
        />
        <span
          className="text-sm text-white tracking-[-0.14px] leading-5"
        >
          Jaydeep Das
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-[var(--color-border)]" />

      {/* Projects section */}
      <div className="flex flex-col gap-4 pt-4">
        <div className="flex items-center justify-between px-[23px]">
          <span className="text-sm font-light text-[var(--color-text-muted)] tracking-[0.14px]">
            Projects
          </span>
          <img
            src="/images/icons/arrow-right.svg"
            alt=""
            className="w-3 h-3 opacity-60"
          />
        </div>

        <nav className="flex flex-col" aria-label="Projects">
          {sidebarProjects.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-6 py-[10px] text-sm leading-[14px] transition-colors ${
                  isActive
                    ? "bg-[var(--color-bg-hover)] text-[var(--color-text-secondary)] rounded-[9px] mx-3 px-3"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] mx-3 px-3 rounded-[9px]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Divider */}
      <div className="h-px bg-[var(--color-border)] mt-2" />

      {/* Extra links */}
      <div className="flex flex-col mt-2">
        <NavLink
          to="/on-loop"
          onClick={() => setIsOpen(false)}
          className="px-6 py-[10px] text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] mx-3 px-3 rounded-[9px]"
        >
          On Loop
        </NavLink>
        <NavLink
          to="/exploration"
          onClick={() => setIsOpen(false)}
          className="px-6 py-[10px] text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] mx-3 px-3 rounded-[9px]"
        >
          Exploration
        </NavLink>
      </div>

      {/* Divider */}
      <div className="h-px bg-[var(--color-border)] mt-2" />

      {/* Contact section */}
      <div className="flex flex-col mt-4">
        <span className="px-6 text-sm font-light text-[var(--color-text-muted)] tracking-[0.14px] mb-2">
          Contact
        </span>
        <a
          href="mailto:jaydeep@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[10px] px-6 py-[10px] text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] mx-3 px-3 rounded-[9px]"
        >
          <img src="/images/icons/at.svg" alt="" className="w-4 h-4" />
          Email
        </a>
        <a
          href="https://linkedin.com/in/jaydeep"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[10px] px-6 py-[10px] text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] mx-3 px-3 rounded-[9px]"
        >
          <img src="/images/icons/linkedin.svg" alt="" className="w-4 h-4" />
          Linkedin
        </a>
      </div>
    </>
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
        <span
          className={`block w-6 h-0.5 bg-white transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
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
            className="fixed top-0 left-0 h-full z-40 flex flex-col bg-[var(--color-bg-sidebar)] border-r border-[var(--color-border-sidebar)] overflow-y-auto lg:hidden"
            style={{ width: "var(--sidebar-width)" }}
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
      <aside
        className="hidden lg:flex fixed top-0 left-0 h-full z-40 flex-col bg-[var(--color-bg-sidebar)] border-r border-[var(--color-border-sidebar)] overflow-y-auto"
        style={{ width: "var(--sidebar-width)" }}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
