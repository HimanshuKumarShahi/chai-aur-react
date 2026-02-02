import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Files, Search, GitBranch, Play, Settings, 
  Terminal as TerminalIcon, X, Square, Minus, 
  CheckCircle2, ChevronRight, Bell, Info, Cpu, Menu
} from "lucide-react";

function Home() {
  const [currentTime, setCurrentTime] = useState("");
  const [isExplorerOpen, setIsExplorerOpen] = useState(window.innerWidth > 768);
  const location = useLocation();

  useEffect(() => {
    const update = () => setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    update();
    const interval = setInterval(update, 1000);
    
    // Close explorer automatically on resize if mobile
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

  const skills = [
    { name: "FullStack", level: 76, color: "bg-[#ce9178]" },
    { name: "JavaScript", level: 75, color: "bg-[#f1e05a]" },
    { name: "Python", level: 70, color: "bg-[#3572A5]" },
    { name: "Node.js", level: 65, color: "bg-[#68a063]" },
  ];

  return (
    <div className="h-screen w-full bg-[#0a0a0a] flex items-center justify-center p-0 md:p-4 font-mono text-[#d4d4d4] overflow-hidden">
      {/* VS CODE WINDOW */}
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
              <span>File</span><span>Edit</span><span>View</span>
            </div>
            <span className="text-[#858585] md:ml-2 truncate max-w-[150px]">himanshu — portfolio</span>
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

          {/* EXPLORER (Responsive Slide-in) */}
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
                        className={`flex items-center gap-2 px-6 py-1.5 hover:bg-[#2a2d2e] transition-colors ${isActive(link.path) ? 'bg-[#37373d] text-white shadow-inner' : 'text-[#858585]'}`}
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
            
            {/* TAB BAR (Clickable Files) */}
            <div className="flex bg-[#252526] overflow-x-auto no-scrollbar shrink-0 border-b border-[#1a1a1a]">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2.5 text-[12px] border-r border-[#1e1e1e] transition-all min-w-fit shrink-0 ${isActive(link.path) ? 'bg-[#1e1e1e] border-t border-t-[#ce9178] text-white' : 'text-[#858585] hover:bg-[#2a2d2e]'}`}
                >
                  <span className={link.color + " text-[10px] font-bold"}>JS</span> 
                  <span className="truncate max-w-[80px] sm:max-w-none">{link.name}</span>
                  <X size={12} className={`ml-2 hover:bg-[#333] rounded p-0.5 ${isActive(link.path) ? 'visible' : 'invisible'}`} />
                </Link>
              ))}
            </div>

            {/* SCROLLABLE CODE/CONTENT */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-5 sm:p-10 lg:p-14">
              
              {/* VITE HEADER */}
              <div className="mb-8 text-[11px] sm:text-[13px] font-mono border-l border-[#444] pl-4 space-y-1 opacity-70">
                <div className="text-[#858585]">[{currentTime}] HMR update: /src/Home.jsx</div>
                <div className="text-[#6a9955]">VITE v5.4.2 ready. Serving at port 5173</div>
              </div>

              {/* MAIN LAYOUT */}
              <div className="grid grid-cols-1 xl:grid-cols-[1fr_350px] gap-12 items-start">
                
                <div className="space-y-6">
                  <header className="space-y-4">
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-tight">
                      HIMANSHU<span className="text-[#ce9178] animate-pulse">_</span>
                    </h1>
                    <div className="inline-flex items-center gap-2 bg-[#252526] border border-[#333] px-3 py-1.5 text-[#6a9955] font-bold text-xs sm:text-sm">
                      <Cpu size={16} /> FULLSTACK_DEV_V3
                    </div>
                  </header>

                  <p className="text-[#cccccc] text-sm sm:text-lg leading-relaxed max-w-2xl">
                    Full-stack architect building performant web applications. 
                    Merging code-level efficiency with modern UI aesthetics.
                  </p>

                  {/* SKILLS CHIPS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                    {skills.map((skill) => (
                      <div key={skill.name} className="bg-[#1a1a1a] border border-[#333] p-3">
                        <div className="flex justify-between text-[10px] font-bold mb-2">
                          <span className="text-[#9cdcfe] tracking-wider">{skill.name}</span>
                          <span className="text-[#6a9955]">{skill.level}%</span>
                        </div>
                        <div className="h-1 bg-[#252526] w-full">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            className={`${skill.color} h-full`} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6">
                    <Link to="/projects" className="bg-[#ce9178] hover:bg-[#b87d65] text-[#1e1e1e] px-6 sm:px-8 py-3 font-black text-xs sm:text-sm uppercase tracking-tighter transition-all active:scale-95 shadow-lg">
                      [ view_projects ]
                    </Link>
                    <Link to="/contact" className="border border-[#ce9178] text-[#ce9178] hover:bg-[#ce9178]/10 px-6 sm:px-8 py-3 font-black text-xs sm:text-sm uppercase tracking-tighter transition-all active:scale-95">
                      [ ping_me ]
                    </Link>
                  </div>
                </div>

                {/* PROFILE IMAGE */}
                <div className="relative mx-auto xl:mx-0 w-full max-w-[280px] sm:max-w-[320px]">
                  <div className="absolute inset-0 bg-[#ce9178] opacity-5 blur-3xl"></div>
                  <div className="relative bg-[#1a1a1a] border border-[#444] p-1.5">
                    {/* Retro Scanline Overlay */}
                    <div className="absolute inset-0 pointer-events-none z-10 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]"></div>
                    <img 
                      src="/profile.png" 
                      alt="Himanshu" 
                      className="w-full grayscale brightness-90 hover:grayscale-0 transition-all duration-700 aspect-[4/5] object-cover"
                    />
                    <div className="mt-2 flex justify-between items-center text-[9px] px-1 text-[#858585] font-bold">
                      <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#6a9955]"></div> STATUS_OK</span>
                      <span>IMG_REF_01</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* CURSOR PROMPT */}
              <div className="mt-12 flex items-center gap-2 text-xs sm:text-sm text-[#858585]">
                <span className="text-[#6a9955]">himanshu@architect:</span>
                <span className="text-[#4fc1ff]">~/home</span>
                <span className="text-white animate-pulse italic">_</span>
              </div>
            </div>
          </div>
        </div>

        {/* STATUS BAR (Corrected Bottom Layout) */}
        <div className="bg-[#007acc] h-6 flex items-center px-2 sm:px-3 text-white text-[11px] justify-between select-none shrink-0 z-50">
          <div className="flex items-center gap-3 overflow-hidden">
            <div 
              className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1 h-full cursor-pointer md:hidden"
              onClick={() => setIsExplorerOpen(!isExplorerOpen)}
            >
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
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #444; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @media (max-width: 400px) { .xs\\:hidden { display: none; } }
      `}</style>
    </div>
  );
}

export default Home;