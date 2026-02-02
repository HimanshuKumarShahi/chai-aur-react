import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Files, Search, GitBranch, Settings, 
  Terminal as TerminalIcon, X, Square, Minus, 
  CheckCircle2, ChevronRight, Info, Menu,
  Mail, Instagram, Linkedin, Github, Download, Send
} from "lucide-react";

export default function Contact() {
  const [currentTime, setCurrentTime] = useState("");
  const [isExplorerOpen, setIsExplorerOpen] = useState(window.innerWidth > 768);
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
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

  const validate = () => {
    if (name.trim().length < 3) {
      setError("Error: Name must be >= 3 characters.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fromEmail.trim())) {
      setError("Error: Invalid email address.");
      return false;
    }
    if (message.trim().length < 10) {
      setError("Error: Message too short (min 10 chars).");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const to = "kh419368@gmail.com";
    const subject = encodeURIComponent("Portfolio contact from website");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${fromEmail}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

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
            <span className="text-[#858585] md:ml-2 truncate">himanshu — Contact.jsx</span>
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
            <div onClick={() => setIsExplorerOpen(!isExplorerOpen)} className={`cursor-pointer transition-colors p-1 ${isExplorerOpen ? 'text-white border-l-2 border-white' : 'hover:text-white'}`}>
              <Files size={24} />
            </div>
            <Search size={24} className="hover:text-white cursor-pointer" />
            <GitBranch size={24} className="hover:text-white cursor-pointer" />
            <div className="mt-auto mb-2"><Settings size={22} className="hover:text-white cursor-pointer" /></div>
          </div>

          {/* EXPLORER */}
          <AnimatePresence>
            {isExplorerOpen && (
              <motion.div initial={{ x: -240 }} animate={{ x: 0 }} exit={{ x: -240 }} transition={{ type: "just" }} className="w-60 bg-[#252526] flex flex-col border-r border-[#1a1a1a] shrink-0 absolute md:relative z-30 h-full shadow-2xl md:shadow-none">
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
                      <Link key={link.path} to={link.path} onClick={() => window.innerWidth < 768 && setIsExplorerOpen(false)} className={`flex items-center gap-2 px-6 py-1.5 hover:bg-[#2a2d2e] transition-colors ${isActive(link.path) ? 'bg-[#37373d] text-white shadow-inner' : 'text-[#858585]'}`}>
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
                <Link key={link.path} to={link.path} className={`flex items-center gap-2 px-4 py-2.5 text-[12px] border-r border-[#1e1e1e] transition-all min-w-fit shrink-0 ${isActive(link.path) ? 'bg-[#1e1e1e] border-t border-t-[#6a9955] text-white' : 'text-[#858585] hover:bg-[#2a2d2e]'}`}>
                  <span className={link.color + " text-[10px] font-bold"}>JS</span> 
                  <span className="truncate">{link.name}</span>
                  <X size={12} className={`ml-2 hover:bg-[#333] rounded p-0.5 ${isActive(link.path) ? 'visible' : 'invisible'}`} />
                </Link>
              ))}
            </div>

            {/* CONTACT CONTENT */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-5 sm:p-10 lg:p-14">
              <div className="max-w-3xl mx-auto space-y-10">
                <header>
                  <div className="text-[#6a9955] text-xs sm:text-sm mb-2 italic">// Initialize communication_protocol...</div>
                  <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter">
                    Ping_<span className="text-[#6a9955]">Me</span>
                  </h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left: Info & Socials */}
                  <div className="space-y-8">
                    <p className="text-[#cccccc] text-sm leading-relaxed">
                      I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-[#4fc1ff] text-xs font-bold uppercase tracking-widest">Connect_Via</h3>
                      <div className="flex flex-wrap gap-4">
                        <a href="https://github.com/HimanshuKumarShahi" target="_blank" className="p-3 bg-[#252526] border border-[#333] text-[#d4d4d4] hover:text-[#6a9955] hover:border-[#6a9955] transition-all"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/himanshu-kumar-s-a434372b7" target="_blank" className="p-3 bg-[#252526] border border-[#333] text-[#d4d4d4] hover:text-[#4fc1ff] hover:border-[#4fc1ff] transition-all"><Linkedin size={20} /></a>
                        <a href="https://www.instagram.com/_____himanshu_____1723/" target="_blank" className="p-3 bg-[#252526] border border-[#333] text-[#d4d4d4] hover:text-[#ce9178] hover:border-[#ce9178] transition-all"><Instagram size={20} /></a>
                      </div>
                    </div>

                    <a href="/resume.pdf" download className="inline-flex items-center gap-3 px-6 py-3 bg-[#6a9955] text-[#1e1e1e] font-black text-xs uppercase tracking-tighter hover:bg-[#5a8549] transition-all active:scale-95">
                      <Download size={16} /> Download_CV.pdf
                    </a>
                  </div>

                  {/* Right: Form */}
                  <form onSubmit={handleSend} className="bg-[#1a1a1a] border border-[#333] p-6 space-y-5 relative">
                    {error && (
                      <div className="absolute -top-4 left-6 right-6 bg-red-900/80 border border-red-500 text-white text-[10px] py-1 px-3 animate-bounce">
                        {error}
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-[10px] text-[#858585] uppercase mb-1">const <span className="text-[#9cdcfe]">name</span> =</label>
                      <input 
                        type="text" value={name} onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#252526] border border-[#333] px-3 py-2 text-sm text-[#ce9178] focus:outline-none focus:border-[#6a9955]"
                        placeholder="'Your Name'"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-[#858585] uppercase mb-1">const <span className="text-[#9cdcfe]">email</span> =</label>
                      <input 
                        type="email" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)}
                        className="w-full bg-[#252526] border border-[#333] px-3 py-2 text-sm text-[#ce9178] focus:outline-none focus:border-[#6a9955]"
                        placeholder="'your@email.com'"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-[#858585] uppercase mb-1">const <span className="text-[#9cdcfe]">message</span> =</label>
                      <textarea 
                        rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-[#252526] border border-[#333] px-3 py-2 text-sm text-[#ce9178] focus:outline-none focus:border-[#6a9955] resize-none"
                        placeholder="'Hello Himanshu...'"
                      />
                    </div>

                    <button type="submit" className="w-full bg-transparent border border-[#6a9955] text-[#6a9955] py-3 text-xs font-black uppercase hover:bg-[#6a9955] hover:text-[#1e1e1e] transition-all flex items-center justify-center gap-2">
                      <Send size={14} /> execute_send()
                    </button>
                  </form>
                </div>
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
              <GitBranch size={12} /> <span className="hidden sm:inline">main*</span>
            </div>
            <div className="flex items-center gap-2 px-1">
              <X size={12} className="bg-red-500 rounded-full p-0.5" /> <span className="hidden xs:inline">0</span>
              <Info size={12} /> <span className="hidden xs:inline">0</span>
            </div>
          </div>
          
          <div className="flex items-center h-full">
            <div className="hidden md:flex items-center gap-3 px-3 hover:bg-[#1f8ad2] h-full cursor-pointer">
               <span>UTF-8</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#1f8ad2] px-3 h-full font-bold">
              <CheckCircle2 size={12} /> <span>Prettier</span>
            </div>
            <div className="px-2 font-medium bg-[#1a73e8]/20 h-full flex items-center">{currentTime}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}