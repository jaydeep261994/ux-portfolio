import { useEffect, useRef } from "react";

export default function CaseStudyHero({
  bg = "#EDEDED",
  height = 507,
  image,
  video,
  poster,
  alt = "",
  fit = "cover",
  children,
}) {
  const videoRef = useRef(null);
  const isCover = fit === "cover";
  const mediaClass = isCover
    ? "w-full h-full object-cover"
    : "max-h-full w-auto object-contain";

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    const result = el.play();
    if (result && typeof result.catch === "function") {
      result.catch(() => {});
    }
  }, [video]);

  return (
    <div
      className="w-full flex items-stretch justify-center overflow-hidden hero-frame"
      style={{ backgroundColor: bg, "--hero-h": `${height}px` }}
    >
      {video ? (
        <video
          ref={videoRef}
          src={video}
          poster={poster || image}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={mediaClass}
        />
      ) : image ? (
        <img src={image} alt={alt} className={mediaClass} />
      ) : (
        children
      )}
    </div>
  );
}
