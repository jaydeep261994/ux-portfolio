/**
 * Base bento surface. Owns radius, background and padding only — never content.
 * `as` lets a card become an <a> without duplicating the surface styles.
 */
const TINTS = {
  default: "var(--bg-card)",
  alt: "var(--bg-card-alt)",
  green: "var(--tint-green)",
  cyan: "var(--tint-cyan)",
  violet: "var(--tint-violet)",
};

export default function Card({
  as: Tag = "div",
  tint = "default",
  className = "",
  style,
  children,
  ...rest
}) {
  return (
    <Tag
      className={`bento-card ${className}`}
      style={{ background: TINTS[tint] ?? TINTS.default, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
