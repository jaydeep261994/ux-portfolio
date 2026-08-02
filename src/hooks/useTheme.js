import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

/** Stored choice wins over the OS preference. Mirrors the inline script in index.html. */
function resolveInitial() {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function useTheme() {
  const [theme, setTheme] = useState(resolveInitial);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    // Browser chrome (address bar, PWA shell) matches the page surface.
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0f0f0f" : "#f4f4f4");
  }, [theme]);

  // Follow the OS only while the user has made no explicit choice.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) setTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return { theme, toggle, isDark: theme === "dark" };
}
