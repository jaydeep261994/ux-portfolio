export default function CaseStudyLead({ children, maxWidth = 725 }) {
  return (
    <p className="cs-copy cs-text" style={{ "--measure": `${maxWidth}px` }}>
      {children}
    </p>
  );
}
