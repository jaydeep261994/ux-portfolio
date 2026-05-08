export default function CaseStudyList({ intro, items = [], maxWidth = 808 }) {
  return (
    <div
      className="flex flex-col gap-[12px] font-['Poppins',sans-serif] text-[#D2D2D2]"
      style={{ maxWidth }}
    >
      {intro && (
        <p className="text-[14px] leading-[1.55] whitespace-pre-line">{intro}</p>
      )}
      <ul className="list-disc pl-[22px] flex flex-col gap-[8px]">
        {items.map((item, i) => (
          <li key={i} className="text-[14px] leading-[1.55]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
