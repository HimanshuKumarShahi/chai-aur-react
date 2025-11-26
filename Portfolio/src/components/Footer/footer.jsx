import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="
        bg-black 
        backdrop-blur-xl 
        border-t border-white/10
        text-white 
        py-4
      "
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">

        <div
          className="
            flex flex-row 
            justify-center 
            items-center 
            gap-6
            flex-wrap
            w-full
          "
        >

        
          <a
            href="https://github.com/HimanshuKumarShahi"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2 
              font-semibold 
              transition-all duration-300 
              hover:text-orange-500 
              hover:scale-110
              whitespace-nowrap
            "
          >
            <FaGithub size={22} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/himanshu-kumar-s-a434372b7"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2 
              font-semibold 
              transition-all duration-300 
              hover:text-orange-500 
              hover:scale-110
              whitespace-nowrap
            "
          >
            <FaLinkedin size={22} />
            LinkedIn
          </a>

         
          <Link
            to="/contact"
            className="
              flex items-center gap-2 
              font-semibold 
              transition-all duration-300 
              hover:text-orange-500 
              hover:scale-110
              whitespace-nowrap
            "
          >
            <FaEnvelope size={22} />
            Contact
          </Link>

        </div>

       
        <p className="text-sm text-gray-400 mt-3 text-center">
          © {new Date().getFullYear()} HIMANSHU KUMAR SHAHI. Created with 💖😎
        </p>
      </div>
    </footer>
  );
}

export default Footer;
