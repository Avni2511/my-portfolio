import React from 'react';
import { BEYOND_CODE_ITEMS } from '../data/portfolioData';
import { Compass, Orbit, Radio, PlusCircle, Sparkles } from 'lucide-react';

export const BeyondTheCode: React.FC = () => {
  return (
    <section id="horizons" className="py-24 md:py-36 border-b border-cyan-500/15 cosmic-grid-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-cyan-500/15">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-3">
              <Sparkles size={14} className="text-cyan-400" />
              <span>INDEX / 05 • HUMANITY & PERSPECTIVE</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase text-white">
              BEYOND THE CODE
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs md:text-sm font-light text-slate-300 max-w-md text-left md:text-right font-sans">
            Software engineering is deeply shaped by curiosity, aesthetics, and how one observes patterns across the universe.
          </p>
        </div>

        {/* Visual Artifacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEYOND_CODE_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 border border-cyan-500/15 bg-[#06080F]/90 hover:bg-[#0A0E1A] hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group relative rounded-sm shadow-[0_0_20px_rgba(0,0,0,0.4)]"
            >
              <div>
                <div className="flex items-center justify-between text-[9px] font-mono text-cyan-400/70 uppercase mb-4 pb-2 border-b border-cyan-500/10">
                  <span>{item.category}</span>
                  <span>0{idx + 1}</span>
                </div>

                <h3 className="font-editorial text-2xl uppercase tracking-wide text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-xs font-sans text-slate-300 leading-relaxed font-light mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-cyan-500/10 flex items-center justify-between text-[9px] font-mono text-cyan-400/80">
                <span>PASSION & CRAFT</span>
                <span className="text-slate-600">✦</span>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Footer Banner */}
        <div className="mt-12 p-6 border border-cyan-500/20 bg-cyan-950/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300 rounded-sm">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
            <span>CREATIVE BALANCE: Bringing rhythm, visualization, focus, and narrative perspective into engineering.</span>
          </div>
          <span className="text-[10px] text-cyan-400/80 uppercase">AVNI GUPTA • ATELIER</span>
        </div>
      </div>
    </section>
  );
};
