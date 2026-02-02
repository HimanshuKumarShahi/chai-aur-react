import React from "react";
import { Link } from "react-router-dom";


const skills = [
  { name: "FullStack", level: 76 },
  { name: "JavaScript", level: 75 },
  { name: "Python", level: 70 },
  { name: "MongoDB", level: 50 },
  { name: "Git & GitHub", level: 79 },
  { name: "Backend", level: 40 },
  { name: "Tailwind Css", level: 69 },
  { name: "Node.js", level: 69 },
  { name: "Java", level: 60 },
  { name: "SQL", level: 60 },
  { name: "HTML", level: 58 },
  { name: "CSS", level: 49 },
  { name: "C++", level: 55 },
  { name: "C", level: 57 },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] font-mono px-2 sm:px-4 lg:px-6 py-4 flex items-center justify-center">
      <div className="w-full max-w-7xl 2xl:max-w-[90vw] bg-[#1e1e1e] border border-[#333] rounded-lg shadow-2xl flex flex-col min-h-[90vh] overflow-hidden">

        {/* TITLE BAR */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#323233] text-xs text-[#cccccc]">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="hidden md:block">about_me.js — Visual Studio Code</span>
          </div>
          <div className="hidden sm:block text-[11px] bg-[#3c3c3c] px-6 py-0.5 rounded border border-[#454545]">
            Ctrl + P
          </div>
          <div className="flex gap-3">— ❐ ✕</div>
        </div>

        {/* BODY */}
        <div className="flex flex-1 overflow-hidden">

          {/* SIDEBAR */}
          <div className="hidden sm:flex w-12 bg-[#333] flex-col items-center py-4 gap-6 text-[#858585]">
            <span className="text-white border-l-2 border-white w-full text-center">📄</span>
            <span>🔍</span>
            <span></span>
            <span></span>
            <span className="mt-auto">⚙️</span>
          </div>

          {/* TERMINAL / CONTENT */}
          <div className="flex-1 flex flex-col">
            {/* TABS */}
            <div className="flex bg-[#252526] text-[11px] text-[#858585] uppercase">
              <div className="px-4 py-2 bg-[#1e1e1e] border-b border-[#007acc] text-white font-bold">About Me</div>
              <div className="px-4 py-2">Skills</div>
              <div className="px-4 py-2">Experience</div>
              <div className="px-4 py-2">Education</div>
            </div>

            {/* TERMINAL CONTENT */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-14 py-6 lg:py-10 space-y-8">
              
              {/* Intro */}
              <div className="space-y-2">
                <div>
                  <span className="text-[#6a9955]">himanshu@portfolio</span>
                  <span className="text-[#4fc1ff]">:~/about</span>
                  <span className="text-white"> $</span>{" "}
                  <span className="text-[#ce9178]">cat about_me.js</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  BCA student, full-stack dev aspirant, and tech explorer — building fast, reliable web experiences inspired by logic and creativity.
                </p>
              </div>

              <hr className="border-[#333]" />

              {/* Skills */}
              <div className="space-y-2">
                <div className="text-xs uppercase text-[#858585]">System Capabilities</div>
                {skills.map((s) => (
                  <div key={s.name} className="text-xs">
                    <div className="flex justify-between mb-1 text-[#d4d4d4]">
                      <span>{s.name}</span>
                      <span className="text-[#6a9955]">{s.level}%</span>
                    </div>
                    <div className="h-1 bg-[#1e1e1e] rounded">
                      <div className="h-full bg-[#007acc]" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Experience */}
              <div>
                <div className="text-xs uppercase text-[#858585] mb-2">Experience</div>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Portfolio page, Games (Bubble, Tic-Tac-Toe), landing pages, small web apps, Calculator, Random-password Generator</li>
                  <li>Internships: -- Not Available --</li>
                </ul>
              </div>

              {/* Education */}
              <div>
                <div className="text-xs uppercase text-[#858585] mb-2">Education</div>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>BCA — Core computer applications & development</li>
                  <li>Class 12 (CBSE) — First Division</li>
                  <li>Class 10 (CBSE) — First Division</li>
                  <li>Certifications: -- Under Progress --</li>
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-4">
                <Link
                  to="/projects"
                  className="bg-[#007acc] px-6 py-2 text-sm font-bold text-white hover:bg-[#005fb8]"
                >
                  GET ./projects
                </Link>
                <Link
                  to="/contact"
                  className="border border-[#454545] px-6 py-2 text-sm text-[#ccc] hover:bg-[#333]"
                >
                  PING ./contact
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* STATUS BAR */}
        <div className="h-6 bg-[#007acc] flex items-center justify-between px-3 text-[11px] text-white">
          <div className="flex gap-3">
            <span> master*</span>
            <span>ⓧ 0 ⚠ 0</span>
          </div>
          <div className="flex gap-3">
            <span className="hidden sm:inline">UTF-8</span>
            <span>Time: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
