export default function CaseStudyMeta({ items = [] }) {
  return (
    <div className="w-full">
      <div className="h-px bg-[#4F4F4F]" />
      <div className="flex flex-wrap justify-between gap-x-[45px] gap-y-6 py-6">
        {items.map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-[7px] min-w-0 max-w-[260px]">
            <span className="text-[12px] uppercase tracking-wide text-[#D2D2D2] font-['Poppins',sans-serif]">
              {label}
            </span>
            <span className="text-[12px] leading-[1.1666] text-[#D2D2D2] font-['Poppins',sans-serif]">
              {value}
            </span>
          </div>
        ))}
      </div>
      <div className="h-px bg-[#4F4F4F]" />
    </div>
  );
}
