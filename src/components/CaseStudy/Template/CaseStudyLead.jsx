export default function CaseStudyLead({ children, maxWidth = 725 }) {
  return (
    <p
      className="text-[12px] leading-[1.55] cs-text"
      style={{ maxWidth }}
    >
      {children}
    </p>
  );
}
