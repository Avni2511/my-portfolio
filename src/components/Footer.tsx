import React from 'react';
import { ArrowUp, Orbit } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#030407] text-slate-400 text-xs font-mono border-t border-cyan-500/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand Column */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-editorial text-lg text-white uppercase tracking-widest font-semibold">
              AVNI GUPTA
            </span>
            <span className="text-[10px] text-slate-600">/</span>
            <span className="text-[10px] text-cyan-400 uppercase tracking-widest">
              ENGINEERING UNIVERSE
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            SOFTWARE ENGINEER • BACKEND SYSTEMS & DISTRIBUTED COSMOS
          </p>
        </div>

        {/* Center Philosophy Note */}
        <div className="text-center md:text-left">
          <span className="text-cyan-200 tracking-widest text-[11px] uppercase block">
            ORBITING WITH CURIOSITY.
          </span>
          <span className="text-[10px] text-slate-500">
            CRAFTED WITH ARCHITECTURAL RIGOR & COSMIC DEPTH.
          </span>
        </div>

        {/* Right Copyright & Back to Top */}
        <div className="flex items-center gap-6 self-end md:self-auto">
          <span className="text-[10px] text-slate-600">
            © 2026 AVNI GUPTA. ALL ORBITS RESERVED.
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of universe"
            className="p-2 border border-cyan-500/20 hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-300"
          >
            <span>APOGEE</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};
