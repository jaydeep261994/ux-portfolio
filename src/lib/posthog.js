import posthog from "posthog-js";

let initialized = false;

export function initPostHog() {
  if (initialized) return posthog;
  const key = import.meta.env.VITE_POSTHOG_KEY;
  const host = import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com";
  if (!key) return null;

  posthog.init(key, {
    api_host: host,
    capture_pageview: false,
    capture_pageleave: true,
    session_recording: {
      maskAllInputs: true,
    },
    persistence: "localStorage+cookie",
  });
  initialized = true;
  return posthog;
}

export { posthog };
