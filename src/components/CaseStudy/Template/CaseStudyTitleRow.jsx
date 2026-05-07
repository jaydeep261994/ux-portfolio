export default function CaseStudyTitleRow({ title, logo, logoAlt }) {
  return (
    <div className="flex items-center justify-between gap-6">
      <h1 className="text-[24px] leading-none font-normal text-white font-['Poppins',sans-serif] m-0">
        {title}
      </h1>
      {logo && (
        <img
          src={logo}
          alt={logoAlt || `${title} logo`}
          className="max-h-[25px] max-w-[120px] object-contain shrink-0"
        />
      )}
    </div>
  );
}
