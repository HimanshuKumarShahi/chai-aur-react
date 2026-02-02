import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Files, Search, GitBranch, Settings, 
  Terminal as TerminalIcon, X, Square, Minus, 
  CheckCircle2, ChevronRight, Info, Menu,
  ExternalLink, Github
} from "lucide-react";

const projectData = [
  {
    title: "Portfolio Website",
    img: "/project_1.png",
    desc: "A modern, fully responsive personal portfolio built using React and Tailwind.",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://portfolio-ashen-seven-eq9e6jhzvm.vercel.app/",
    code: "https://github.com/HimanshuKumarShahi",
  },
  {
    title: "TO-DO-LIST",
    img: "/project_2.png",
    desc: "Efficient task management application using JavaScript and LocalStorage API.",
    tech: ["JavaScript", "HTML5", "LocalStorage"],
    live: "https://to-do-list-delta-wheat.vercel.app/",
    code: "https://github.com/HimanshuKumarShahi",
  },
];

export default function Projects() {
  const [currentTime, setCurrentTime] = useState("");
  const [isExplorerOpen, setIsExplorerOpen] = useState(window.innerWidth > 768);
  const location = useLocation();

  useEffect(() => {
    const update = () => setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    update();
    const interval = setInterval(update, 1000);
    
    const handleResize = () => {
      if (window.innerWidth < 768) setIsExplorerOpen(false);
      else setIsExplorerOpen(true);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home.jsx", path: "/", color: "text-[#ce9178]" },
    { name: "About.jsx", path: "/about", color: "text-[#4fc1ff]" },
    { name: "Projects.jsx", path: "/projects", color: "text-[#dcdcaa]" },
    { name: "Contact.jsx", path: "/contact", color: "text-[#6a9955]" },
  ];

  return (
    <div className="h-screen w-full bg-[#0a0a0a] flex items-center justify-center p-0 md:p-4 font-mono text-[#d4d4d4] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[1440px] bg-[#1e1e1e] shadow-2xl border border-[#333] flex flex-col h-full md:h-[92vh] relative overflow-hidden"
      >
        
        {/* TITLE BAR */}
        <div className="bg-[#323233] px-3 py-1.5 flex items-center justify-between text-[11px] md:text-[12px] text-[#cccccc] shrink-0 border-b border-[#252526] z-50">
          <div className="flex items-center gap-2 md:gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" className="w-4 h-4" alt="vscode" />
            <div className="hidden lg:flex gap-3 ml-2">
              <span>File</span><span>Edit</span><span>Selection</span>
            </div>
            <span className="text-[#858585] md:ml-2 truncate max-w-[150px]">himanshu — Projects.jsx</span>
          </div>
          <div className="flex items-center gap-3">
            <Minus size={14} className="hover:bg-[#3c3c3c] cursor-pointer" />
            <Square size={12} className="hover:bg-[#3c3c3c] cursor-pointer" />
            <X size={14} className="hover:bg-red-500 cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden relative">
          
          {/* ACTIVITY BAR */}
          <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-5 text-[#858585] shrink-0 z-40">
            <div 
              onClick={() => setIsExplorerOpen(!isExplorerOpen)} 
              className={`cursor-pointer transition-colors p-1 ${isExplorerOpen ? 'text-white border-l-2 border-white' : 'hover:text-white'}`}
            >
              <Files size={24} />
            </div>
            <Search size={24} className="hover:text-white cursor-pointer" />
            <GitBranch size={24} className="hover:text-white cursor-pointer" />
            <div className="mt-auto mb-2 flex flex-col gap-5">
              <Settings size={22} className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* EXPLORER */}
          <AnimatePresence>
            {isExplorerOpen && (
              <motion.div 
                initial={{ x: -240 }}
                animate={{ x: 0 }}
                exit={{ x: -240 }}
                transition={{ type: "just" }}
                className="w-60 bg-[#252526] flex flex-col border-r border-[#1a1a1a] shrink-0 absolute md:relative z-30 h-full shadow-2xl md:shadow-none"
              >
                <div className="p-3 text-[11px] uppercase font-bold text-[#bbbbbb] flex justify-between items-center bg-[#252526]">
                  <span>Explorer</span>
                  <X size={16} className="md:hidden cursor-pointer" onClick={() => setIsExplorerOpen(false)} />
                </div>
                
                <div className="text-[13px] overflow-y-auto">
                  <div className="flex items-center gap-1 px-2 py-1.5 bg-[#37373d] text-white">
                    <ChevronRight size={14} /> <span className="font-bold truncate">PORTFOLIO-SRC</span>
                  </div>
                  
                  <div className="flex flex-col mt-1">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.path} 
                        to={link.path}
                        onClick={() => window.innerWidth < 768 && setIsExplorerOpen(false)}
                        className={`flex items-center gap-2 px-6 py-1.5 hover:bg-[#2a2d2e] transition-colors ${isActive(link.path) ? 'bg-[#37373d] text-white' : 'text-[#858585]'}`}
                      >
                        <TerminalIcon size={14} className={link.color} />
                        <span className="truncate">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* MAIN CONTENT AREA */}
          <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e] relative">
            
            {/* TAB BAR */}
            <div className="flex bg-[#252526] overflow-x-auto no-scrollbar shrink-0 border-b border-[#1a1a1a]">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2.5 text-[12px] border-r border-[#1e1e1e] transition-all min-w-fit shrink-0 ${isActive(link.path) ? 'bg-[#1e1e1e] border-t border-t-[#dcdcaa] text-white' : 'text-[#858585] hover:bg-[#2a2d2e]'}`}
                >
                  <span className={link.color + " text-[10px] font-bold"}>JS</span> 
                  <span className="truncate max-w-[80px] sm:max-w-none">{link.name}</span>
                  <X size={12} className={`ml-2 hover:bg-[#333] rounded p-0.5 ${isActive(link.path) ? 'visible' : 'invisible'}`} />
                </Link>
              ))}
            </div>

            {/* SCROLLABLE PROJECTS */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-5 sm:p-10 lg:p-14">
              <div className="max-w-6xl mx-auto">
                <header className="mb-10 space-y-2">
                  <div className="text-[#6a9955] text-xs sm:text-sm italic">
                    // Fetching deployed_apps from cloud...
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
                    Selected_<span className="text-[#dcdcaa]">Works</span>
                  </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projectData.map((project, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="bg-[#1a1a1a] border border-[#333] flex flex-col group relative"
                    >
                      {/* Decoration line */}
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#dcdcaa] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="aspect-video bg-black overflow-hidden">
                        <img 
                          src={project.img} 
                          alt={project.title} 
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                        />
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                           <h3 className="text-[#9cdcfe] font-bold text-xl">{project.title}</h3>
                           <span className="text-[10px] text-[#858585]">PROJECT_0{idx + 1}</span>
                        </div>
                        
                        <p className="text-[#cccccc] text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                          {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map(t => (
                            <span key={t} className="text-[10px] px-2 py-0.5 bg-[#252526] text-[#ce9178] border border-[#333]">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-4 border-t border-[#333]">
                          <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 bg-[#dcdcaa] hover:bg-[#c5ba91] text-[#1e1e1e] py-2.5 text-center text-[11px] font-black uppercase flex items-center justify-center gap-2 transition-colors">
                            <ExternalLink size={14}/> Live_Demo
                          </a>
                          <a href={project.code} target="_blank" rel="noreferrer" className="flex-1 border border-[#dcdcaa] text-[#dcdcaa] hover:bg-[#dcdcaa]/10 py-2.5 text-center text-[11px] font-black uppercase flex items-center justify-center gap-2 transition-colors">
                            <Github size={14}/> Source
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CURSOR PROMPT */}
              <div className="mt-12 flex items-center gap-2 text-xs sm:text-sm text-[#858585]">
                <span className="text-[#6a9955]">himanshu@architect:</span>
                <span className="text-[#4fc1ff]">~/projects</span>
                <span className="text-white animate-pulse italic">_</span>
              </div>
            </div>
          </div>
        </div>

        {/* STATUS BAR */}
        <div className="bg-[#007acc] h-6 flex items-center px-2 sm:px-3 text-white text-[11px] justify-between select-none shrink-0 z-50">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1 h-full cursor-pointer md:hidden" onClick={() => setIsExplorerOpen(!isExplorerOpen)}>
              <Menu size={14} />
            </div>
            <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-2 h-full cursor-pointer">
              <GitBranch size={12} />
              <span className="hidden sm:inline">main*</span>
            </div>
            <div className="flex items-center gap-2 px-1">
              <X size={12} className="bg-red-500 rounded-full p-0.5" /> <span className="hidden xs:inline">0</span>
              <Info size={12} /> <span className="hidden xs:inline">0</span>
            </div>
          </div>
          
          <div className="flex items-center h-full">
            <div className="hidden md:flex items-center gap-3 px-3 hover:bg-[#1f8ad2] h-full cursor-pointer transition-colors">
               <span>Spaces: 2</span>
               <span>UTF-8</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#1f8ad2] px-3 h-full font-bold">
              <CheckCircle2 size={12} className="hidden xs:block" />
              <span>Prettier</span>
            </div>
            <div className="px-2 font-medium bg-[#1a73e8]/20 h-full flex items-center">
              {currentTime}
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}