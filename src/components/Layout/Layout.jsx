import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import ScrollBar from "../ScrollProgress/ScrollBar";
import MagneticCursor from "../Cursor/MagneticCursor";

export default function Layout() {
  return (
    <>
      <ScrollBar />
      <MagneticCursor />
      <Sidebar />

      {/* Main content — offset by sidebar width on desktop */}
      <main className="min-h-screen lg:ml-[var(--sidebar-width)]">
        <Outlet />
      </main>
    </>
  );
}
