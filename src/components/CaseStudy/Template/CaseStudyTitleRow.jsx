/**
 * Every client logo in this repo ships white-on-transparent, drawn for the old dark
 * site. On the light sheet they disappear, so each has an `-ink` variant alongside it
 * and CSS shows whichever suits the active theme.
 */
const inkVariant = (src) => src.replace(/(\.\w+)$/, "-ink$1");

export default function CaseStudyTitleRow({ title, logo, logoAlt, logoClass, titleId }) {
  const sizing =
    logoClass ||
    "max-h-[36px] sm:max-h-[48px] lg:max-h-[60px] max-w-[160px] sm:max-w-[220px] lg:max-w-[260px]";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
      <h1
        id={titleId}
        className="text-[20px] sm:text-[22px] lg:text-[24px] leading-tight font-normal cs-title m-0 break-words"
      >
        {title}
      </h1>
      {logo && (
        <span className="cs-logo shrink-0 self-start sm:self-auto">
          <img
            src={logo}
            alt={logoAlt || `${title} logo`}
            className={`${sizing} object-contain cs-logo__on-dark`}
          />
          <img
            src={inkVariant(logo)}
            alt=""
            aria-hidden="true"
            className={`${sizing} object-contain cs-logo__on-light`}
          />
        </span>
      )}
    </div>
  );
}
