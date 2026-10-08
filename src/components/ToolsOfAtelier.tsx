import React from 'react';
import { TOOLS_OF_ATELIER } from '../data/portfolioData';
import { Cpu, Layers, Terminal, Zap } from 'lucide-react';

export const ToolsOfAtelier: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-36 border-b border-cyan-500/15 cosmic-grid-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-cyan-500/15">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-3">
              <Zap size={14} className="text-cyan-400" />
              <span>INDEX / 03 • TECHNOLOGIES & TOOLS</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase text-white">
              SKILLS & TECH STACK
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs md:text-sm font-light text-slate-300 max-w-md text-left md:text-right font-sans">
            Programming languages, backend frameworks, databases, and cloud tools I work with to build scalable applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS_OF_ATELIER.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 border border-cyan-500/15 bg-[#06080F]/90 flex flex-col justify-between relative group hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.08)] transition-all duration-300 rounded-sm"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-cyan-500/10 mb-6">
                  <span className="text-[9px] font-mono tracking-widest text-cyan-400/80 uppercase">
                    CATEGORY 0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></span>
                </div>

                <h3 className="font-editorial text-2xl uppercase tracking-wider text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {category.title}
                </h3>

                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-6">
                  {category.subtitle}
                </p>

                {/* Items */}
                <div className="space-y-3">
                  {category.items.map((item, itemIdx) => {
                    const isPrimary = item.level === 'primary';
                    return (
                      <div
                        key={itemIdx}
                        className={`p-3 border transition-all flex items-center justify-between ${
                          isPrimary
                            ? 'bg-cyan-950/30 border-cyan-500/25 text-white'
                            : 'bg-transparent border-white/5 text-slate-300'
                        } hover:border-cyan-400/60`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isPrimary ? 'bg-cyan-400 shadow-[0_0_8px_rgba(0,240,255,0.8)]' : 'bg-slate-600'
                            }`}
                          ></span>
                          <span
                            className={`font-mono tracking-wide ${
                              isPrimary ? 'text-sm font-semibold text-white' : 'text-xs font-normal text-slate-300'
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>

                        {item.note && (
                          <span className="text-[9px] font-mono text-cyan-400/70 uppercase tracking-wider">
                            {item.note}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-8 pt-4 border-t border-cyan-500/10 flex items-center justify-between text-[9px] font-mono text-slate-500">
                <span>PROFICIENCY: PRODUCTION</span>
                <span className="text-cyan-400">ACTIVE STACK</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
