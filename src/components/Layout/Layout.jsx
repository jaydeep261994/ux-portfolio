import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";


export default function Layout() {
  return (
    <>
      <Sidebar />

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
        <TopBar />
        <main className="content-main">
          <Outlet />
        </main>
      </div>
    </>
  );
}
