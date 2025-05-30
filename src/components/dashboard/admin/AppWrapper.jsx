"use client";
import Sidebar from "../../../components/dashboard/admin/Sidebar";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "../../dashboard/admin/Navbar";



export default function AppWrapper({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Close sidebar when resizing to desktop
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    // Set the initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  if (!pathname) {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }


  const noWrapperPaths = ["/dashboard/admin", "/auth", ""];


  if (noWrapperPaths.includes(pathname)) {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed md:relative z-40 w-64 h-full bg-gray-200 transition-all duration-300 ease-in-out ${
            isMobile
              ? sidebarOpen
                ? "left-0"
                : "-left-64"
              : "left-0"
          }`}
        >
          <Sidebar isMobile={isMobile} onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Overlay for mobile sidebar */}
        {isMobile && sidebarOpen && (
          <div
            className="fixed inset-0 pt-10 bg-black bg-opacity-50 z-0"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="flex-1 flex flex-col">
          <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <main className="p-8 ">{children}</main>
        </div>
      </div>
    </div>
  );
}