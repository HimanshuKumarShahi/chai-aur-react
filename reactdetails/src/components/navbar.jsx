import React from 'react'

export default function navbar() {
  return (
    <>
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 border-b border-slate-200/50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
     
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-2.5 group">
          
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center transform -rotate-6 transition-transform duration-300 group-hover:rotate-0 shadow-sm">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              Lumina<span className="text-slate-400">.</span>
            </span>
          </div>

          
          <div className="hidden md:flex items-center gap-1 bg-slate-100/60 p-1 rounded-full border border-slate-200/60 shadow-inner">
            <a href="" className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all duration-300">
              Product's
            </a>
         
            <a href="#" className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-900 bg-white shadow-sm transition-all duration-300">
              Collections
            </a>
            <a href="#" className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all duration-300">
              About
            </a>
            <a href="#" className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all duration-300">
              Journal
            </a>
          </div>

         
          <div className="flex items-center gap-3 sm:gap-5">
            
          
            <div className="hidden sm:flex items-center gap-2">
           
              <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors duration-200 rounded-full hover:bg-slate-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              
              <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors duration-200 rounded-full hover:bg-slate-100 relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
              </button>
            </div>
        
            <button className="hidden sm:block px-6 py-2.5 bg-slate-900 text-white text-sm font-bold tracking-wide rounded-full hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 active:scale-95 transition-all duration-300">
              Sign In
            </button>

        
            <button className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
    </>
  )
}
