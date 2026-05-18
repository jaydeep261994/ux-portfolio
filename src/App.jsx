import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import Exploration from "./pages/Exploration";

function AnimatedRoutes() {
  const location = useLocation();

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
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
      <Analytics />
    </MotionConfig>
  );
}
