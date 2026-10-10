import React from 'react';
import { BEYOND_CODE_ITEMS } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';

export const BeyondTheCode: React.FC = () => {
  return (
    <section id="horizons" className="py-20 md:py-32 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-2">
              <Sparkles size={14} />
              <span>PERSPECTIVE & BALANCE</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight uppercase text-white">
              BEYOND THE CODE
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm font-light text-slate-300 max-w-md text-left md:text-right">
            Curiosity, aesthetics, discipline, and creative rhythm outside software engineering.
          </p>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEYOND_CODE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-white/10 bg-[#070912]/80 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                  {item.category}
                </span>

                <h3 className="font-editorial text-2xl uppercase tracking-wide text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
