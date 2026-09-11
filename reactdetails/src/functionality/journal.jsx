import React, { useState } from 'react';

// --- Inline SVG Icons ---
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14m-7-7h14" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const SaveIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
  </svg>
);

// --- Mock Data ---
const initialEntries = [
  { id: 1, title: 'Product Launch Reflections', snippet: 'The launch went better than expected, but we need to address...', date: '2026-09-11' },
  { id: 2, title: 'Q4 Strategy Ideas', snippet: 'Focusing on user retention rather than acquisition might be...', date: '2026-09-10' },
  { id: 3, title: 'Morning Pages', snippet: 'Woke up feeling refreshed. Need to pick up coffee beans and...', date: '2026-09-08' },
];

export default function Journal() {
  const [activeEntry, setActiveEntry] = useState(initialEntries[0]);
  const [search, setSearch] = useState('');

  return (
    <div className="flex h-screen w-full bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-200">
      
      {/* Sidebar - Left Pane */}
      <aside className="w-80 flex-shrink-0 border-r border-zinc-200 bg-zinc-50/50 backdrop-blur-xl flex flex-col">
        <div className="p-5 border-b border-zinc-200">
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-sm font-semibold tracking-wide text-zinc-800 uppercase">Journal</h1>
            <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-200 transition-colors text-zinc-600">
              <PlusIcon />
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
              <SearchIcon />
            </div>
            <input 
              type="text" 
              placeholder="Search entries..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-100 border border-transparent rounded-lg py-2 pl-9 pr-4 text-sm text-zinc-700 placeholder-zinc-400 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {initialEntries.map((entry) => (
            <button
              key={entry.id}
              onClick={() => setActiveEntry(entry)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                activeEntry.id === entry.id 
                  ? 'bg-white shadow-sm border border-zinc-200 ring-1 ring-black/5' 
                  : 'hover:bg-zinc-100 border border-transparent'
              }`}
            >
              <h3 className="font-medium text-sm text-zinc-900 truncate mb-1">{entry.title}</h3>
              <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed mb-2">
                {entry.snippet}
              </p>
              <div className="flex items-center gap-1.5 text-[10px] font-medium text-zinc-400 uppercase tracking-wider">
                <CalendarIcon />
                {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Editor - Right Pane */}
      <main className="flex-1 flex flex-col bg-white">
        <header className="h-16 border-b border-zinc-100 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <CalendarIcon />
            <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          
          <button className="flex items-center gap-2 text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors shadow-sm">
            <SaveIcon />
            Save Entry
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-8 py-12 h-full flex flex-col">
            <input 
              type="text" 
              defaultValue={activeEntry.title}
              placeholder="Entry Title"
              className="text-4xl font-bold text-zinc-900 placeholder-zinc-300 border-none outline-none bg-transparent mb-6 focus:ring-0 w-full"
            />
            <textarea 
              defaultValue={activeEntry.snippet}
              placeholder="Start writing..."
              className="flex-1 w-full resize-none border-none outline-none bg-transparent text-lg text-zinc-700 placeholder-zinc-300 leading-relaxed font-serif focus:ring-0"
            />
          </div>
        </div>
      </main>
    </div>
  );
}