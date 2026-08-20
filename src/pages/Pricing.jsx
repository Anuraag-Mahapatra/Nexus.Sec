import { Link } from 'react-router-dom';

export default function Pricing() {
  const subscriptions = [
    {
      name: "MONTHLY",
      subtitle: "Tactical Base",
      price: "$2,500",
      billing: "/ month",
      highlighted: false,
      features: [
        { name: "Continuous Automated Scanning", included: true },
        { name: "Monthly Vulnerability Reports", included: true },
        { name: "Basic Web App Pentesting", included: true },
        { name: "Dedicated Slack Channel", included: false },
        { name: "Quarterly Red Team Simulation", included: false },
        { name: "Zero-Day Exploit Alerts", included: false },
      ]
    },
    {
      name: "QUARTERLY",
      subtitle: "Strategic Operations",
      price: "$6,500",
      billing: "/ quarter",
      highlighted: true,
      features: [
        { name: "Continuous Automated Scanning", included: true },
        { name: "Monthly Vulnerability Reports", included: true },
        { name: "Advanced API & Web Pentesting", included: true },
        { name: "Dedicated Slack Channel", included: true },
        { name: "Quarterly Red Team Simulation", included: false },
        { name: "Zero-Day Exploit Alerts", included: false },
      ]
    },
    {
      name: "ANNUALLY",
      subtitle: "Persistent Emulation",
      price: "$22,000",
      billing: "/ year",
      highlighted: false,
      features: [
        { name: "Continuous Automated Scanning", included: true },
        { name: "Monthly Vulnerability Reports", included: true },
        { name: "Advanced API & Web Pentesting", included: true },
        { name: "Dedicated Slack Channel", included: true },
        { name: "Quarterly Red Team Simulation", included: true },
        { name: "Zero-Day Exploit Alerts", included: true },
      ]
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-[85vh] py-12 animate-fade-in">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
          Active <span className="text-cyan-400">Retainers.</span>
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
          Continuous offensive security operations. Secure your perimeter year-round.
        </p>
      </div>

      {/* Full-Height Vertical Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl items-stretch flex-grow">
        {subscriptions.map((sub, index) => (
          <div 
            key={index} 
            className={`glass-panel p-8 md:p-10 flex flex-col rounded-2xl relative transition-transform duration-300 ${
              sub.highlighted 
                ? 'border-cyan-500 shadow-[0_0_40px_rgba(34,211,238,0.15)] bg-[#0a0a0a]/90 scale-100 md:scale-105 z-10' 
                : 'border-neutral-800 hover:border-neutral-600 z-0'
            }`}
          >
            {/* Highlighted Badge */}
            {sub.highlighted && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-black text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                Most Efficient
              </div>
            )}

            {/* Top Section: Pricing */}
            <div className="text-center border-b border-neutral-800 pb-8 mb-8">
              <h2 className="text-sm font-bold tracking-widest text-neutral-500 mb-2">{sub.name}</h2>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-5xl font-black text-white tracking-tighter">{sub.price}</span>
                <span className="text-neutral-500 mb-2 font-mono text-sm">{sub.billing}</span>
              </div>
              <p className="text-sm text-cyan-400 font-bold tracking-widest uppercase">{sub.subtitle}</p>
            </div>

            {/* Middle Section: Features List with Ticks and Crosses */}
            <ul className="flex-grow flex flex-col gap-5 mb-10">
              {sub.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 text-sm">
                  {feature.included ? (
                    // Cyan Checkmark
                    <div className="bg-cyan-500/10 p-1 rounded-full shrink-0">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    // Neutral/Red Cross
                    <div className="bg-neutral-800/50 p-1 rounded-full shrink-0">
                      <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  )}
                  <span className={`${feature.included ? 'text-neutral-200' : 'text-neutral-600 line-through decoration-neutral-800'}`}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bottom Section: Call to Action */}
            <Link 
              to="/register" 
              className={`w-full py-4 text-center font-bold text-xs tracking-widest rounded transition-colors mt-auto ${
                sub.highlighted 
                  ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]' 
                  : 'bg-transparent border border-neutral-700 text-white hover:border-cyan-500 hover:text-cyan-400'
              }`}
            >
              SUBSCRIBE PROTOCOL
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}