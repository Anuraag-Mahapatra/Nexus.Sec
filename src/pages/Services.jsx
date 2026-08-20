import { Link } from 'react-router-dom';

export default function Services() {
  const capabilities = [
    { 
      title: "Vulnerability Assessment", 
      desc: "Comprehensive scanning and manual auditing of your web architecture to identify structural flaws before they can be weaponized.",
      startingPrice: "$1,500",
      subServices: [
        "Automated Infrastructure Scanning", 
        "Cryptographic & TLS Reviews (OpenSSL)", 
        "OWASP Top 10 Architecture Audits"
      ]
    },
    { 
      title: "Penetration Testing", 
      desc: "Deep-dive exploitation scenarios using industry-standard frameworks to bypass perimeter defenses and measure true risk.",
      startingPrice: "$3,500",
      subServices: [
        "Advanced Web App Pentesting (Burp Suite)", 
        "API & Microservices Exploitation", 
        "Endpoint & Port Auditing (Netcat)"
      ]
    },
    { 
      title: "Network Analysis", 
      desc: "Granular packet-level inspection to identify anomalous traffic, misconfigurations, and unauthorized rogue endpoints.",
      startingPrice: "$2,500",
      subServices: [
        "Deep Packet Inspection (Wireshark)", 
        "Traffic Anomaly & Threat Detection", 
        "Firewall Rule Evasion Testing"
      ]
    },
    { 
      title: "Red Teaming", 
      desc: "Full-scope, multi-layered attack simulations designed to measure your organization's detection and response capabilities under extreme duress.",
      startingPrice: "$10,000",
      subServices: [
        "Multi-Vector Phishing & Social Engineering", 
        "Physical Breach & Bypass Simulations", 
        "Advanced Persistent Threat (APT) Emulation"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Standard Audit",
      price: "$1,500",
      billing: "per assessment",
      desc: "Baseline security validation for small applications and startups.",
      features: [
        "Automated Vulnerability Scanning",
        "OpenSSL/TLS Configuration Check",
        "OWASP Top 10 Validation",
        "High-Level Executive Report"
      ],
      highlighted: false
    },
    {
      name: "Deep Dive Pentest",
      price: "$4,500",
      billing: "per assessment",
      desc: "Rigorous manual exploitation to uncover complex, chained vulnerabilities.",
      features: [
        "Everything in Standard Audit",
        "Manual Web/API Pentesting (Burp Suite)",
        "Zero False-Positive Guarantee",
        "Detailed Remediation Guidance",
        "1 Free Retest within 30 days"
      ],
      highlighted: true
    },
    {
      name: "Full Red Team",
      price: "$10k+",
      billing: "per engagement",
      desc: "Unrestricted adversarial simulation testing your entire defensive posture.",
      features: [
        "Everything in Deep Dive",
        "Undetected Network Infiltration",
        "Wireshark/Netcat Traffic Evasion",
        "Social Engineering Campaigns",
        "Post-Exploitation Debriefing"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-16 md:py-24 animate-fade-in">
      
      {/* Header Section */}
      <div className="mb-20 max-w-3xl">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
          OPERATIONAL CAPABILITIES
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
          Tactical <span className="text-cyan-400">Services.</span>
        </h1>
        <p className="text-xl text-neutral-400 leading-relaxed">
          We deploy military-grade offensive security tactics to harden your infrastructure. Select an operational track below to view specific methodologies.
        </p>
      </div>

      {/* Capabilities Breakdown */}
      <div className="grid md:grid-cols-2 gap-8 mb-32">
        {capabilities.map((service, index) => (
          <div key={index} className="glass-panel p-8 md:p-10 rounded-2xl border border-neutral-800 hover:border-cyan-500/30 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{service.title}</h3>
              <span className="text-xs font-mono text-cyan-500 bg-cyan-950/50 px-3 py-1 rounded border border-cyan-500/20">
                Starts at {service.startingPrice}
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6">{service.desc}</p>
            
            <div className="space-y-3">
              <h4 className="text-xs font-bold tracking-widest text-neutral-500 uppercase border-b border-neutral-800 pb-2">Included Vectors:</h4>
              <ul className="space-y-2">
                {service.subServices.map((sub, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                    <svg className="w-5 h-5 text-cyan-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Tiers Section */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          Engagement <span className="text-cyan-400">Tiers.</span>
        </h2>
        <p className="text-neutral-400">Transparent pricing for comprehensive security validation.</p>
      </div>

      {/* Side-by-Side Vertical Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <div 
            key={index} 
            className={`glass-panel p-8 rounded-2xl relative flex flex-col h-full transition-transform duration-300 ${
              tier.highlighted 
                ? 'border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.15)] md:-translate-y-4 bg-[#0a0a0a]/90' 
                : 'border-neutral-800 hover:border-neutral-600'
            }`}
          >
            {/* Highlight Badge */}
            {tier.highlighted && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-black text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full">
                Most Deployed
              </div>
            )}

            <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
            <p className="text-sm text-neutral-400 mb-6 min-h-[40px]">{tier.desc}</p>
            
            <div className="mb-8 border-b border-neutral-800 pb-8">
              <span className="text-4xl font-black text-white">{tier.price}</span>
              <span className="text-neutral-500 text-sm ml-2">/{tier.billing}</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                  <svg className={`w-5 h-5 shrink-0 ${tier.highlighted ? 'text-cyan-400' : 'text-neutral-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Link 
              to="/signin" 
              className={`w-full py-4 text-center font-bold text-xs tracking-widest rounded transition-colors ${
                tier.highlighted 
                  ? 'bg-cyan-500 text-black hover:bg-cyan-400' 
                  : 'bg-transparent border border-neutral-700 text-white hover:border-cyan-500 hover:text-cyan-400'
              }`}
            >
              INITIALIZE PROTOCOL
            </Link>
          </div>
        ))}
      </div>

    </section>
  );
}