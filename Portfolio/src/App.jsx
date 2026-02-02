import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Project.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate system boot time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds for the "wow" factor
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[1000] bg-[#0a0a0a] flex flex-col items-center justify-center font-mono p-6 select-none"
          >
            <div className="w-full max-w-sm space-y-6">
              {/* Terminal Header */}
              <div className="flex gap-1.5 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>

              {/* Booting Text */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-[#6a9955] text-sm"
                >
                  &gt; npm install portfolio-assets...
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-[#4fc1ff] text-xs sm:text-sm"
                >
                  {/* Logic for Different Message on Mobile/Desktop */}
                  <span className="block md:hidden">
                    [!] Device: MOBILE_ARM64 detected.
                    <br />
                    [!] Applying compact_ui_patch...
                  </span>
                  <span className="hidden md:block">
                    [+] Device: DESKTOP_X64 detected.
                    <br />
                    [+] Initializing multi_window_workspace...
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-[#dcdcaa] text-xs"
                >
                  &gt; Status: 200 OK. Rendering components...
                </motion.div>
              </div>

              {/* VS Code Style Progress Bar */}
              <div className="relative h-[2px] w-full bg-[#333]">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="absolute h-full bg-[#ce9178] shadow-[0_0_10px_#ce9178]"
                />
              </div>

              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-center text-[10px] text-[#555] uppercase tracking-[0.2em]"
              >
                Booting Himanshu.exe
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Only renders when loading is false */}
      {!loading && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;