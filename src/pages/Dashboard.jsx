// src/pages/Dashboard.jsx
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <section className="py-12 animate-fade-in max-w-6xl mx-auto w-full">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-800 pb-8">
        <div>
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
            CONNECTION SECURE
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Operator <span className="text-cyan-400">Terminal.</span>
          </h1>
        </div>
        <div className="text-right">
          <p className="text-sm font-mono text-neutral-500">ID: NEX-8924-XX</p>
          <p className="text-sm font-bold text-neutral-300 uppercase tracking-widest">Clearance: Level 1</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Active Engagements */}
        <div className="md:col-span-2 glass-panel p-8 rounded-2xl border border-neutral-800 flex flex-col">
          <h2 className="text-lg font-bold text-white mb-6 tracking-widest uppercase flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            Active Engagements
          </h2>
          
          <div className="flex-grow flex items-center justify-center border-2 border-dashed border-neutral-800 rounded-xl p-8 bg-neutral-900/50">
            <div className="text-center">
              <svg className="w-12 h-12 text-neutral-700 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-neutral-500 font-medium">No active operations detected.</p>
              <Link to="/services" className="inline-block mt-4 text-xs font-bold tracking-widest text-cyan-500 hover:text-cyan-400 transition-colors uppercase">
                Initialize New Audit &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* File Upload / Action Center */}
        <div className="glass-panel p-8 rounded-2xl border border-neutral-800 flex flex-col gap-6">
          <h2 className="text-lg font-bold text-white tracking-widest uppercase border-b border-neutral-800 pb-4">
            Action Center
          </h2>
          
          <button className="w-full py-4 bg-neutral-900 border border-neutral-700 hover:border-cyan-500 text-white font-bold text-xs tracking-widest rounded transition-all group flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-cyan-500 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            UPLOAD SCOPE OF WORK
          </button>
          
          <div className="bg-[#0a0a0a] p-4 rounded-lg border border-neutral-800">
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">Recent Reports</h3>
            <p className="text-sm text-neutral-600 italic">No decrypted files available.</p>
          </div>
        </div>
      </div>
    </section>
  );
}