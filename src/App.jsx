import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import CaseStudySheet from "./components/CaseStudy/CaseStudySheet";
import Exploration from "./pages/Exploration";
import ChatWidget from "./components/chat/ChatWidget";

const CASE_STUDY_PATH = /^\/case-study\/([\w-]+)\/?$/;

function AnimatedRoutes() {
  const location = useLocation();
  const projectId = location.pathname.match(CASE_STUDY_PATH)?.[1];

  // While a case study is open the router keeps matching "/", so the homepage stays
  // mounted behind the sheet — no remount, no lost scroll position. A direct link
  // works the same way: the homepage renders as the backdrop.
  const routedLocation = projectId ? { ...location, pathname: "/" } : location;

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={routedLocation} key={routedLocation.pathname}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="exploration" element={<Exploration />} />
          </Route>
        </Routes>
      </AnimatePresence>

      <AnimatePresence>
        {projectId && <CaseStudySheet key={projectId} projectId={projectId} />}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <a className="skip-link" href="#main-content">
          Skip to Content
        </a>
        <AnimatedRoutes />
        <ChatWidget />
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </MotionConfig>
  );
}
