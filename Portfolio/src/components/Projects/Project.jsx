import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    img: "/project_1.png",
    desc: "A modern, fully responsive personal portfolio built using React and Tailwind.",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://your-portfolio-link.com",
    code: "https://github.com/yourrepo",
  },
  {
    title: "Weather App",
    img: "/p3.png",
    desc: "A real-time weather app fetching live API data.",
    tech: ["React", "API", "Node.js"],
    live: "#",
    code: "#",
  },
  {
    title: "E-Commerce UI",
    img: "/p2.png",
    desc: "Frontend design of a fast and clean shopping interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <div className="w-full min-h-screen text-white py-20 px-6 relative overflow-hidden bg-[#0a0702]">

      {/* Background FX */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full absolute -top-10 left-0" />
        <div className="w-[400px] h-[400px] bg-orange-600/10 blur-[150px] rounded-full absolute bottom-0 right-0" />
      </div>

      {/* HEADING */}
      <h1 className="text-center text-4xl md:text-5xl font-bold text-orange-500 relative z-10">
        My Projects
      </h1>
      <p className="text-center text-gray-300 mt-3 mb-12 max-w-2xl mx-auto relative z-10">
        A collection of work showcasing my development skills — blending clean UI,
        efficient logic and performance-focused design.
      </p>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg shadow-xl hover:scale-105 hover:border-orange-500/40 transition-all duration-300"
          >
            {/* PROJECT IMAGE */}
            <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
              <img
                src={p.img}
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-xl font-bold text-orange-400">{p.title}</h2>

            {/* DESCRIPTION */}
            <p classname="text-gray-300 text-sm mt-2">
              {p.desc}
            </p>

            {/* TECH TAGS */}
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs bg-orange-500/20 text-orange-300 border border-orange-400/20 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-6">
              <a
                href={p.live}
                target="_blank"
                className="flex-1 text-center bg-orange-500 text-black font-semibold py-2 rounded-lg hover:bg-orange-600 transition-all"
              >
                Live
              </a>
              <a
                href={p.code}
                target="_blank"
                className="flex-1 text-center bg-black border border-orange-500 text-orange-400 font-semibold py-2 rounded-lg hover:bg-orange-600 hover:text-black hover:border-orange-600 transition-all"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* SPACING */}
      <div className="h-10"></div>
    </div>
  );
};

export default Projects;
