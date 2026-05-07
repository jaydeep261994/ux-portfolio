export default function CaseStudyHero({ bg = "#EDEDED", height = 507, image, alt = "", children }) {
  return (
    <div
      className="w-full flex items-end justify-center overflow-hidden"
      style={{ backgroundColor: bg, height }}
    >
      {image ? (
        <img
          src={image}
          alt={alt}
          className="max-h-full w-auto object-contain"
        />
      ) : (
        children
      )}
    </div>
  );
}
