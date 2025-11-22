import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="
      fixed top-0 w-full z-50 
      bg-black/30 backdrop-blur-xl 
      shadow-xl 
      border-b border-white/10
    ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          to="/" 
          onClick={closeMenu}
          className="text-2xl font-bold text-orange-400 drop-shadow-sm"
        >
          Himanshu Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link
            to="/"
            className="font-semibold text-white transition-all duration-200 ease-in-out hover:text-orange-500 transform hover:scale-125"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-semibold text-white transition-all duration-200 ease-in-out hover:text-orange-500 transform hover:scale-125"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="font-semibold text-white transition-all duration-200 ease-in-out hover:text-orange-500 transform hover:scale-125"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="font-semibold text-white transition-all duration-200 ease-in-out hover:text-orange-500 transform hover:scale-125"
          >
            Contact-Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="
          md:hidden 
          bg-black/40 backdrop-blur-xl 
          shadow-lg border-t border-white/10 
          flex flex-col 
          items-center 
          gap-4 
          px-6 py-6 
          rounded-b-xl 
          animate-slideDown
        ">
          <Link onClick={closeMenu} to="/" className="text-white text-lg font-medium hover:text-orange-400">
            Home
          </Link>
          <Link onClick={closeMenu} to="/about" className="text-white text-lg font-medium hover:text-orange-400">
            About
          </Link>
          <Link onClick={closeMenu} to="/projects" className="text-white text-lg font-medium hover:text-orange-400">
            Projects
          </Link>
          <Link onClick={closeMenu} to="/contact" className="text-white text-lg font-medium hover:text-orange-400">
            Contact-Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
