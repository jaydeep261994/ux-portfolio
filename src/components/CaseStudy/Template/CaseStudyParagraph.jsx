/**
 * One size for all body copy. Figma sets 12/14/16px depending on the block, but at
 * paragraph length 12px is too small to read comfortably, and three sizes make the
 * page feel unsettled. Weight still distinguishes the callouts.
 *
 * `maxWidth` from the data becomes an upper bound only — the measure is also capped
 * so lines stay inside a readable character count.
 */
export default function CaseStudyParagraph({
  children,
  size, // eslint-disable-line no-unused-vars -- kept so existing block data stays valid
  weight = "normal",
  maxWidth = 808,
}) {
  const isSemibold = weight === "semibold";

  return (
    <p
      className={`cs-copy ${isSemibold ? "font-semibold" : "font-normal"} cs-text whitespace-pre-line`}
      style={{ "--measure": `${maxWidth}px` }}
    >
      {children}
    </p>
  );
}
