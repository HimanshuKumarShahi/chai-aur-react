import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] border-t border-[#333] font-mono">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between text-xs text-[#cccccc]">

        {/* LEFT — STATUS */}
        <div className="flex items-center gap-4">
          <span className="text-[#6a9955]"> main</span>
          <span className="hidden sm:inline text-[#858585]">
            Portfolio Workspace
          </span>
        </div>

        {/* CENTER — LINKS */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/HimanshuKumarShahi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white"
          >
            <FaGithub />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/himanshu-kumar-s-a434372b7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white"
          >
            <FaLinkedin />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <Link
            to="/contact"
            className="flex items-center gap-1 hover:text-white"
          >
            <FaEnvelope />
            <span className="hidden sm:inline">Contact</span>
          </Link>
        </div>

        {/* RIGHT — META */}
        <div className="flex items-center gap-3 text-[#858585]">
          <span className="hidden sm:inline">UTF-8</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
