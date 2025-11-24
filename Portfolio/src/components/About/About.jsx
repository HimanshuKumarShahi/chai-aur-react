import React from "react";


const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 86 },
  { name: "JavaScript", level: 78 },
  { name: "React", level: 74 },
  { name: "Tailwind", level: 77 },
  { name: "C/C++", level: 62 },
  { name: "Python", level: 66 },
  { name: "Node.js", level: 70 },
];

const About = () => {
  return (
    <div className="w-full min-h-screen text-white py-20 px-6 relative overflow-hidden bg-[#0a0702]">

      {/* --- background like Home.jsx --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-orange-500/10 blur-[160px] rounded-full absolute -top-10 -left-20" />
        <div className="w-[500px] h-[500px] bg-orange-600/10 blur-[140px] rounded-full absolute bottom-0 right-0" />
      </div>

      {/* Heading */}
      <h1 className="text-center text-5xl font-bold text-orange-500">About Me</h1>
      <p className="text-center mt-3 text-gray-300 max-w-3xl mx-auto text-lg">
        BCA student and aspiring full-stack developer crafting clean UI, 
        strong backend logic and sharp digital experiences.
      </p>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">

        {/* LEFT: Profile + Stats */}
        <div className="flex flex-col items-center">
          <img
            src="./public/profile.png"
            className="w-72 h-72 object-cover rounded-xl shadow-lg border border-orange-500/30"
          />

          <h2 className="text-2xl font-bold mt-6">Himanshu Kumar</h2>
          <p className="text-gray-400 text-sm">BCA Student • Developer</p>

          <div className="flex gap-16 mt-6">
            <div>
              <p className="text-2xl font-bold text-orange-500">7+</p>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-500">12+</p>
              <p className="text-gray-400 text-sm">Months Coding</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="px-5 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 transition">
              View Projects
            </button>
            <button className="px-5 py-2 rounded-lg border border-orange-500 hover:bg-orange-500/20 transition">
              Contact
            </button>
          </div>
        </div>

        {/* CENTER: Who Am I */}
        <div className="bg-white/5 border border-orange-500/20 rounded-xl p-8 backdrop-blur">
          <h2 className="text-2xl font-bold text-orange-400">Who am I?</h2>

          <p className="mt-4 text-gray-300 leading-relaxed">
            I'm a developer focused on building fast, reliable and modern web
            applications. My journey began with strong fundamentals and grew into
            full-stack development. I value clean code, performance and solving
            meaningful problems.
          </p>

          <div className="mt-6 space-y-3 text-gray-300">
            <p>
              <span className="font-bold text-orange-400">Frontend:</span>{" "}
              React, HTML5, Tailwind, UI/UX basics
            </p>
            <p>
              <span className="font-bold text-orange-400">Backend:</span>{" "}
              Node.js, MongoDB, REST APIs
            </p>
            <p>
              <span className="font-bold text-orange-400">Other:</span>{" "}
              Python, C/C++, DSA, Git
            </p>
          </div>
        </div>

        {/* RIGHT: Skills */}
        <div className="bg-white/5 border border-orange-500/20 rounded-xl p-8 backdrop-blur">
          <h2 className="text-2xl font-bold text-orange-400 mb-6">Skills</h2>

          <div className="grid grid-cols-2 gap-5">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white/5 p-4 rounded-lg border border-orange-500/20">
                <p className="font-semibold text-sm">
                  {skill.name}
                  <span className="text-orange-400 ml-1">{skill.level}%</span>
                </p>

                <div className="w-full bg-white/10 h-2 rounded-md mt-2 overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-md"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
