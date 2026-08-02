import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { SPRING } from "../../constants/motion";
import projects from "../../data/projects";
import { playProjectClick } from "../../lib/sound";
import { usePostHog } from "@posthog/react";

const sidebarProjects = projects.map((p) => ({
  to: p.link,
  label: p.title,
  passwordProtected: p.passwordProtected,
}));

export default function Sidebar({ isOpen: isOpenProp, setIsOpen: setIsOpenProp } = {}) {
  const [internalIsOpen, internalSetIsOpen] = useState(false);
  const isControlled = setIsOpenProp !== undefined;
  const isOpen = isControlled ? isOpenProp : internalIsOpen;
  const setIsOpen = isControlled ? setIsOpenProp : internalSetIsOpen;
  const posthog = usePostHog();

  // Escape closes the mobile drawer, matching the overlay.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, setIsOpen]);

  const sidebarContent = (
    <div className="flex flex-col items-start w-full min-h-full">
      {/* ── Profile ── */}
      <Link to="/" onClick={() => setIsOpen(false)} className="profile-link group flex items-center gap-[11px] w-full hover:opacity-80 transition-opacity" style={{ padding: "23px 24px" }}>
        <span className="gradient-orb shrink-0" aria-hidden="true" />
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
        </div>

        {/* Nav items */}
        <nav className="flex flex-col items-start" aria-label="Projects">
          {sidebarProjects.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => {
                playProjectClick();
                posthog?.capture("sidebar_project_clicked", { project_title: label });
                setIsOpen(false);
              }}
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

      {/* ── Exploration ── */}
      <div className="flex flex-col gap-px items-start w-full" style={{ padding: "15px 12px" }}>
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
      <div className="flex flex-col gap-[13px] items-start w-full" style={{ padding: "17px 22px 0 11px" }}>
        <div className="flex items-center w-full" style={{ padding: "0 12px" }}>
          <span className="text-[14px] font-light text-[#8c8c8c] leading-[18px] tracking-[0.14px]">
            Contact
          </span>
        </div>
        <div className="flex flex-col items-start">
          <a
            href="mailto:jaydeepdas06@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[10px] rounded-[9px] text-[14px] leading-[14px] text-[#cecece] hover:bg-[#282828]"
            style={{ padding: "10px 12px" }}
            onClick={() => posthog?.capture("contact_link_clicked", { channel: "email" })}
          >
            <img src="/images/icons/at.svg" alt="" className="w-4 h-4 shrink-0" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/jaydeep-das-8a1169143/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[10px] rounded-[9px] text-[14px] leading-[14px] text-[#cecece] hover:bg-[#282828]"
            style={{ padding: "10px 12px" }}
            onClick={() => posthog?.capture("contact_link_clicked", { channel: "linkedin" })}
          >
            <img src="/images/icons/linkedin.svg" alt="" className="w-4 h-4 shrink-0" />
            Linkedin
          </a>
        </div>
      </div>

      {/* ── Credit footer ── */}
      <div className="mt-auto w-full" style={{ padding: "20px 24px" }}>
        <p className="text-[11px] leading-[14px] text-[#5b5b5b] tracking-[0.05px]">
          Designed and developed by{" "}
          <span className="text-[#8c8c8c]">Jaydeep</span>
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            type="button"
            aria-label="Close menu"
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
            className="fixed top-0 left-0 h-full w-[243px] z-40 flex flex-col bg-[#1d1d1d] border-r border-[#444] overflow-y-auto overscroll-contain lg:hidden"
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
