import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { to: "/", label: "home.jsx", icon: <FaHome /> },
    { to: "/about", label: "about.jsx", icon: <FaUserAlt /> },
    { to: "/projects", label: "projects.jsx", icon: <FaFolderOpen /> },
    { to: "/contact", label: "contact.jsx", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* TOP BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e1e] border-b border-[#333] font-mono">
        <div className="max-w-7xl mx-auto px-4 h-11 flex items-center justify-between gap-3">
          
          {/* TITLE (VISIBLE ON ALL SCREENS) */}
          <Link
            to="/"
            className="
              flex items-center gap-2
              text-[#cccccc] text-sm
              max-w-[70%]
              truncate
            "
          >
            <span className="text-[#007acc] font-bold"></span>
            <span className="truncate">
              himanshu_portfolio
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1 text-xs">
            {navItems.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`
                    flex items-center gap-2 px-3 py-1.5
                    border-b-2
                    ${
                      active
                        ? "border-[#007acc] text-white bg-[#252526]"
                        : "border-transparent text-[#858585] hover:text-white"
                    }
                  `}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* MOBILE COMMAND BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#cccccc] text-lg"
            aria-label="Open Command Palette"
          >
            ⌘
          </button>
        </div>
      </nav>

      {/* MOBILE COMMAND PALETTE */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
          <div className="max-w-md mx-auto mt-24 bg-[#252526] border border-[#333] rounded-lg shadow-xl font-mono">
            <div className="px-4 py-2 text-xs text-[#858585] border-b border-[#333]">
              &gt; Go to file
            </div>

            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-[#d4d4d4] hover:bg-[#373737]"
                >
                  <span className="text-[#007acc]">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-full text-xs text-[#858585] py-2 border-t border-[#333] hover:bg-[#1e1e1e]"
            >
              Esc
            </button>
          </div>
        </div>
      )}

      {/* SPACER */}
      <div className="h-11" />
    </>
  );
}
