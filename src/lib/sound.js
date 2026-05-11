let projectClickAudio = null;

function getProjectClickAudio() {
  if (typeof window === "undefined") return null;
  if (!projectClickAudio) {
    projectClickAudio = new Audio("/sounds/project-click.mp3");
    projectClickAudio.preload = "auto";
    projectClickAudio.volume = 0.6;
  }
  return projectClickAudio;
}

export function playProjectClick() {
  const audio = getProjectClickAudio();
  if (!audio) return;
  try {
    audio.currentTime = 0;
    const result = audio.play();
    if (result && typeof result.catch === "function") {
      result.catch(() => {});
    }
  } catch {
    // ignore — autoplay or unsupported context
  }
}
