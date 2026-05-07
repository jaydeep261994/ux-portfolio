import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig, AnimatePresence } from "framer-motion";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
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
    </MotionConfig>
  );
}
