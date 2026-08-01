import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isCaseStudy = location.pathname.startsWith("/case-study/");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // The redesigned homepage is its own surface — no sidebar, no top bar, no overlay.
  if (isHome) {
    return (
      <main className="page-home">
        <Outlet />
      </main>
    );
  }

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main content — offset by sidebar width on desktop */}
      <div className="content-area min-h-screen relative">
        {/* Dotted pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <TopBar onMenuToggle={() => setIsSidebarOpen((p) => !p)} isMenuOpen={isSidebarOpen} />
        <main className={isCaseStudy ? "" : "content-main"}>
          <Outlet />
        </main>
      </div>
    </>
  );
}
