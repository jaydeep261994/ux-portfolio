export default function CaseStudyLead({ children, maxWidth = 725 }) {
  return (
    <p
      className="text-[15px] leading-[1.55] text-[#D2D2D2] font-['Poppins',sans-serif]"
      style={{ maxWidth }}
    >
      {children}
    </p>
  );
}
