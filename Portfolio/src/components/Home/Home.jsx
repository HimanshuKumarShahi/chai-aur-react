import React, { useState } from "react";
import { Link } from "react-router-dom";

function SkillSection() {
  const [showAll, setShowAll] = useState(false);
  const skills = [
    { name: "FullStack", level: 76 },
    { name: "JavaScript", level: 75 },
    { name: "Python", level: 70 },
    { name: "MongoDB", level: 50 },
    { name: "Git & GitHub", level: 79 },
    { name: "Backend", level: 40 },
    { name: "Tailwind Css", level: 69 },
    { name: "Node.js", level: 65 },
    { name: "Java", level: 60 },
    { name: "SQL", level: 60 },
    { name: "HTML", level: 58 },
    { name: "CSS", level: 49 },
    { name: "C++", level: 55 },
    { name: "C", level: 57 },
  ];
  const visible = showAll ? skills : skills.slice(0, 3);

  return (
    <section className="py-12 px-5 bg-black">
      <h2 className="text-orange-500 mb-8 text-3xl font-bold text-center">
        My Skills
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {visible.map((skill) => (
          <div
            key={skill.name}
            className="p-6 rounded-xl bg-black/70 border border-orange-400/25 shadow-lg flex flex-col justify-between transition hover:scale-105"
          >
            <div className="font-bold text-lg text-white mb-4">{skill.name}</div>
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-linear-to-r from-orange-400 to-yellow-500 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <div className="text-orange-400 text-base font-bold text-right">
              {skill.level}%
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAll((old) => !old)}
          className="px-5 py-2 bg-orange-500 text-black font-bold rounded-full border border-orange-400 shadow hover:bg-black hover:text-orange-400 transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden pt-32 pb-0 px-4">

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,rgba(252,211,77,0.10),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-64 h-48 rounded-full bg-yellow-500/10 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-56 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-2 h-48 bg-yellow-300/10 rounded-xl rotate-45 blur-lg"></div>
      </div>
    
      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-orange-400/20 rounded-lg rotate-12 animate-pulse-slow z-10"></div>
      <div className="absolute bottom-28 -right-8 w-20 h-20 border-2 border-cyan-200/20 rounded-2xl -rotate-12 animate-pulse-slow z-10"></div>
      <div className="absolute top-1/2 left-4 w-16 h-16 border border-white/10 rounded-xl rotate-6 z-10"></div>
      <div className="absolute top-1/2 left-50 w-20 h-20 border border-white/10 rounded-xl rotate-8 z-10"></div>
      <div className="absolute top-[35%] right-8 w-32 h-6 border border-pink-400/10 rounded-xl -rotate-6"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-10 border border-fuchsia-300/15 rounded-md rotate-3 pointer-events-none"></div>
      <div className="absolute top-10 right-5 w-8 h-32 border border-blue-400/15 rounded-lg rotate-12"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 border border-white/5 rounded-xl -rotate-12"></div>

      
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pb-0 md:pb-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-400 tracking-widest text-xl mb-5">
            Welcome to my universe
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-3 leading-tight">
            I’m <span className="text-orange-500">Himanshu</span>,
            <br />
            <span className="text-gray-300">BCA Student &amp; Tech Explorer</span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-md mx-auto md:mx-0">
            A learner walking boldly into the tech future — step by step, line by line.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
            <Link
              to="/projects"
              className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-full shadow-lg border-2 border-orange-500 transition-all duration-200 hover:bg-black hover:text-yellow-400 hover:border-yellow-400 hover:scale-110 cursor-pointer focus:outline-none flex items-center justify-center"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-black text-yellow-400 font-semibold rounded-full border-2 border-yellow-400 transition-all duration-200 hover:bg-orange-500 hover:text-black hover:border-orange-500 hover:scale-110 cursor-pointer focus:outline-none flex items-center justify-center"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center px-4 md:px-0">
          <div className="relative">
            <div className="absolute inset-0 border border-yellow-500/20 rounded-2xl -rotate-22"></div>
            <div className="absolute -top-4 -left-6 w-20 h-20 bg-yellow-400/20 blur-2xl rounded-full z-0 animate-pulse-slow"></div>
            <div className="relative w-72 h-80">
              <img
                src="/profile.png"
                alt="profile"
                className="w-72 h-80 object-cover rounded-xl shadow-2xl relative z-10 pointer-events-none select-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                style={{
                  userSelect: "none",
                  WebkitUserDrag: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                }}
              />
              <div
                className="absolute inset-0 z-20"
                style={{
                  background: "transparent",
                  pointerEvents: "auto",
                }}
                onMouseDown={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      </div>

      
      <section className="w-full bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Why Choose Me?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            I'm a BCA student with a strong passion for development and discipline. I mix logic with creativity and build digital experiences that are fast, sharp, and meaningful. I focus on writing clean code, designing smooth UI, and solving real-world problems.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-black/40 border border-orange-500 rounded-xl p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Discipline & Consistency</h3>
              <p className="text-gray-300">
                I approach projects like training — steady, focused, and goal-oriented.
              </p>
            </div>
            <div className="bg-black/40 border border-orange-500 rounded-xl p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Creative + Logical</h3>
              <p className="text-gray-300">
                I blend design sense with solid programming logic for balanced work.
              </p>
            </div>
            <div className="bg-black/40 border border-orange-500 rounded-xl p-6 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Continuous Learner</h3>
              <p className="text-gray-300">
                Tech changes fast — I move faster. Always upgrading skills and mindset.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SkillSection />
    </div>
  );
}

export default Home;
