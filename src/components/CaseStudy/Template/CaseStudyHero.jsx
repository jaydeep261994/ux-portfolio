import { useEffect, useRef } from "react";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

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
  const prefersReduced = useReducedMotion();
  const isCover = fit === "cover";
  const mediaClass = isCover
    ? "w-full h-full object-cover"
    : "max-h-full w-auto object-contain";

  // A looping hero is motion the visitor didn't ask for; when they've asked for less,
  // it holds on the poster frame instead.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (prefersReduced) {
      el.pause();
      return;
    }
    el.muted = true;
    el.defaultMuted = true;
    const result = el.play();
    if (result && typeof result.catch === "function") {
      result.catch(() => {});
    }
  }, [video, prefersReduced]);

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
          autoPlay={!prefersReduced}
          loop
          muted
          playsInline
          preload="auto"
          className={mediaClass}
        />
      ) : image ? (
        <img src={image} alt={alt} fetchPriority="high" className={mediaClass} />
      ) : (
        children
      )}
    </div>
  );
}
