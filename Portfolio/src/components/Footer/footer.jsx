import React from 'react';

function Footer() {
  return (
    <footer className="
      bg-black/40 
      backdrop-blur-xl 
      border-t border-white/10 
      text-white 
      py-8 
      mt-16
    ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Links */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
          <a 
            href="https://github.com/HimanshuKumarShahi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold text-white transition-all duration-200 ease-in-out hover:text-orange-500 transform hover:scale-125"
          >
            GitHub
          </a>

          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold text-white transition-all duration-200 ease-in-out hover:text-orange-500 transform hover:scale-125"
          >
            LinkedIn
          </a>

          <a 
            href="mailto:#" 
            className="font-semibold text-white transition-all duration-200 ease-in-out hover:text-orange-500 transform hover:scale-125"
          >
            Contact-Us
          </a>
        </div>

        <p className="text-sm text-black mt-2">
          © {new Date().getFullYear()} HIMANSHU KUMAR SHAHI. Created with 💖😎
        </p>
      </div>
    </footer>
  );
}

export default Footer;
