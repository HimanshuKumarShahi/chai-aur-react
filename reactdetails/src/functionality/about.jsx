import React from 'react';
import Counter from '../components/counter'

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-slate-50 font-sans selection:bg-indigo-500/30 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            About Lumina
            {/* Rendered with capital C */}
            <Counter />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
            Building the engine for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              modern development.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
            We started with a simple belief: developers shouldn't have to choose between speed and reliability. 
            Lumina is the open-source infrastructure designed for the next generation of the web.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 py-12 border-y border-white/10 mb-24">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">99.99%</p>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Uptime SLA</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">40ms</p>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Global Latency</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">12M+</p>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Deployments</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">100%</p>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Open Source</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Our Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-colors duration-300 group">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Developer First</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Every API, every CLI command, and every dashboard interaction is obsessively designed to stay out of your way and let you code.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-colors duration-300 group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Secure by Default</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Enterprise-grade security shouldn't be an add-on. Identity, encryption, and zero-trust routing are baked into the core engine.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-colors duration-300 group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Edge Performance</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Your code deployed milliseconds away from your users. We push computation to the absolute edge of the network.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-64 md:h-96 bg-white/[0.02] border border-white/10 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden mb-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)]"></div>
          <h3 className="text-2xl font-semibold z-10 mb-4">Backed by a global community.</h3>
          <p className="text-slate-400 z-10 mb-8 max-w-lg text-center">Join thousands of contributors pushing the boundaries of what's possible.</p>
          <button className="z-10 bg-white text-black hover:bg-slate-200 px-6 py-3 rounded-full font-semibold transition-colors">
            View GitHub Repository
          </button>
        </div>
      </div>
    </div>
  );
}