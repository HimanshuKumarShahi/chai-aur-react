import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString());
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  const skills = [
    { name: "FullStack", level: 76 },
    { name: "JavaScript", level: 75 },
    { name: "Python", level: 70 },
    { name: "Node.js", level: 65 },
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] px-2 sm:px-4 lg:px-6 py-4 font-mono flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="
          w-full
          max-w-7xl
          2xl:max-w-[90vw]
          bg-[#1e1e1e]
          border border-[#333]
          rounded-lg
          shadow-2xl
          flex flex-col
          min-h-[90vh]
          lg:min-h-[94vh]
          overflow-hidden
        "
      >
        {/* TITLE BAR */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#323233] text-xs text-[#cccccc]">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="hidden md:block">
              himanshu_portfolio — Visual Studio Code
            </span>
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

          {/* TERMINAL */}
          <div className="flex-1 flex flex-col">
            {/* TABS */}
            <div className="flex bg-[#252526] text-[11px] text-[#858585] uppercase">
              <div className="px-4 py-2">Output</div>
              <div className="px-4 py-2">Debug</div>
              <div className="px-4 py-2 bg-[#1e1e1e] border-b border-[#007acc] text-white font-bold">
                Terminal
              </div>
              <div className="px-4 py-2">Problems</div>
            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-14 py-6 lg:py-10 space-y-10">
              {/* BOOT */}
              <div className="text-sm space-y-1">
                <div>
                  <span className="text-[#6a9955]">himanshu@portfolio</span>
                  <span className="text-[#4fc1ff]">:~/main</span>
                  <span className="text-white"> $</span>{" "}
                  <span className="text-[#ce9178]">npm run dev</span>
                </div>
                <div className="text-[#858585]">Starting dev server…</div>
                <div className="text-[#6a9955]">VITE ready in 128 ms</div>
                <div className="text-[#4fc1ff] underline">
                  https://kumar-himanshu-portfolio.vercel.app/
                </div>
              </div>

              <hr className="border-[#333]" />

              {/* MAIN */}
              <section className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-12">
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white">
                    HIMANSHU<span className="text-[#ce9178]">_</span>
                  </h1>

                  <p className="text-[#6a9955] text-lg font-bold italic">
                    // Full-Stack Architect
                  </p>

                  <p className="text-[#d4d4d4] max-w-2xl leading-relaxed">
                    Building scalable systems with
                    <span className="text-[#4fc1ff]"> React</span>,
                    <span className="text-[#ce9178]"> Node</span> &
                    <span className="text-[#b5cea8]"> Python</span>.
                    Status: <span className="text-[#6a9955]">Optimized</span>.
                  </p>

                  {/* SKILLS */}
                  <div className="bg-[#252526] border border-[#333] p-4 rounded space-y-3 max-w-xl">
                    <div className="text-xs uppercase text-[#858585]">
                      System_Capabilities
                    </div>
                    {skills.map(s => (
                      <div key={s.name} className="text-xs">
                        <div className="flex justify-between mb-1">
                          <span>{s.name}</span>
                          <span className="text-[#6a9955]">{s.level}%</span>
                        </div>
                        <div className="h-1 bg-[#1e1e1e]">
                          <div
                            className="h-full bg-[#007acc]"
                            style={{ width: `${s.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="flex flex-wrap gap-4">
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

                {/* IMAGE */}
                <div className="max-w-xs xl:max-w-sm mx-auto">
                  <div className="border border-[#333] bg-[#1e1e1e] p-2">
                    <img
                      src="/profile.png"
                      alt="Himanshu"
                    />
                    <div className="text-[10px] text-center text-[#858585] mt-1">
                      himanshu_rendered.png
                    </div>
                  </div>
                </div>
              </section>

              {/* CURSOR */}
              <div className="flex gap-2 text-sm">
                <span className="text-[#6a9955]">himanshu@portfolio</span>
                <span className="text-[#4fc1ff]">:~/main</span>
                <span className="text-white">$</span>
                <span className="w-2.5 h-5 bg-[#aeafad] animate-pulse" />
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
            <span>{time}</span>
            <span className="bg-[#1f8ad2] px-2 font-bold">Prettier</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
