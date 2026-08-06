import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

/**
 * Light unless the visitor has chosen otherwise. The OS preference is not
 * consulted: the site is designed light first, and a first-time visitor on a
 * dark-mode machine should see it that way. Mirrors the inline script in
 * index.html, which has to reach the same answer before first paint.
 */
function resolveInitial() {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
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

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return { theme, toggle, isDark: theme === "dark" };
}
