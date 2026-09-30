import React from 'react';
import { CRAFT_STAGES } from '../data/portfolioData';
import { ArrowDown, CheckCircle2, Code2, Wrench } from 'lucide-react';

export const TheCraft: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-36 border-b border-cyan-500/15 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-cyan-500/15">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-3">
              <Wrench size={14} className="text-cyan-400" />
              <span>INDEX / 03 • DEVELOPMENT PROCESS</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase text-white">
              HOW I BUILD SOFTWARE
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs md:text-sm font-light text-slate-300 max-w-md text-left md:text-right font-sans">
            A structured 7-step development workflow turning complex requirements into secure, high-performance backend systems.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Laser connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent -translate-y-1/2 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-5 relative z-10">
            {CRAFT_STAGES.map((stage, idx) => (
              <div
                key={stage.number}
                className="p-5 border border-cyan-500/15 bg-[#070912]/90 hover:bg-[#0C101F] hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group relative rounded-sm"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="font-bold text-cyan-400 tracking-widest">
                      STEP {stage.number}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-slate-500">
                      PHASE
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl uppercase tracking-wider text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {stage.name}
                  </h3>

                  <span className="block text-[10px] font-mono text-cyan-300/70 mb-3 italic">
                    {stage.subtitle}
                  </span>

                  <p className="text-xs font-sans text-slate-300 leading-relaxed font-light mb-6">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-cyan-500/10 space-y-1.5">
                  <span className="block text-[8px] font-mono uppercase tracking-widest text-slate-500 mb-1">
                    KEY DELIVERABLES
                  </span>
                  {stage.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="text-[10px] font-mono text-cyan-200/90 flex items-start gap-1.5 leading-snug">
                      <span className="w-1 h-1 bg-cyan-400 shrink-0 rounded-full mt-1.5"></span>
                      <span className="break-words">{item}</span>
                    </div>
                  ))}
                </div>

                {idx < CRAFT_STAGES.length - 1 && (
                  <div className="lg:hidden flex justify-center pt-4 text-slate-600">
                    <ArrowDown size={14} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Principle Banner */}
        <div className="mt-16 p-6 sm:p-8 border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-sm">
          <div className="space-y-1">
            <span className="text-[9px] font-mono uppercase tracking-widest text-cyan-400">
              CORE ENGINEERING PRINCIPLE
            </span>
            <p className="font-serif text-lg sm:text-xl text-white italic">
              "Good software systems are designed carefully before writing code, tested thoroughly under load, and continuously optimized."
            </p>
          </div>
          <div className="text-[10px] font-mono text-cyan-300/60 shrink-0">
            [ BACKEND PHILOSOPHY ]
          </div>
        </div>
      </div>
    </section>
  );
};
