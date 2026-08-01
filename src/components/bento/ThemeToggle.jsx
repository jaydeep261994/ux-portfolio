import Card from "./Card";
import useTheme from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { toggle, isDark } = useTheme();

  return (
    <Card tint="alt" className="info-card theme-card">
      <span className="info-card__label">Dark mode</span>
      <button
        type="button"
        className="theme-switch"
        onClick={toggle}
        aria-pressed={isDark}
        aria-label="Dark mode"
      >
        <span className="theme-switch__thumb" data-side={isDark ? "right" : "left"} />
        <span className="theme-switch__icon" aria-hidden="true">
          ☀
        </span>
        <span className="theme-switch__icon" aria-hidden="true">
          ☾
        </span>
      </button>
    </Card>
  );
}
