import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";
import ScrollBar from "../ScrollProgress/ScrollBar";
import MagneticCursor from "../Cursor/MagneticCursor";

export default function Layout() {
  return (
    <>
      <ScrollBar />
      <MagneticCursor />
      <Sidebar />

      {/* Main content — offset by sidebar width on desktop */}
      <div className="min-h-screen lg:ml-[var(--sidebar-width)]">
        <TopBar />
        <main className="max-w-[1095px] mx-auto py-12 px-4 md:px-8 lg:px-[55px]">
          <Outlet />
        </main>
      </div>
    </>
  );
}
