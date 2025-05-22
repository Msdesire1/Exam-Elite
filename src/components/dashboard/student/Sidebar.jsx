
"use client"
import React, { useState } from "react";
import Link from "next/link";
import {
  Book,
  User,
  FileText,
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
  UserCog,
} from "lucide-react";

const Sidebar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    console.log("Logging out...");
    // You can redirect or clear localStorage here
  };

  const NavItem = ({ to, icon: Icon, label }) => (
    <Link
      href={to}
      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100  hover:text-gray-900"
      onClick={() => window.innerWidth < 1024 && setSidebarOpen(false)}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );

  return (
    <div className="flex min-h-screen bg-white fixed">
      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-[56%] z-40 lg:hidden">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle Menu"
          className="p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-30 flex transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={toggleSidebar}
          />
        )}

        <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full z-10">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <span className="font-bold text-lg">Exam Elite</span>
            </div>
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-600 hover:text-gray-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-auto py-4 px-3">
            <div className="flex flex-col gap-1">
              <NavItem to="/dashboard/student/dashboard" icon={FileText} label="Dashboard" />
              <NavItem to="/dashboard/student/studentclass" icon={Book} label="Classes" />
              <NavItem to="/dashboard/student/studentexam" icon={FileText} label="Examinations" />
              <NavItem to="/dashboard/student/studentresult" icon={UserCog} label="Students result" />
              <NavItem to="/dashboard/student/studentprofile" icon={User} label="My Profile" />
              {/* <NavItem to="/dashboard/admin/dashboard/setting" icon={Settings} label="Settings" /> */}
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <Link href={"/"}
              onClick={handleLogout}
              className="w-full flex items-center justify-start gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100"
            >
              <LogOut className="h-4 w-4" />
              Log out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
