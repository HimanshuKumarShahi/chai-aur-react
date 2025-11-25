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

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-[600px] h-[600px] bg-orange-500/10 blur-[160px] rounded-full absolute -top-10 -left-20" />
        <div className="w-[500px] h-[500px] bg-orange-600/10 blur-[140px] rounded-full absolute bottom-0 right-0" />
      </div>

      {/* Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-bold text-orange-500 relative z-10">
        About Me
      </h1>
      <p className="text-center mt-4 text-gray-300 max-w-3xl mx-auto text-lg relative z-10">
        A BCA student, full-stack dev aspirant and tech explorer — blending clean design
        with solid logic to build purposeful, fast and reliable web experiences.
      </p>

      {/* Layout - Responsive Fix */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">

        {/* LEFT - Profile */}
       {/* LEFT - Profile */}
<div className="flex flex-col items-center bg-white/5 p-6 rounded-2xl border border-white/10 shadow backdrop-blur">

  <img
    src="/profile.png"
    className="w-72 sm:w-80 h-72 sm:h-80 object-cover rounded-2xl shadow-2xl"
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


        {/* CENTER - About Cards */}
        <div className="space-y-10">
          {/* WHO AM I */}
          <div className="bg-black/30 border border-white/10 p-6 rounded-2xl shadow">
            <h5 className="text-lg font-bold text-orange-400 mb-3">Who Am I?</h5>
            <p className="text-gray-300 leading-relaxed text-base">
              I'm a developer who likes to keep things simple but effective.
              I started with basic HTML pages, slowly leveling up into JavaScript,
              backend development, UI/UX structuring and performance-focused design.
              I value discipline, clarity and strong fundamentals — because real skill
              comes from mastering the basics and pushing boundaries with consistency.
            </p>
          </div>

          {/* WHAT I DO */}
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

          {/* GOALS */}
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

        {/* RIGHT - Skills */}
        <div className="bg-white/5 border border-orange-500/20 rounded-xl p-8 backdrop-blur">
          <h2 className="text-2xl font-bold text-orange-400 mb-6">Skills</h2>

          <div className="grid grid-cols-2 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white/5 p-4 rounded-lg border border-orange-500/20"
              >
                <p className="font-semibold text-sm">
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

      {/* EXPERIENCE + EDUCATION */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        <div className="bg-black/30 border border-white/10 p-6 rounded-2xl shadow">
          <h5 className="text-lg font-bold text-orange-400 mb-3">Experience</h5>
          <ul className="space-y-2 text-gray-300">
            <li>
              <span className="font-semibold">Freelance Projects:</span> UI/UX,
              landing pages, small web apps.
            </li>
            <li>
              <span className="font-semibold">Internships:</span> Hands-on dev
              experience.
            </li>
          </ul>
        </div>

        <div className="bg-black/30 border border-white/10 p-6 rounded-2xl shadow">
          <h5 className="text-lg font-bold text-orange-400 mb-3">Education</h5>
          <ul className="space-y-2 text-gray-300">
            <li>
              <span className="font-semibold">BCA —</span> Core computer
              applications & development.
            </li>
            <li>
              <span className="font-semibold">Certifications:</span> HTML/CSS/JS,
              React, Tailwind, DSA.
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default About;
