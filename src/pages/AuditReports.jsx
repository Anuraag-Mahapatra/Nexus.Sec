export default function AuditReports() {
  const reports = [
    {
      title: "Foundation Web Architecture & UX Audit",
      date: "August 2026",
      tags: ["UX/UI", "Architecture", "Non-Profit"],
      glimpse: "A comprehensive user experience and architectural audit conducted for a major philanthropic foundation's primary website. The analysis identified structural friction points in the donation pipeline and delivered actionable remediation strategies to enhance accessibility, modernize the frontend layout, and secure underlying data transactions.",
      pdfSize: "4.2 MB"
    },
    {
      title: "Corporate Executive Summary & Annotation Deck",
      date: "July 2026",
      tags: ["Executive Summary", "Figma", "Visual Audit"],
      glimpse: "A highly visual, C-suite facing executive summary. This report bypasses dense technical jargon, utilizing customized Figma-designed annotation cards and layout diagrams to illustrate critical vulnerabilities in the client's public-facing interfaces, ensuring stakeholders understand the immediate business risks.",
      pdfSize: "8.5 MB"
    },
    {
      title: "SaaS Platform Frontend Code Review",
      date: "June 2026",
      tags: ["Code Review", "React.js", "Performance"],
      glimpse: "An in-depth structural review of a multi-page React.js and Tailwind CSS application. The audit focused on identifying performance bottlenecks, redundant state rendering, and improper handling of client-side authentication tokens. Includes refactoring recommendations for improved resilience.",
      pdfSize: "3.1 MB"
    }
  ];

  return (
    <section className="py-16 md:py-24 animate-fade-in max-w-4xl mx-auto">
      <div className="mb-16">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
          CASE STUDIES
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
          Audit <span className="text-cyan-400">Reports.</span>
        </h1>
        <p className="text-xl text-neutral-400 leading-relaxed">
          Review our sanitized architectural and UX audits. We bridge the gap between technical flaws and executive understanding.
        </p>
      </div>

      <div className="space-y-10">
        {reports.map((report, idx) => (
          <div key={idx} className="glass-panel p-8 md:p-10 rounded-2xl border border-neutral-800 hover:border-cyan-500/30 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <h2 className="text-2xl font-bold text-white">{report.title}</h2>
              <span className="text-sm font-mono text-neutral-500">{report.date}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {report.tags.map(tag => (
                <span key={tag} className="text-xs font-bold tracking-widest text-cyan-500 bg-cyan-950/30 px-3 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-neutral-400 leading-relaxed mb-8 border-l-2 border-neutral-800 pl-6">
              {report.glimpse}
            </p>

            <button className="flex items-center gap-3 px-6 py-3 bg-neutral-900 border border-neutral-700 hover:border-cyan-500 text-white font-bold text-sm tracking-widest rounded transition-all group">
              <svg className="w-5 h-5 text-cyan-400 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              DOWNLOAD FULL REPORT <span className="text-neutral-500 font-mono font-normal">({report.pdfSize})</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}