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

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(252,211,77,0.10),transparent_70%)]"></div>
        <div className="absolute top-10 left-0 w-72 h-72 bg-yellow-500/10 blur-[120px]"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-500/10 blur-[150px]"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-400/5 blur-[200px]"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-6 w-28 h-28 border border-orange-500/20 rounded-2xl rotate-12 animate-pulse-slow" />
      <div className="absolute bottom-24 right-6 w-16 h-16 border border-blue-400/20 rounded-xl -rotate-12 animate-pulse-slow" />
      <div className="absolute top-1/2 left-10 w-14 h-14 border border-white/10 rounded-lg rotate-6" />
      <div className="absolute top-1/3 right-10 w-28 h-10 border border-pink-400/10 rounded-xl -rotate-6" />

      {/* Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-bold text-orange-500 relative z-10">My Projects</h1>
      <p className="text-center text-gray-300 mt-3 mb-12 max-w-2xl mx-auto relative z-10">
        A curated list of digital creations — blending function, aesthetics, and performance.
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg shadow-xl hover:scale-[1.05] hover:border-orange-500/40 transition-all duration-300 group"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
              <img
                src={p.img}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-orange-400">{p.title}</h2>

            {/* Description */}
            <p className="text-gray-300 text-sm mt-2">{p.desc}</p>

            {/* Tech */}
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

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href={p.live}
                target="_blank"
                className="flex-1 text-center px-6 py-3 bg-orange-500 text-black font-semibold rounded-xl shadow-lg border-2 border-orange-500 transition-all duration-200 hover:bg-black hover:text-yellow-400 hover:border-yellow-400 hover:scale-110 flex items-center justify-center"
              >
                Live
              </a>

              <a
                href={p.code}
                target="_blank"
                className="flex-1 text-center px-6 py-3 bg-black text-yellow-400 font-semibold rounded-xl border-2 border-yellow-400 transition-all duration-200 hover:bg-orange-500 hover:text-black hover:border-orange-500 hover:scale-110 flex items-center justify-center"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="h-16" />
    </div>
  );
};

export default Projects;
