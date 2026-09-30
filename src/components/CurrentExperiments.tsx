import React from 'react';
import { CURRENT_EXPERIMENTS } from '../data/portfolioData';
import { Sparkles, Brain, Cpu, Network } from 'lucide-react';

export const CurrentExperiments: React.FC = () => {
  const exp = CURRENT_EXPERIMENTS[0];

  return (
    <section id="ai" className="py-24 md:py-36 border-b border-cyan-500/15 cosmic-radar-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cyan-500/15">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-3">
              <Brain size={14} className="text-cyan-400" />
              <span>INDEX / 07 • CURRENT FOCUS</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase text-white">
              EXPLORING: AI & BACKEND
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 bg-cyan-950/40 border border-cyan-400/40 text-cyan-300 text-xs font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.15)] rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>STATUS: ACTIVE EXPLORATION</span>
          </div>
        </div>

        {/* Experiment Feature Card */}
        <div className="p-8 sm:p-12 border border-cyan-500/20 bg-[#06080F]/90 backdrop-blur-md relative overflow-hidden shadow-[0_0_35px_rgba(0,240,255,0.08)] rounded-sm">
          {/* Top Label Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-cyan-500/15 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-editorial text-3xl sm:text-4xl text-white uppercase">
                {exp.title}
              </span>
            </div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              LEARNING & EXPERIMENTATION
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Description Column */}
            <div className="lg:col-span-5 space-y-6">
              <p className="font-serif text-xl sm:text-2xl text-cyan-100/90 italic leading-relaxed">
                "{exp.description}"
              </p>

              <div className="p-4 border border-cyan-500/15 bg-black/40 space-y-2 rounded-sm">
                <span className="text-[9px] font-mono uppercase tracking-widest text-cyan-400 block">
                  EXPLORATION GOAL
                </span>
                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  {exp.note}
                </p>
              </div>
            </div>

            {/* Right Focus Areas Grid */}
            <div className="lg:col-span-7 space-y-4">
              <span className="block text-[9px] font-mono uppercase tracking-widest text-slate-500">
                ACTIVE LEARNING TOPICS
              </span>

              <div className="space-y-4">
                {exp.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-5 border border-cyan-500/15 bg-black/40 hover:border-cyan-400/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-sm"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-cyan-400">0{idx + 1} //</span>
                        <h4 className="font-mono text-sm font-semibold text-white">
                          {area.name}
                        </h4>
                      </div>
                      <p className="text-xs font-sans text-slate-300 max-w-lg">
                        {area.detail}
                      </p>
                    </div>

                    <span className="self-start sm:self-center px-2.5 py-0.5 text-[9px] font-mono uppercase border border-cyan-500/20 text-cyan-300 bg-cyan-950/30 rounded-sm">
                      LEARNING
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
