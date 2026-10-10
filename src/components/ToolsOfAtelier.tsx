import React from 'react';
import { TOOLS_OF_ATELIER } from '../data/portfolioData';
import { Cpu, Layers, Terminal, Zap, CheckCircle2 } from 'lucide-react';

export const ToolsOfAtelier: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-2">
              <Zap size={14} />
              <span>SKILLS & ARCHITECTURE</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight uppercase text-white">
              TECH STACK & TOOLS
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm font-light text-slate-300 max-w-md text-left md:text-right">
            Backend engineering, relational databases, cloud infrastructure, asynchronous architectures, and AI/RAG integration systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TOOLS_OF_ATELIER.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#070912]/80 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div>
                <h3 className="text-base font-semibold tracking-wide text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  {category.subtitle}
                </p>

                {/* Items as clean pills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((item, itemIdx) => {
                    const isPrimary = item.level === 'primary';
                    return (
                      <div
                        key={itemIdx}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors ${
                          isPrimary
                            ? 'bg-cyan-950/40 border-cyan-500/25 text-cyan-200'
                            : 'bg-white/[0.02] border-white/10 text-slate-300'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isPrimary ? 'bg-cyan-400' : 'bg-slate-500'
                          }`}
                        ></span>
                        <span className="font-medium">{item.name}</span>
                        {item.note && (
                          <span className="text-[10px] text-slate-400 opacity-80">
                            • {item.note}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
