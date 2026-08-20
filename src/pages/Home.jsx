import { useState } from 'react';
import { Link } from 'react-router-dom';
// Import the local image asset directly
import worldMapImage from '../assets/World_Map.png'; 

export default function Home() {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Simplified nodes with logical placement percentages over the static image
  const nodes = [
    { id: 1, city: "San Francisco", region: "US-WEST", position: { left: "15%", top: "37%" }, status: "Active", blocked: "1.2M" },
    { id: 2, city: "New York", region: "US-EAST", position: { left: "26%", top: "32%" }, status: "Active", blocked: "980K" },
    { id: 3, city: "London", region: "EU-WEST", position: { left: "47%", top: "22%" }, status: "Active", blocked: "2.1M" },
    { id: 4, city: "Bhubaneswar", region: "AP-SOUTH", position: { left: "68%", top: "45%" }, status: "Command Center", blocked: "3.4M" },
    { id: 5, city: "Singapore", region: "AP-SE", position: { left: "75%", top: "54%" }, status: "Active", blocked: "1.5M" },
    { id: 6, city: "Tokyo", region: "AP-NE", position: { left: "86%", top: "32%" }, status: "Active", blocked: "2.8M" },
    { id: 7, city: "Sydney", region: "OC-EAST", position: { left: "88%", top: "70%" }, status: "Active", blocked: "650K" }
  ];

  const activeNodeData = nodes.find(n => n.id === hoveredNode);

  return (
    <div className="flex flex-col gap-24 pb-24">
      
      {/* Hero Section */}
      <section className="flex flex-col items-start justify-center min-h-[80vh] animate-fade-in pt-12">
        <div className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
          SECURE YOUR INFRASTRUCTURE
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Proactive Defense. <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Absolute Control.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
          We simulate sophisticated cyber attacks to expose vulnerabilities before malicious actors do. Hardening your digital assets through advanced red teaming and network analysis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
          <Link to="/services" className="px-8 py-4 bg-cyan-500 text-black font-bold text-sm tracking-widest text-center rounded hover:bg-cyan-400 transition-all duration-300">
            EXPLORE SERVICES
          </Link>
          <Link to="/about" className="px-8 py-4 bg-transparent border border-neutral-700 text-neutral-300 font-bold text-sm tracking-widest text-center rounded hover:border-neutral-400 transition-colors duration-300">
            OUR METHODOLOGY
          </Link>
        </div>
      </section>

      {/* Simplified Global Use locations Map Section */}
      <section className="animate-fade-in">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Global Use <span className="text-cyan-400">Telemetry.</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl">
            Our defensive infrastructure has a worldwide footprint. Hover over our prime operational nodes to view live telemetry and threat mitigation stats.
          </p>
        </div>

        {/* Map Container - Aspect ratio matched to image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] glass-panel rounded-2xl overflow-hidden bg-[#050505] border border-neutral-800 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          
          {/* Using the imported local image */}
          <img 
            src={worldMapImage} 
            alt="Nexus Security Global Map" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none mix-blend-screen"
            loading="lazy"
          />

          {/* Render Animated Nodes over the image */}
          {nodes.map((node) => (
            <div 
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
              style={node.position}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Outer pulsing ring with group hover effect */}
              <div className={`absolute w-10 h-10 -m-5 rounded-full opacity-40 animate-ping group-hover:scale-125 transition-transform duration-500 ${node.status === 'Command Center' ? 'bg-blue-500' : 'bg-cyan-400'}`}></div>
              
              {/* Central solid dot with shadow and highlight */}
              <div className={`relative w-2.5 h-2.5 rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-300 border border-white/20 shadow-[0_0_15px_currentColor] ${node.status === 'Command Center' ? 'bg-blue-300 text-blue-500' : 'bg-cyan-200 text-cyan-400'}`}></div>
            </div>
          ))}

          {/* Heads Up Display (HUD) - Robust conditional render */}
          <div className={`absolute bottom-6 left-6 md:bottom-8 md:left-8 w-64 glass-panel bg-[#0a0a0a]/95 p-5 rounded-lg border border-neutral-700 shadow-2xl transition-all duration-300 pointer-events-none ${
            activeNodeData ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {activeNodeData && (
              <>
                <div className="flex items-center gap-3 mb-3 border-b border-neutral-800 pb-3">
                  <div className={`w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${activeNodeData.status === 'Command Center' ? 'bg-blue-500 text-blue-500' : 'bg-cyan-400 text-cyan-400'}`}></div>
                  <span className="text-sm font-black text-white tracking-widest uppercase">{activeNodeData.city}</span>
                </div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-neutral-500">Region:</span>
                  <span className="text-neutral-300 font-mono tracking-wider">{activeNodeData.region}</span>
                </div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-neutral-500">Status:</span>
                  <span className={activeNodeData.status === 'Command Center' ? 'text-blue-400 font-bold' : 'text-cyan-400 font-bold'}>{activeNodeData.status}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-500">Threats Blocked:</span>
                  <span className="text-white font-mono font-bold">{activeNodeData.blocked}</span>
                </div>
              </>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}