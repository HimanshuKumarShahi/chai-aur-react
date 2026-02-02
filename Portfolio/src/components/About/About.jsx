import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Files, Search, GitBranch, Settings, 
  Terminal as TerminalIcon, X, Square, Minus, 
  CheckCircle2, ChevronRight, Info, Cpu, Menu,
  BookOpen, Briefcase, FileCode, ShieldCheck, Award, PlusCircle
} from "lucide-react";

const skills = [
  { name: "FullStack", level: 76, color: "bg-[#ce9178]" },
  { name: "JavaScript", level: 75, color: "bg-[#f1e05a]" },
  { name: "Python", level: 70, color: "bg-[#3572A5]" },
  { name: "MongoDB", level: 50, color: "bg-[#47A248]" },
  { name: "Git & GitHub", level: 79, color: "bg-[#F05032]" },
  { name: "Node.js", level: 69, color: "bg-[#68a063]" },
  { name: "Tailwind Css", level: 69, color: "bg-[#38B2AC]" },
  { name: "Java", level: 60, color: "bg-[#b07219]" },
  { name: "SQL", level: 60, color: "bg-[#336791]" },
];

const certificates = [
  { title: "Full Stack Development", issuer: "Meta/Coursera", date: "2024", img: "/cert-web.png" },
  { title: "JavaScript Algorithms", issuer: "FreeCodeCamp", date: "2023", img: "/cert-js.png" },
  { title: "Python Specialization", issuer: "Google", date: "2023", img: "/cert-py.png" },
];

