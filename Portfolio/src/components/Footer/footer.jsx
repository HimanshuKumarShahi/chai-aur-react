import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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

        {/* Links row with icons */}
        <div className="flex flex-row justify-center items-center gap-8">
          <a 
            href="https://github.com/HimanshuKumarShahi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 font-semibold transition-all duration-300 hover:text-orange-500 hover:scale-110"
          >
            <FaGithub size={22} />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/your-link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 font-semibold transition-all duration-300 hover:text-orange-500 hover:scale-110"
          >
            <FaLinkedin size={22} />
            LinkedIn
          </a>
          <a 
            href="mailto:your@email.com"
            className="flex items-center gap-2 font-semibold transition-all duration-300 hover:text-orange-500 hover:scale-110"
          >
            <FaEnvelope size={22} />
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
