/**
 * Every client logo in this repo ships white-on-transparent, drawn for the old dark
 * site. On the light sheet they disappear, so each has an `-ink` variant alongside it
 * and CSS shows whichever suits the active theme.
 */
const inkVariant = (src) => src.replace(/(\.\w+)$/, "-ink$1");

export default function CaseStudyTitleRow({ title, logo, logoAlt, logoClass, titleId }) {
  // Figma 3651-76519 sets the title-row logo at 40px tall; it was rendering at 60.
  const sizing =
    logoClass ||
    "max-h-[26px] sm:max-h-[32px] lg:max-h-[40px] max-w-[160px] sm:max-w-[220px] lg:max-w-[260px]";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
      <h1
        id={titleId}
        className="text-[20px] sm:text-[22px] lg:text-[24px] leading-tight font-normal cs-title m-0 break-words"
      >
        {title}
      </h1>
      {/* Rendered as siblings, not wrapped: an img with only max-width/max-height
          collapses to 0 inside a shrink-to-fit box. */}
      {logo && (
        <>
          <img
            src={logo}
            alt={logoAlt || `${title} logo`}
            className={`${sizing} object-contain shrink-0 self-start sm:self-auto cs-logo__on-dark`}
          />
          <img
            src={inkVariant(logo)}
            alt=""
            aria-hidden="true"
            className={`${sizing} object-contain shrink-0 self-start sm:self-auto cs-logo__on-light`}
          />
        </>
      )}
    </div>
  );
}
