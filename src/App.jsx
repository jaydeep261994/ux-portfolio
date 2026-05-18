import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import Exploration from "./pages/Exploration";
import { initPostHog, posthog } from "./lib/posthog";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (posthog && posthog.__loaded) {
      posthog.capture("$pageview", {
        $current_url: window.location.origin + location.pathname + location.search,
      });
    }
  }, [location.pathname, location.search]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="exploration" element={<Exploration />} />
          <Route path="case-study/:projectId" element={<CaseStudy />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  useEffect(() => {
    initPostHog();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AnimatedRoutes />
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </MotionConfig>
  );
}
