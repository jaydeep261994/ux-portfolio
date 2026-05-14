export default function CaseStudyTitleRow({ title, logo, logoAlt, logoClass }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
      <h1 className="text-[20px] sm:text-[22px] lg:text-[24px] leading-tight font-normal text-white font-['Poppins',sans-serif] m-0 break-words">
        {title}
      </h1>
      {logo && (
        <img
          src={logo}
          alt={logoAlt || `${title} logo`}
          className={`${logoClass || "max-h-[36px] sm:max-h-[48px] lg:max-h-[60px] max-w-[160px] sm:max-w-[220px] lg:max-w-[260px]"} object-contain shrink-0 self-start sm:self-auto`}
        />
      )}
    </div>
  );
}
