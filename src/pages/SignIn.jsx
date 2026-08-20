import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Connection refused.');
      }

      localStorage.setItem('nexusToken', data.token);
      localStorage.setItem('nexusUser', data.designation);
      
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] animate-fade-in">
      <div className="w-full max-w-md glass-panel p-8 md:p-10 rounded-2xl border-t-4 border-t-cyan-500 shadow-2xl relative overflow-hidden">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-[50px] pointer-events-none"></div>

        <div className="text-center mb-10 relative z-10">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-white">
            Access <span className="text-cyan-400">Terminal.</span>
          </h1>
          <p className="text-neutral-400 text-sm">Enter your credentials to proceed.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 border border-red-900/50 bg-red-900/20 rounded text-red-400 text-xs font-bold tracking-widest uppercase text-center relative z-10">
            [ACCESS DENIED] {error}
          </div>
        )}

        <form className="flex flex-col gap-5 relative z-10" onSubmit={handleSignIn}>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Operator Email</label>
            <input 
              type="email" 
              placeholder="operator@nexus.sec"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-lg px-4 py-3 text-neutral-100 placeholder:text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Passphrase</label>
              <a href="#!" className="text-xs text-cyan-500 hover:text-cyan-400 transition-colors">Forgot?</a>
            </div>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-lg px-4 py-3 pr-12 text-neutral-100 placeholder:text-neutral-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-cyan-400 transition-colors focus:outline-none"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className={`mt-4 w-full py-3.5 text-black font-bold text-sm tracking-widest rounded transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] ${
              isLoading ? 'bg-cyan-800 text-white cursor-not-allowed opacity-70' : 'bg-cyan-500 hover:bg-cyan-400 hover:-translate-y-0.5'
            }`}
          >
            {isLoading ? 'AUTHENTICATING...' : 'INITIALIZE CONNECTION'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-neutral-500 relative z-10">
          Not an authorized operator?{' '}
          <Link to="/register" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
            Request Access
          </Link>
        </p>
      </div>
    </section>
  );
}