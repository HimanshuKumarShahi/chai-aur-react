import React, { useState, useEffect, useRef } from "react";

export default function ReactPlayground() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 p-4 md:p-10 font-sans selection:bg-fuchsia-500/30">
      {/* Background Glow Effects */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        
        <header className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-400 to-purple-400">
            React Hooks Visualizer
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            An interactive journal to understand how React's core engine works. 
            Play with the demos on the left and read what's happening on the right.
          </p>
        </header>

        {/* 1. useState Section */}
        <UseStateDemo />

        {/* 2. useEffect Section */}
        <UseEffectDemo />

        {/* 3. useRef Section */}
        <UseRefDemo />

      </div>
    </div>
  );
}

// ==========================================
// 1. useState DEMO COMPONENT
// ==========================================
function UseStateDemo() {
  // useState gives us a variable (count) and a function to update it (setCount)
  const [count, setCount] = useState(0);

  return (
    <section className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
      <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-800 flex items-center gap-3">
        <span className="text-2xl">📦</span>
        <h2 className="text-xl font-bold text-white font-mono">useState()</h2>
      </div>
      
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
        {/* Demo Side */}
        <div className="p-8 flex flex-col items-center justify-center space-y-6">
          <div className="relative group">
            {/* The glow effect scales with the count! */}
            <div 
              className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 transition-all duration-300"
              style={{ transform: `scale(${1 + count * 0.1})` }}
            />
            <button
              onClick={() => setCount(count + 1)}
              className="relative bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white text-3xl font-black w-32 h-32 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-transform active:scale-90 flex items-center justify-center"
            >
              {count}
            </button>
          </div>
          <button 
            onClick={() => setCount(0)}
            className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
          >
            Reset to 0
          </button>
        </div>

        {/* Explanation Side */}
        <div className="p-8 space-y-4 text-slate-300 bg-slate-950/30">
          <h3 className="text-blue-400 font-semibold uppercase tracking-wider text-sm">How it works</h3>
          <p>
            <strong className="text-white">useState</strong> is the memory of a React component. 
          </p>
          <ul className="space-y-3 text-sm leading-relaxed list-disc list-inside marker:text-blue-500">
            <li>When you click the button, we call <code className="bg-slate-800 text-blue-300 px-1.5 py-0.5 rounded">setCount(count + 1)</code>.</li>
            <li>React notices the state changed, so it <strong>destroys and redraws (re-renders)</strong> this entire block to show the new number.</li>
            <li>Notice the blue glow getting bigger? The CSS scale is tied directly to the state variable. State drives the UI!</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. useEffect DEMO COMPONENT
// ==========================================
function UseEffectDemo() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect handles things outside of the normal render cycle (like timers or fetching data)
  useEffect(() => {
    let intervalId;
    
    // If the state says we are running, start a browser timer
    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // CLEANUP FUNCTION: This runs when the component unmounts OR before the effect runs again.
    // It prevents memory leaks (multiple timers running at once).
    return () => clearInterval(intervalId);
    
  }, [isRunning]); // Dependency Array: Only re-run this effect if 'isRunning' changes.

  return (
    <section className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
      <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-800 flex items-center gap-3">
        <span className="text-2xl">⚡</span>
        <h2 className="text-xl font-bold text-white font-mono">useEffect()</h2>
      </div>
      
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
        <div className="p-8 flex flex-col items-center justify-center space-y-8">
          
          <div className="text-6xl font-black font-mono tracking-widest text-fuchsia-400 drop-shadow-[0_0_15px_rgba(232,121,249,0.5)]">
            {seconds}s
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all active:scale-95 ${
                isRunning 
                  ? "bg-rose-500/20 text-rose-400 border border-rose-500/50 hover:bg-rose-500/30" 
                  : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500/30"
              }`}
            >
              {isRunning ? "Pause Timer" : "Start Timer"}
            </button>
            <button
              onClick={() => { setIsRunning(false); setSeconds(0); }}
              className="px-6 py-2.5 rounded-full font-bold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all active:scale-95"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="p-8 space-y-4 text-slate-300 bg-slate-950/30">
          <h3 className="text-fuchsia-400 font-semibold uppercase tracking-wider text-sm">How it works</h3>
          <p>
            <strong className="text-white">useEffect</strong> syncs your component with outside systems (like the browser clock, APIs, or databases).
          </p>
          <ul className="space-y-3 text-sm leading-relaxed list-disc list-inside marker:text-fuchsia-500">
            <li>The <strong>Dependency Array</strong> <code className="bg-slate-800 text-fuchsia-300 px-1.5 py-0.5 rounded">[isRunning]</code> tells React: "Only turn this timer on or off when the start/pause button is clicked."</li>
            <li>Without useEffect, if we put <code className="text-slate-400">setInterval</code> directly in the code, React would create a brand new timer every single second it re-rendered!</li>
            <li>It also cleans up after itself. When you click pause, it automatically destroys the timer to save browser memory.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. useRef DEMO COMPONENT
// ==========================================
function UseRefDemo() {
  // useRef to hold a direct connection to an HTML element
  const inputElement = useRef(null);
  
  // useRef to hold a value that DOES NOT trigger a re-render when changed
  const secretClickCount = useRef(0);
  
  // We use state just to force the UI to update when we click the "Reveal" button
  const [revealedCount, setRevealedCount] = useState(0);

  const handleJediFocus = () => {
    // 1. Direct DOM manipulation without React state!
    inputElement.current.focus();
    inputElement.current.value = "The Force is with you.";
    
    // 2. Updating a ref doesn't cause a re-render!
    secretClickCount.current = secretClickCount.current + 1;
  };

  return (
    <section className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm mb-20">
      <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-800 flex items-center gap-3">
        <span className="text-2xl">🎯</span>
        <h2 className="text-xl font-bold text-white font-mono">useRef()</h2>
      </div>
      
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
        <div className="p-8 flex flex-col justify-center space-y-8">
          
          <div className="space-y-2">
            <label className="text-xs text-slate-400 font-bold uppercase tracking-wider">A Random Input Field</label>
            <input 
              ref={inputElement} // We attach the ref here!
              type="text" 
              placeholder="I am just sitting here..." 
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-emerald-400 font-mono outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-slate-600"
            />
          </div>

          <div className="flex justify-between items-center bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
            <button
              onClick={handleJediFocus}
              className="bg-emerald-500 text-slate-950 px-5 py-2.5 rounded-lg font-bold hover:bg-emerald-400 transition-colors active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              Jedi Focus Input
            </button>
            
            <div className="text-right">
              <button 
                onClick={() => setRevealedCount(secretClickCount.current)}
                className="text-xs text-emerald-500 underline hover:text-emerald-300"
              >
                Reveal Secret Count:
              </button>
              <div className="text-xl font-bold text-white">{revealedCount}</div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-4 text-slate-300 bg-slate-950/30">
          <h3 className="text-emerald-400 font-semibold uppercase tracking-wider text-sm">How it works</h3>
          <p>
            <strong className="text-white">useRef</strong> is like a secret pocket. It does two main things:
          </p>
          <ul className="space-y-3 text-sm leading-relaxed list-disc list-inside marker:text-emerald-500">
            <li><strong>Direct DOM Access:</strong> We attached a ref to the input field. When you click the button, React reaches directly into the HTML and forces it to focus and type text, bypassing the normal state cycle.</li>
            <li><strong>Stealth Storage:</strong> It holds variables that don't trigger re-renders. Every time you click "Jedi Focus", a secret ref counter goes up. But the UI doesn't update until you click "Reveal" (which uses <code className="text-blue-400">useState</code> to force a re-render).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}