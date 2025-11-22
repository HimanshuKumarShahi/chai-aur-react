import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-500">
          MyPortfolio
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-orange-400 transition">Home</Link>
          <Link to="/about" className="hover:text-orange-400 transition">About</Link>
          <Link to="/projects" className="hover:text-orange-400 transition">Projects</Link>
          <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 mt-2 rounded-b-lg shadow p-4 flex flex-col gap-3">
          <Link to="/" className="hover:text-orange-400 transition py-1">Home</Link>
          <Link to="/about" className="hover:text-orange-400 transition py-1">About</Link>
          <Link to="/projects" className="hover:text-orange-400 transition py-1">Projects</Link>
          <Link to="/contact" className="hover:text-orange-400 transition py-1">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
