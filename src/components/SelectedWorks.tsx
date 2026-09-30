import React from 'react';
import { SELECTED_WORKS } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

interface SelectedWorksProps {
  onSelectWork: (work: CaseStudy) => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectWork }) => {
  return (
    <section id="projects" className="py-24 md:py-36 border-b border-cyan-500/15 relative cosmic-grid-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cyan-500/15">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-3">
              <FolderGit2 size={14} className="text-cyan-400" />
              <span>INDEX / 02 • PORTFOLIO</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase text-white">
              FEATURED PROJECTS
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs md:text-sm font-light text-slate-300 max-w-md text-left md:text-right font-sans">
            Backend systems, APIs, database architectures, and automated cloud infrastructure projects I've engineered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {SELECTED_WORKS.map((work) => (
            <div
              key={work.id}
              onClick={() => onSelectWork(work)}
              className="group cursor-pointer p-6 sm:p-10 border border-cyan-500/15 bg-[#06080F]/90 hover:bg-[#0A0E1A] hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(0,240,255,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              {/* Corner crosshairs on hover */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-transparent group-hover:border-cyan-400 transition-colors"></div>
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-transparent group-hover:border-cyan-400 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-transparent group-hover:border-cyan-400 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-transparent group-hover:border-cyan-400 transition-colors"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Left Metadata Column */}
                <div className="lg:col-span-3 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tracking-widest text-cyan-400">
                      {work.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500">
                      / {work.year}
                    </span>
                  </div>

                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-cyan-200/90 px-2.5 py-0.5 border border-cyan-500/20 bg-cyan-950/30">
                    {work.category}
                  </span>

                  <div className="pt-2 hidden lg:block">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 block">ARCHITECTURE</span>
                    <span className="text-[11px] font-mono text-slate-300">
                      {work.architecture.nodes.length} System Components
                    </span>
                  </div>
                </div>

                {/* Center Description Column */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                    {work.title}
                  </h3>

                  <p className="font-light text-sm sm:text-base text-slate-300 leading-relaxed italic">
                    "{work.tagline}"
                  </p>

                  {/* Materials / Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {work.materials.flatMap(m => m.items).slice(0, 6).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-black/50 border border-cyan-500/15 text-slate-300 group-hover:border-cyan-400/30 group-hover:text-cyan-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action & Status Column */}
                <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-end justify-between h-full gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    <span>COMPLETED & TESTED</span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all text-xs font-mono uppercase tracking-widest text-cyan-300">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
