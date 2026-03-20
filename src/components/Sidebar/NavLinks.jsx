import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function NavLinks({ onNavigate }) {
  return (
    <nav className="mt-8 flex flex-col gap-2" aria-label="Main navigation">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onNavigate}
          className={({ isActive }) =>
            `py-2 px-3 rounded-md transition-colors ${
              isActive
                ? "text-white bg-white/10"
                : "text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5"
            }`
          }
          style={{ fontSize: "clamp(0.875rem, 0.8rem + 0.25vw, 1rem)" }}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
