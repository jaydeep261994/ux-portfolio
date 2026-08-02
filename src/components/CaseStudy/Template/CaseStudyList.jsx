export default function CaseStudyList({ intro, items = [], maxWidth = 808 }) {
  return (
    <div
      className="flex flex-col gap-[12px] cs-text"
      style={{ "--measure": `${maxWidth}px` }}
    >
      {intro && <p className="cs-copy whitespace-pre-line">{intro}</p>}
      <ul className="cs-copy list-disc pl-[22px] flex flex-col gap-[8px]">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
