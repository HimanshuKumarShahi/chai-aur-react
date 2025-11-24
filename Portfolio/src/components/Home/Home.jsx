import React from "react";
import { useState } from "react";

function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden pt-32 pb-0 px-4">
      {/* BACKGROUND EFFECTS */}

      {/* Main ambient radial glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,rgba(252,211,77,0.10),transparent_70%)]"></div>

        {/* Big top-left spot */}
        <div className="absolute top-0 left-0 w-64 h-48 rounded-full bg-yellow-500/10 blur-2xl"></div>
        {/* Blue highlight, bottom-right */}
        <div className="absolute bottom-0 right-0 w-72 h-56 rounded-full bg-blue-400/10 blur-3xl"></div>
        {/* Diagonal highlight */}
        <div className="absolute top-1/2 left-0 w-2 h-48 bg-yellow-300/10 rounded-xl rotate-45 blur-lg"></div>
      </div>

      {/* Decorative Boxes & Lines */}
      {/* Top left box */}
      <div className="absolute top-20 left-10 w-24 h-24 border-2 border-orange-400/20 rounded-lg rotate-12 animate-pulse-slow z-10"></div>
      {/* Bottom right box */}
      <div className="absolute bottom-28 right-10 w-20 h-20 border-2 border-cyan-400/20 rounded-2xl -rotate-12 animate-pulse-slow z-10"></div>
      {/* Middle left smaller box */}
      <div className="absolute top-1/2 left-4 w-16 h-16 border border-white/10 rounded-xl rotate-6 z-10"></div>
      {/* Floating thin rectangle */}
      <div className="absolute top-[35%] right-8 w-32 h-6 border border-pink-400/10 rounded-xl -rotate-6"></div>
      {/* Bottom middle wide box */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-10 border-2 border-fuchsia-300/15 rounded-md rotate-3"></div>
      {/* Right edge vertical box */}
      <div className="absolute top-10 right-5 w-8 h-32 border border-blue-400/15 rounded-lg rotate-12"></div>
      {/* Center faint square behind text */}
      <div className="absolute top-1/3 left-1/3 w-64 h-64 border border-white/5 rounded-xl -rotate-12"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pb-0 md:pb-4">
        {/* TEXT SECTION */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-gray-400 tracking-widest text-sm mb-1">
            Welcome to my universe
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-3 leading-tight">
            I’m <span className="text-yellow-400">Himanshu</span>,
            <br />
            <span className="text-gray-300">
              BCA Student &amp; Tech Explorer
            </span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-md mx-auto md:mx-0">
            A learner walking boldly into the tech future — step by step, line
            by line.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
            {/* First Button */}
            <button 
              className="
    px-6 py-3 
    bg-orange-500 
    text-black 
    font-semibold 
    rounded-full 
    shadow-lg 
    border-2 border-orange-500
    transition-all duration-200 
    hover:bg-black 
    hover:text-yellow-400 
    hover:border-yellow-400
    hover:scale-110
    cursor-pointer
    focus:outline-none
    
  ">
              Explore Work
            </button>

            {/* Second Button */}
            <button
              className="
    px-6 py-3 
    bg-black 
    text-yellow-400 
    font-semibold 
    rounded-full 
    border-2 border-yellow-400 
    transition-all duration-200 
    hover:bg-orange-500 
    hover:text-black 
    hover:border-orange-500
    hover:scale-110
    cursor-pointer
    focus:outline-none
  "
            >
              Contact Me
            </button>
          </div>
        </div>
        {/* IMAGE SECTION */}
        <div className="flex-1 flex justify-center px-4 md:px-0">
          <div className="relative">
            {/* Tilted outer frame */}
            <div className="absolute inset-0 border-2 border-yellow-500/20 rounded-xl -rotate-6"></div>
            {/* Extra floating glow */}
            <div className="absolute -top-4 -left-6 w-20 h-20 bg-yellow-400/20 blur-2xl rounded-full z-0 animate-pulse-slow"></div>
            <img
              src="/profile.jpeg"
              alt="profile"
              className="w-72 h-80 object-cover rounded-xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>

    {/* WHY CHOOSE ME SECTION */}
<section className="w-full bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-orange-500 mb-6">
      Why Choose Me?
    </h2>

    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
      I'm a BCA student with a strong passion for development and discipline .
      I mix logic with creativity and build digital experiences that are fast, sharp, and meaningful.
      I focus on writing clean code, designing smooth UI, and solving real-world problems.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-10">

      <div className="bg-black/40 border border-orange-500 rounded-xl p-6 hover:scale-105 transition-transform">
        <h3 className="text-xl font-semibold mb-3 text-orange-400">Discipline & Consistency</h3>
        <p className="text-gray-300">I approach projects like training — steady, focused, and goal-oriented.</p>
      </div>

      <div className="bg-black/40 border border-orange-500 rounded-xl p-6 hover:scale-105 transition-transform">
        <h3 className="text-xl font-semibold mb-3 text-orange-400">Creative + Logical</h3>
        <p className="text-gray-300">I blend design sense with solid programming logic for balanced work.</p>
      </div>

      <div className="bg-black/40 border border-orange-500 rounded-xl p-6 hover:scale-105 transition-transform">
        <h3 className="text-xl font-semibold mb-3 text-orange-400">Continuous Learner</h3>
        <p className="text-gray-300">Tech changes fast — I move faster. Always upgrading skills and mindset.</p>
      </div>

    </div>
  </div>
</section>


{/* SKILLS GRID SECTION */}

<section style={{ padding: "50px 20px" }}>
  <h2
    style={{
      color: "orange",
      marginBottom: "30px",
      fontSize: "30px",
      fontWeight: "bold",
      textAlign: "center",
    }}
  >
    My Skills
  </h2>

  {(() => {
    const [showAll, setShowAll] = useState(false);

    const skills = [
      { name: "JavaScript", level: 75 },
      { name: "FullStack", level: 76 },
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
      { name: "C", level: 57 },
    ];

    const visible = showAll ? skills : skills.slice(0, 5);

    return (
      <>
        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {visible.map((skill) => (
            <div
              key={skill.name}
              style={{
                border: "2px solid orange",
                borderRadius: "12px",
                height: "200px",
                position: "relative",
                overflow: "hidden",
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(6px)",
                boxShadow: "0 0 15px rgba(255,165,0,0.2)",
              }}
            >
              {/* Skill Name */}
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                  paddingTop: "10px",
                }}
              >
                {skill.name}
              </div>

              {/* Fill */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: `${skill.level}%`,
                  background: "orange",
                  transition: "height 1s ease",
                  opacity: 0.9,
                }}
              />

              {/* Percentage */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  width: "100%",
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bold",
                  zIndex: 10,
                  fontSize: "18px",
                }}
              >
                {skill.level}%
              </div>
            </div>
          ))}
        </div>

        {/* SHOW MORE BUTTON */}
        <div style={{ marginTop: "25px", textAlign: "center" }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid orange",
              padding: "12px 25px",
              borderRadius: "12px",
              cursor: "pointer",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              backdropFilter: "blur(10px)",
              transition: "0.3s",
              margin: "0 auto",
            }}
          >
            <span
              style={{
                transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s",
              }}
            >
              ▼
            </span>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </>
    );
  })()}
</section>



    </div>
  );
}

export default Home;
