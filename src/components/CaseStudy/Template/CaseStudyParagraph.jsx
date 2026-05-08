export default function CaseStudyParagraph({
  children,
  size = "base",
  weight = "normal",
  maxWidth = 808,
}) {
  const sizeMap = {
    sm: "text-[12px] leading-[1.55]",
    base: "text-[14px] leading-[1.55]",
    lg: "text-[16px] leading-[1.55]",
  };
  const weightClass = weight === "semibold" ? "font-semibold" : "font-normal";
  return (
    <p
      className={`${sizeMap[size] || sizeMap.base} ${weightClass} text-[#D2D2D2] font-['Poppins',sans-serif] whitespace-pre-line`}
      style={{ maxWidth }}
    >
      {children}
    </p>
  );
}
