import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaFolderOpen, FaEnvelope } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="
        fixed top-0 w-full z-50 
        bg-black/30 backdrop-blur-xl 
        shadow-xl 
        border-b border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold text-orange-400 drop-shadow-sm"
        >
          Himanshu Portfolio
        </Link>

  
        <div className="hidden md:flex gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-white 
              transition-all duration-300 transform
              hover:text-orange-500 hover:scale-125"
          >
            <FaHome />
            Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 font-semibold text-white 
              transition-all duration-300 transform
              hover:text-orange-500 hover:scale-125"
          >
            <FaUserAlt />
            About
          </Link>
          <Link
            to="/projects"
            className="flex items-center gap-2 font-semibold text-white 
              transition-all duration-300 transform
              hover:text-orange-500 hover:scale-125"
          >
            <FaFolderOpen />
            Projects
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 font-semibold text-white 
              transition-all duration-300 transform
              hover:text-orange-500 hover:scale-125"
          >
            <FaEnvelope />
            Contact-Us
          </Link>
        </div>


        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="focus:outline-none text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden">
         
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={closeMenu}
          />

          
          <div
            ref={menuRef}
            className="
              absolute top-full left-0 w-full
              bg-black/90 backdrop-blur-xl 
              shadow-lg border-t border-white/10 
              flex flex-col 
              items-center 
              gap-4 
              px-6 py-6 
              rounded-b-xl 
              animate-slideDown
              z-50
            "
          >
            <Link
              onClick={closeMenu}
              to="/"
              className="flex items-center gap-2 text-white text-lg font-medium
                transition-all duration-300 transform 
                hover:text-orange-400 hover:scale-110"
            >
              <FaHome />
              Home
            </Link>
            <Link
              onClick={closeMenu}
              to="/about"
              className="flex items-center gap-2 text-white text-lg font-medium
                transition-all duration-300 transform 
                hover:text-orange-400 hover:scale-110"
            >
              <FaUserAlt />
              About
            </Link>
            <Link
              onClick={closeMenu}
              to="/projects"
              className="flex items-center gap-2 text-white text-lg font-medium
                transition-all duration-300 transform 
                hover:text-orange-400 hover:scale-110"
            >
              <FaFolderOpen />
              Projects
            </Link>
            <Link
              onClick={closeMenu}
              to="/contact"
              className="flex items-center gap-2 text-white text-lg font-medium
                transition-all duration-300 transform 
                hover:text-orange-400 hover:scale-110"
            >
              <FaEnvelope />
              Contact-Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
