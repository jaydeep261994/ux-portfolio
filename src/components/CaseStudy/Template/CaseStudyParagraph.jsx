/**
 * Sizes read from Figma 3651-76519: body copy is 12px, `lg` blocks are 14px, and the
 * semibold callouts ("My Role") are 16px.
 */
const SIZES = {
  sm: "text-[12px] leading-[1.55]",
  base: "text-[12px] leading-[1.55]",
  lg: "text-[14px] leading-[1.55]",
};

export default function CaseStudyParagraph({
  children,
  size = "base",
  weight = "normal",
  maxWidth = 808,
}) {
  const isSemibold = weight === "semibold";
  const sizeClass = isSemibold ? "text-[16px] leading-[1.55]" : SIZES[size] || SIZES.base;

  return (
    <p
      className={`${sizeClass} ${isSemibold ? "font-semibold" : "font-normal"} cs-text whitespace-pre-line`}
      style={{ maxWidth }}
    >
      {children}
    </p>
  );
}