export default function About() {
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

  const navLinks = [
    { name: "Home.jsx", path: "/", color: "text-[#ce9178]" },
    { name: "About.jsx", path: "/about", color: "text-[#4fc1ff]" },
    { name: "Projects.jsx", path: "/projects", color: "text-[#dcdcaa]" },
    { name: "Contact.jsx", path: "/contact", color: "text-[#6a9955]" },
  ];

  const isActive = (path) => location.pathname === path;

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
            <div className="hidden lg:flex gap-3 ml-2 text-[#858585]">
              <span>File</span><span>Edit</span><span>Selection</span>
            </div>
            <span className="text-[#858585] md:ml-2 truncate max-w-[150px]">himanshu — About.jsx</span>
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
                    <ChevronRight size={14} /> <span className="font-bold truncate uppercase tracking-tighter">PORTFOLIO-SRC</span>
                  </div>
                  
                  <div className="flex flex-col mt-1">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.path} 
                        to={link.path}
                        onClick={() => window.innerWidth < 768 && setIsExplorerOpen(false)}
                        className={`flex items-center gap-2 px-6 py-1.5 hover:bg-[#2a2d2e] transition-colors ${isActive(link.path) ? 'bg-[#37373d] text-white shadow-inner' : 'text-[#858585]'}`}
                      >
                        <FileCode size={14} className={link.color} />
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
                              className={`flex items-center gap-2 px-4 py-2.5 text-[12px] border-r border-[#1e1e1e] transition-all min-w-fit shrink-0 ${isActive(link.path) ? 'bg-[#1e1e1e] border-t border-t-[#ce9178] text-white' : 'text-[#858585] hover:bg-[#2a2d2e]'}`}
                            >
                              <span className={link.color + " text-[10px] font-bold"}>JS</span> 
                              <span className="truncate max-w-[80px] sm:max-w-none">{link.name}</span>
                              <X size={12} className={`ml-2 hover:bg-[#333] rounded p-0.5 ${isActive(link.path) ? 'visible' : 'invisible'}`} />
                            </Link>
                          ))}
                        </div>

            {/* SCROLLABLE CODE/CONTENT */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-10 lg:p-14">
              <div className="max-w-5xl space-y-12 pb-10">
                
                {/* BIO SECTION */}
                <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="flex items-center gap-2 text-[#6a9955] text-sm mb-4">
                    <span>himanshu@architect:</span>
                    <span className="text-[#4fc1ff]">~/about</span>
                    <span className="text-white">$ cat info.md</span>
                  </div>
                  <div className="text-[#d4d4d4] text-lg leading-relaxed border-l-2 border-[#4fc1ff] pl-6 py-2 bg-[#252526]/30">
                    BCA student and Full-Stack Developer aspirant. I bridge the gap between complex logic and modern user aesthetics.
                  </div>
                </motion.section>

                {/* SKILLS GRID */}
                <section>
                  <h3 className="text-[#ce9178] font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Cpu size={16} /> Technical_Toolkit
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((s) => (
                      <div key={s.name} className="bg-[#1a1a1a] border border-[#333] p-4 rounded hover:border-[#4fc1ff] transition-all group">
                        <div className="flex justify-between text-xs mb-3">
                          <span className="text-[#9cdcfe] font-bold tracking-wider">{s.name}</span>
                          <span className="text-[#6a9955]">{s.level}%</span>
                        </div>
                        <div className="h-1 bg-[#252526] w-full rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            whileInView={{ width: `${s.level}%` }}
                            transition={{ duration: 1 }}
                            className={`${s.color} h-full`} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* EDUCATION & EXPERIENCE ROW */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h3 className="text-[#dcdcaa] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                       <BookOpen size={16} /> Education
                    </h3>
                    <div className="bg-[#1a1a1a] p-4 border border-[#333] border-l-[#4fc1ff] border-l-2">
                      <p className="text-[#4fc1ff] font-bold">BCA (Computer Applications)</p>
                      <p className="text-[#858585] text-xs">Ongoing | Core IT Focus</p>
                      <p className="mt-2 text-sm text-[#cccccc]">Focusing on Data Structures, Web Systems, and Logic.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[#6a9955] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                       <Briefcase size={16} /> Experience
                    </h3>
                    <div className="bg-[#1a1a1a] p-4 border border-[#333] border-l-[#6a9955] border-l-2">
                      <p className="text-white font-bold">Self-Taught Fullstack Developer</p>
                      <p className="text-[#858585] text-xs">2023 - Present</p>
                      <p className="mt-2 text-sm text-[#cccccc]">Building responsive UIs, logic tools, and mini-games.</p>
                    </div>
                  </div>
                </div>

                {/* NEW CERTIFICATES SECTION */}
                <section className="space-y-6 pt-4">
                  <h3 className="text-[#ce9178] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={16} /> Certificates_Vault
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="group relative bg-[#1a1a1a] border border-[#333] overflow-hidden rounded-sm"
                      >
                        <div className="aspect-video w-full bg-[#252526] relative overflow-hidden border-b border-[#333]">
                          <img 
                            src={cert.img} 
                            alt={cert.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] to-transparent opacity-40"></div>
                        </div>

                        <div className="p-4 space-y-1">
                          <div className="flex justify-between items-start">
                            <h4 className="text-[#9cdcfe] text-sm font-bold truncate pr-2">{cert.title}</h4>
                            <span className="text-[#6a9955] text-[10px] font-mono">{cert.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#858585] text-xs">
                            <Award size={12} className="text-[#ce9178]" />
                            <span>{cert.issuer}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Placeholder for future growth */}
                    <div className="border border-dashed border-[#333] rounded-sm flex flex-col items-center justify-center p-6 text-center opacity-40 hover:opacity-80 transition-opacity cursor-pointer">
                       <PlusCircle size={24} className="text-[#858585] mb-2" />
                       <span className="text-[10px] font-mono uppercase tracking-widest">Next_Achievement.exe</span>
                    </div>
                  </div>
                </section>

                <div className="pt-8 flex flex-wrap gap-4">
                   <Link to="/projects" className="bg-[#ce9178] hover:bg-[#b87d65] text-[#1e1e1e] px-8 py-3 text-xs font-black uppercase tracking-tighter transition-all active:scale-95 shadow-lg">
                     [ view_projects ]
                   </Link>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* STATUS BAR */}
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
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}