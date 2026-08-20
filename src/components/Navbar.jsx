import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  // Dynamically check if the user is authenticated by looking for their designation in local storage
  const activeUser = localStorage.getItem('nexusUser');

  // Reset menu states when the route changes
  useEffect(() => {
    setIsOpen(false);
    setTimeout(() => setIsAboutExpanded(false), 300);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Secure logout handler to wipe session data
  const handleLogout = () => {
    localStorage.removeItem('nexusUser');
    localStorage.removeItem('nexusToken');
    setIsOpen(false);
    navigate('/');
  };

  const isAboutActive = location.pathname.includes('/about-us') || 
                        location.pathname.includes('/audit-reports') || 
                        location.pathname.includes('/pentest-reports');

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-neutral-800/50">
      <nav className="flex items-center justify-between py-6 max-w-7xl mx-auto px-6 sm:px-12 w-full">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter hover:opacity-90 transition-opacity">
          NEXUS<span className="text-cyan-400">.</span>SEC
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-neutral-400 text-sm tracking-widest ml-8">
          <Link to="/" className={`transition-colors duration-200 ${location.pathname === '/' ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-400'}`}>HOME</Link>

          <div className="relative group py-4">
            <button className={`flex items-center gap-1 transition-colors duration-200 focus:outline-none ${isAboutActive ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-400'}`}>
              ABOUT
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="glass-panel bg-[#0a0a0a]/95 border border-neutral-800 rounded-lg shadow-xl overflow-hidden flex flex-col">
                <Link to="/about-us" className="px-5 py-3 hover:bg-neutral-900 hover:text-cyan-400 transition-colors border-b border-neutral-800/50">About Us</Link>
                <Link to="/audit-reports" className="px-5 py-3 hover:bg-neutral-900 hover:text-cyan-400 transition-colors border-b border-neutral-800/50">Audit Reports</Link>
                <Link to="/pentest-reports" className="px-5 py-3 hover:bg-neutral-900 hover:text-cyan-400 transition-colors">Pentest Reports</Link>
              </div>
            </div>
          </div>

          <Link to="/services" className={`transition-colors duration-200 ${location.pathname === '/services' ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-400'}`}>SERVICES</Link>
          <Link to="/pricing" className={`transition-colors duration-200 ${location.pathname === '/pricing' ? 'text-cyan-400 font-semibold' : 'hover:text-cyan-400'}`}>PRICING</Link>
        </div>

        <div className="flex-grow"></div>

        {/* Desktop Auth / Profile Area */}
        <div className="hidden md:flex items-center gap-6">
          {activeUser ? (
            <div className="flex items-center gap-6">
              {/* Profile Identifier */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-900 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-bold uppercase shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                  {activeUser.charAt(0)}
                </div>
                <span className="text-sm font-bold text-white tracking-widest uppercase">{activeUser}</span>
              </div>
              
              {/* Terminal Link */}
              <Link to="/dashboard" className="text-xs font-bold tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors">
                TERMINAL
              </Link>
              
              {/* Logout Button */}
              <button 
                onClick={handleLogout} 
                className="px-4 py-2 bg-transparent border border-red-900/50 text-red-500 font-bold text-xs tracking-widest rounded hover:bg-red-900/20 hover:border-red-500 transition-all duration-300 cursor-pointer"
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <>
              <Link to="/signin" className="text-xs font-bold tracking-widest text-neutral-400 hover:text-cyan-400 transition-colors">SIGN IN</Link>
              <Link to="/register" className="px-5 py-2.5 bg-neutral-900 border border-cyan-500/40 text-cyan-400 font-bold text-xs tracking-widest rounded hover:bg-cyan-500 hover:text-black transition-all duration-300">REGISTER</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Open Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-cyan-400 font-bold text-sm tracking-widest flex items-center gap-2 p-1 focus:outline-none">
          <span>MENU</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </nav>

      {/* --- Full-Screen Mobile Navigation Overlay --- */}
      <div className={`fixed inset-0 w-screen h-screen bg-[#0a0a0a] z-50 flex flex-col p-6 sm:p-12 transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}`}>
        
        <div className="flex items-center justify-between border-b border-neutral-800 pb-6 shrink-0">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-black tracking-tighter">
            NEXUS<span className="text-cyan-400">.</span>SEC
          </Link>
          <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-cyan-400 p-2 transition-colors focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Dynamic Nav Links Container */}
        <div className="relative flex-grow my-8 overflow-hidden">
          
          <div className={`absolute w-full flex flex-col gap-6 transition-all duration-300 ease-in-out ${isAboutExpanded ? '-translate-y-10 opacity-0 pointer-events-none invisible' : 'translate-y-0 opacity-100 visible'}`}>
            <Link to="/" onClick={() => setIsOpen(false)} className="text-3xl font-extrabold tracking-tight hover:text-cyan-400 transition-colors">HOME</Link>
            
            <button onClick={() => setIsAboutExpanded(true)} className="flex items-center justify-between text-3xl font-extrabold tracking-tight text-neutral-300 hover:text-cyan-400 transition-colors focus:outline-none text-left">
              ABOUT
              <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <Link to="/services" onClick={() => setIsOpen(false)} className="text-3xl font-extrabold tracking-tight hover:text-cyan-400 transition-colors">SERVICES</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className="text-3xl font-extrabold tracking-tight hover:text-cyan-400 transition-colors">PRICING</Link>
          </div>

          <div className={`absolute w-full flex flex-col gap-6 transition-all duration-300 ease-in-out ${isAboutExpanded ? 'translate-y-0 opacity-100 visible' : 'translate-y-10 opacity-0 pointer-events-none invisible'}`}>
            <button onClick={() => setIsAboutExpanded(false)} className="flex items-center gap-2 text-sm font-mono text-cyan-500 tracking-widest uppercase mb-4 hover:text-cyan-400 transition-colors focus:outline-none">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              BACK TO MAIN MENU
            </button>
            <Link to="/about-us" onClick={() => setIsOpen(false)} className="text-3xl font-extrabold tracking-tight text-neutral-300 hover:text-cyan-400 transition-colors">ABOUT US</Link>
            <Link to="/audit-reports" onClick={() => setIsOpen(false)} className="text-3xl font-extrabold tracking-tight text-neutral-300 hover:text-cyan-400 transition-colors">AUDIT REPORTS</Link>
            <Link to="/pentest-reports" onClick={() => setIsOpen(false)} className="text-3xl font-extrabold tracking-tight text-neutral-300 hover:text-cyan-400 transition-colors">PENTEST REPORTS</Link>
          </div>

        </div>

        {/* Mobile Auth Actions */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col gap-4 mt-auto shrink-0">
          {activeUser ? (
            <>
              <div className="flex items-center gap-4 mb-4 bg-neutral-900/50 p-4 rounded-xl border border-neutral-800">
                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-bold uppercase text-xl shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  {activeUser.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-1">Active Operator</p>
                  <p className="font-bold text-white text-lg tracking-tight">{activeUser}</p>
                </div>
              </div>
              <Link to="/dashboard" onClick={() => setIsOpen(false)} className="w-full py-4 text-center bg-cyan-500 text-black font-bold text-xs tracking-widest rounded hover:bg-cyan-400 transition-colors">OPERATOR TERMINAL</Link>
              <button onClick={handleLogout} className="w-full py-4 text-center border border-red-900/50 text-red-500 hover:bg-red-900/20 font-bold text-xs tracking-widest rounded transition-colors">LOGOUT</button>
            </>
          ) : (
            <>
              <Link to="/signin" onClick={() => setIsOpen(false)} className="w-full py-4 text-center border border-neutral-700 text-neutral-300 font-bold text-xs tracking-widest rounded hover:border-neutral-500 transition-colors">SIGN IN</Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="w-full py-4 text-center bg-cyan-500 text-black font-bold text-xs tracking-widest rounded hover:bg-cyan-400 transition-colors">REGISTER</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}