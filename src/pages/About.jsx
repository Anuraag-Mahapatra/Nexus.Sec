import { Link } from 'react-router-dom';

export default function About() {
  const principles = [
    { 
      num: "01", 
      title: "Adversary Simulation", 
      desc: "We don't just scan for vulnerabilities. We engineer complete attack paths, mirroring the techniques of sophisticated threat actors to find your weakest links." 
    },
    { 
      num: "02", 
      title: "Human Validation", 
      desc: "Automated tools only go so far. Our highly vetted human operators manually validate every finding, eliminating false positives and delivering actionable intelligence." 
    },
    { 
      num: "03", 
      title: "Defend Forward", 
      desc: "Waiting for a breach is not an option. We believe in proactive defense—subjecting your networks to real-world attacks to secure them before malicious actors strike." 
    }
  ];

  const stats = [
    { label: "Vulnerabilities Patched", value: "10K+" },
    { label: "Global Tech Clients", value: "50+" },
    { label: "Years Experience", value: "15+" },
    { label: "Zero-Day Exploits", value: "24" }
  ];

  return (
    <section className="py-16 md:py-24 animate-fade-in">
      {/* Hero Section */}
      <div className="mb-20 max-w-3xl">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
          WHO WE ARE
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          We think like <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            attackers.
          </span>
        </h1>
        <p className="text-xl text-neutral-400 leading-relaxed">
          Founded by elite cybersecurity operators, Nexus Security fuses offensive security expertise with military-grade discipline. We don't just simulate attacks—we expose vulnerabilities, harden environments, and build resilience where it matters most.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-panel p-6 md:p-8 rounded-xl flex flex-col justify-center items-center text-center hover:border-cyan-400/30 transition-colors">
            <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
            <div className="text-xs text-neutral-500 font-bold tracking-widest uppercase">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Methodology Section */}
      <div className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight border-b border-neutral-800 pb-6">
          Our <span className="text-cyan-400">Philosophy.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {principles.map((item, idx) => (
            <div key={idx} className="flex flex-col group">
              <span className="text-5xl md:text-6xl font-black text-neutral-800 mb-6 group-hover:text-cyan-400/40 transition-colors duration-500">
                {item.num}
              </span>
              <h3 className="text-xl font-bold mb-4 text-neutral-100">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Container */}
      <div className="glass-panel p-10 md:p-16 rounded-2xl border-cyan-500/20 text-center relative overflow-hidden">
        {/* Decorative Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
          Ready to secure your perimeter?
        </h2>
        <p className="text-neutral-400 mb-10 max-w-2xl mx-auto text-lg">
          Engage our red team to uncover your exposures before they are exploited. Actionable intelligence delivered in days, not months.
        </p>
        <Link 
          to="/services" 
          className="inline-block px-8 py-4 bg-cyan-500 text-black font-bold text-sm tracking-widest rounded hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
        >
          VIEW OUR CAPABILITIES
        </Link>
      </div>
    </section>
  );
}