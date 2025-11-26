/* CLEANED + FIXED VERSION — NO DESIGN CHANGES */

import React from "react";
import { Link } from "react-router-dom";

const skills = [
  { name: "FullStack", level: 76 },
  { name: "JavaScript", level: 75 },
  { name: "Python", level: 70 },
  { name: "MongoDB", level: 50 },
  { name: "Backend", level: 40 },
  { name: "Tailwind Css", level: 69 },
  { name: "Node.js", level: 69 },
  { name: "Java", level: 60 },
  { name: "SQL", level: 60 },
  { name: "HTML", level: 58 },
  { name: "CSS", level: 49 },
  { name: "C++", level: 55 },
  { name: "C", level: 57 }
];

const About = () => {
  return (
    <div className="w-full min-h-screen text-white py-20 px-6 relative overflow-hidden bg-[#0a0702]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,rgba(252,211,77,0.10),transparent_70%)]"></div>

        <div className="absolute top-0 left-0 w-64 h-48 rounded-full bg-yellow-500/10 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-56 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-2 h-48 bg-yellow-300/10 rounded-xl rotate-45 blur-lg"></div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-orange-400/20 rounded-lg rotate-12 animate-pulse-slow z-10"></div>

      <div className="absolute top-[90px] left-40 w-24 h-24 border-2 border-orange-600/20 rounded-lg rotate-12 animate-pulse-slow z-10"></div>

      <div className="absolute bottom-28 right-10 w-20 h-20 border-2 border-cyan-400/20 rounded-2xl -rotate-12 animate-pulse-slow z-10"></div>

      <div className="absolute top-1/2 left-4 w-16 h-16 border border-white/10 rounded-xl rotate-6 z-10"></div>
      <div className="absolute top-1/2 left-[50px] w-20 h-20 border border-white/10 rounded-xl rotate-8 z-10"></div>

      <div className="absolute top-[35%] right-8 w-32 h-6 border border-pink-400/10 rounded-xl -rotate-6"></div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-10 border-2 border-fuchsia-300/15 rounded-md rotate-3"></div>

      <div className="absolute top-10 right-5 w-8 h-32 border border-blue-400/15 rounded-lg rotate-12"></div>

      <div className="absolute top-1/3 left-1/3 w-64 h-64 border border-white/5 rounded-xl -rotate-12"></div>

      {/* Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-bold text-orange-500 relative z-10">
        About Me
      </h1>
      <p className="text-center mt-4 text-gray-300 max-w-3xl mx-auto text-lg relative z-10">
        A BCA student, full-stack dev aspirant and tech explorer — blending clean design
        with solid logic to build purposeful, fast and reliable web experiences.
      </p>

      {/* Main Layout */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">

        {/* Profile */}
        <div className="flex flex-col items-center bg-white/5 p-6 rounded-2xl border border-white/10 shadow backdrop-blur">
          <img
            src="/profile.png"
            alt="profile"
            className="w-72 sm:w-80 h-72 sm:h-80 object-cover rounded-2xl shadow-2xl"
             draggable={false}
                onContextMenu={e => e.preventDefault()}
                style={{
                  userSelect: "none",
                  WebkitUserDrag: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none"
                }}
          />

          <h2 className="text-2xl font-bold mt-6">Himanshu Kumar</h2>
          <p className="text-gray-400 text-sm">BCA Student • Developer</p>

          <div className="flex gap-10 mt-6">
            <div>
              <p className="text-3xl font-bold text-orange-500">7+</p>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">12+</p>
              <p className="text-gray-400 text-sm">Months Coding</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 justify-center">
            <Link
              to="/projects"
              className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-full shadow-lg border-2 border-orange-500 hover:bg-black hover:text-yellow-400 hover:border-yellow-400 hover:scale-110 transition-all"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 bg-black text-yellow-400 font-semibold rounded-full shadow-lg border-2 border-yellow-400 hover:bg-orange-500 hover:text-black hover:border-orange-500 hover:scale-110 transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Middle About Cards */}
        <div className="space-y-10">
          <div className="bg-black/30 border border-white/10 p-6 rounded-2xl shadow">
            <h5 className="text-lg font-bold text-orange-400 mb-3">Who Am I?</h5>
            <p className="text-gray-300 leading-relaxed text-base">
              I'm a developer who likes to keep things simple but effective…
            </p>
          </div>

          <div className="bg-black/30 border border-white/10 p-6 rounded-2xl shadow">
            <h5 className="text-lg font-bold text-orange-400 mb-3">What I Do</h5>
            <ul className="space-y-2 text-gray-300">
              <li>• Build responsive UI with React + Tailwind</li>
              <li>• Write clean, reusable & scalable components</li>
              <li>• Develop backend logic using Node.js</li>
              <li>• Integrate REST APIs and manage databases</li>
              <li>• Improve speed, SEO & performance optimization</li>
            </ul>
          </div>

          <div className="bg-black/30 border border-white/10 p-6 rounded-2xl shadow">
            <h5 className="text-lg font-bold text-orange-400 mb-3">Current Goals</h5>
            <ul className="space-y-2 text-gray-300">
              <li>• Master full-stack MERN Development</li>
              <li>• Build production-ready apps</li>
              <li>• Enhance backend architecture patterns</li>
              <li>• Learn advanced React optimization techniques</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white/5 border border-orange-500/20 rounded-xl p-8 backdrop-blur">
          <h2 className="text-2xl font-bold text-orange-400 mb-6">Skills</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white/5 p-4 rounded-lg border border-orange-500/20"
              >
                <p className="font-semibold text-xs sm:text-sm break">
                  {skill.name}
                  <span className="text-orange-400 ml-1">{skill.level}%</span>
                </p>

                <div className="w-full bg-white/10 h-2 rounded-md mt-2 overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-md"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience + Education */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        <div className="bg-black/30 border border-white/10 p-6 rounded-2xl shadow">
          <h5 className="text-lg font-bold text-orange-400 mb-3">Experience</h5>
          <ul className="space-y-2 text-gray-300">
            <li><strong>Freelance Projects:</strong> UI/UX, landing pages, small web apps.</li>
            <li><strong>Internships:</strong> Hands-on dev experience.</li>
          </ul>
        </div>

        <div className="bg-black/30 border border-white/10 p-6 rounded-2xl shadow">
          <h5 className="text-lg font-bold text-orange-400 mb-3">Education</h5>
          <ul className="space-y-2 text-gray-300">
            <li><strong>BCA —</strong> Core computer applications & development.</li>
            <li><strong>Certifications:</strong> HTML/CSS/JS, React, Tailwind, DSA.</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default About;
