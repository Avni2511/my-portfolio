import React from 'react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';
import { Compass, Sparkles } from 'lucide-react';

export const TheJourney: React.FC = () => {
  return (
    <section id="journey" className="py-24 md:py-36 border-b border-cyan-500/15 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-cyan-500/15">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-3">
              <Sparkles size={14} className="text-cyan-400" />
              <span>INDEX / 05 • LEARNING TIMELINE</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase text-white">
              MY ENGINEERING JOURNEY
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs md:text-sm font-light text-slate-300 max-w-md text-left md:text-right font-sans">
            How I've progressed from learning core programming logic and algorithms to building real-world backend architectures and cloud systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-cyan-500/20 pl-6 sm:pl-10 lg:pl-16 space-y-16 ml-3 sm:ml-6">
          {JOURNEY_MILESTONES.map((milestone) => (
            <div key={milestone.step} className="relative group">
              {/* Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] lg:-left-[71px] top-1.5 w-3.5 h-3.5 bg-black border border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.8)] transition-all flex items-center justify-center">
                <div className="w-1 h-1 bg-cyan-300"></div>
              </div>

              {/* Card */}
              <div className="p-6 sm:p-8 border border-cyan-500/15 bg-[#06080F]/85 hover:bg-[#0A0E1A] hover:border-cyan-400/40 transition-all duration-300 relative rounded-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      MILESTONE {milestone.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                      {milestone.badge}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono uppercase text-cyan-400/70">
                    STAGE #{milestone.step}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl uppercase tracking-wide text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {milestone.stage}
                </h3>

                <p className="font-mono text-xs text-cyan-200/80 mb-4 leading-relaxed italic">
                  "{milestone.focus}"
                </p>

                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {milestone.description}
                </p>

                {/* Key Concepts */}
                <div className="pt-4 border-t border-cyan-500/10 flex flex-wrap items-center gap-2">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 mr-2">
                    KEY TOPICS:
                  </span>
                  {milestone.keyConcepts.map((concept, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-cyan-950/30 border border-cyan-500/20 text-cyan-200/90"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
