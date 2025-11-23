import React from 'react';

function Footer() {
  return (
    <footer className="
      bg-black 
      backdrop-blur-xl 
      border-t border-white/10
      text-white 
      py-4
    ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">

        {/* Links row (always in row, even on small screens) */}
        <div className="flex flex-row justify-center items-center gap-6">
          <a 
            href="https://github.com/HimanshuKumarShahi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold transition-all duration-300 hover:text-orange-500 hover:scale-110"
          >
            GitHub
          </a>

          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold transition-all duration-300 hover:text-orange-500 hover:scale-110"
          >
            LinkedIn
          </a>

          <a 
            href="mailto:#" 
            className="font-semibold transition-all duration-300 hover:text-orange-500 hover:scale-110"
          >
            Contact-Us
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-3 text-center">
          © {new Date().getFullYear()} HIMANSHU KUMAR SHAHI. Created with 💖😎
        </p>
      </div>
    </footer>
  );
}

export default Footer;
