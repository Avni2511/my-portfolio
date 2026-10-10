import React from 'react';
import { SELECTED_WORKS } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

interface SelectedWorksProps {
  onSelectWork: (work: CaseStudy) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectWork }) => {
  return (
    <section id="projects" className="py-20 md:py-32 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-2">
              <FolderGit2 size={14} />
              <span>PORTFOLIO & SYSTEM WORKS</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight uppercase text-white">
              FEATURED PROJECTS
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm font-light text-slate-300 max-w-md text-left md:text-right">
            Backend systems, APIs, database architectures, and automated cloud infrastructure engineered for production.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {SELECTED_WORKS.map((work) => (
            <div
              key={work.id}
              onClick={() => onSelectWork(work)}
              className="group cursor-pointer p-7 sm:p-9 rounded-2xl border border-white/10 bg-[#070912]/80 hover:bg-[#0B0F1C] hover:border-cyan-500/40 transition-all duration-300 relative shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Main Content Column */}
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="text-cyan-400 font-semibold">{work.number}</span>
                    <span className="text-slate-500">•</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-[11px]">
                      {work.category}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{work.year}</span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl uppercase tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                    {work.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                    {work.tagline}
                  </p>

                  {/* Materials / Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {work.materials.flatMap(m => m.items).slice(0, 6).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.03] border border-white/10 text-slate-300 group-hover:border-cyan-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action Column */}
                <div className="lg:col-span-4 flex lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-cyan-400/30 bg-cyan-950/20 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 transition-all text-xs font-mono font-medium tracking-wider">
                    <span>VIEW ARCHITECTURE</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
