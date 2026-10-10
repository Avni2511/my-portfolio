import React, { useState, useEffect } from 'react';
import { Rocket, Zap, ChevronUp, Radio } from 'lucide-react';

export const RocketBooster: React.FC = () => {
  const [isBoosting, setIsBoosting] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [velocity, setVelocity] = useState('NOMINAL');
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const pct = totalScroll > 0 ? Math.min(100, Math.round((current / totalScroll) * 100)) : 0;
      setScrollProgress(pct);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const launchBoost = () => {
    if (isBoosting) return;
    setIsBoosting(true);
    setVelocity('HYPER-THRUST (MACH 9.8)');

    // Dispatch global rocket-boost event to FloatingLettersCanvas for Warp Speed stars!
    window.dispatchEvent(
      new CustomEvent('rocket-boost', { detail: { boosting: true } })
    );

    // Smoothly blast off to the top (Apogee)
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Boost duration sequence
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('rocket-boost', { detail: { boosting: false } })
      );
      setIsBoosting(false);
      setVelocity('NOMINAL');
    }, 2400);
  };

  return (
    <aside
      aria-label="Orbital Rocket Propulsion Unit"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Telemetry Tooltip on Hover or Boosting */}
      <div
        className={`px-3 py-1.5 rounded-lg border border-cyan-400/30 bg-[#050811]/90 backdrop-blur-md text-[10px] font-mono text-cyan-300 shadow-xl transition-all duration-300 ${
          hovered || isBoosting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${isBoosting ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`}></span>
          <span className="font-semibold text-white">ORBITAL THRUSTER</span>
          <span className="text-slate-500">|</span>
          <span className="text-cyan-400">{isBoosting ? 'WARP SPEED' : `ALTITUDE: ${scrollProgress}%`}</span>
        </div>
        <div className="text-[9px] text-slate-400 mt-0.5">
          {isBoosting ? 'BURNING AFTERBURNER PLUME' : 'CLICK TO BOOST TO APOGEE'}
        </div>
      </div>

      {/* Main Rocket Booster Craft Container */}
      <div className="relative group">
        <button
          onClick={launchBoost}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`relative p-3.5 rounded-2xl border transition-all duration-500 flex items-center justify-center group focus:outline-none ${
            isBoosting
              ? 'bg-gradient-to-b from-cyan-950 via-slate-900 to-amber-950/80 border-amber-400 shadow-[0_0_35px_rgba(255,140,0,0.6)] -translate-y-6'
              : 'bg-[#060813]/90 hover:bg-[#0A0F22] border-white/15 hover:border-cyan-400 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]'
          }`}
          title="Engage Rocket Thrusters to Orbit Top"
        >
          {/* Rocket Vessel SVG Graphic */}
          <div className="relative w-7 h-7 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className={`w-7 h-7 transition-all duration-300 ${
                isBoosting
                  ? 'text-amber-300 scale-110 drop-shadow-[0_0_12px_rgba(255,165,0,0.9)] animate-pulse'
                  : 'text-cyan-300 group-hover:text-white group-hover:-translate-y-1'
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Rocket Nose and Fuselage */}
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2 5-2" />
              <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2-5 2-5" />
            </svg>

            {/* Dynamic Exhaust Thruster Flame */}
            <div
              className={`absolute -bottom-3 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-300 ${
                isBoosting
                  ? 'opacity-100 scale-150'
                  : hovered
                  ? 'opacity-90 scale-110'
                  : 'opacity-70 scale-90'
              }`}
            >
              {/* Animated Dual Flame Plumes */}
              <div className="relative flex justify-center">
                {/* Core Plasma Jet */}
                <div
                  className={`w-2 rounded-full transition-all duration-150 ${
                    isBoosting
                      ? 'h-6 bg-gradient-to-b from-white via-amber-300 to-red-500 shadow-[0_0_15px_#FF4500] animate-bounce'
                      : 'h-3.5 bg-gradient-to-b from-cyan-200 via-cyan-400 to-transparent shadow-[0_0_8px_#00F0FF]'
                  }`}
                />
                {/* Secondary Sparks Glow */}
                <div
                  className={`absolute -bottom-1 w-3.5 rounded-full blur-[2px] transition-all ${
                    isBoosting
                      ? 'h-5 bg-gradient-to-b from-yellow-300 to-amber-600 animate-ping'
                      : 'h-2 bg-cyan-400 opacity-60 animate-pulse'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Quick Altitude Circular Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="44"
              className="stroke-white/5 fill-none"
              strokeWidth="3"
            />
            <circle
              cx="50"
              cy="50"
              r="44"
              className={`fill-none transition-all duration-300 ${
                isBoosting ? 'stroke-amber-400' : 'stroke-cyan-400/60'
              }`}
              strokeWidth="3"
              strokeDasharray="276"
              strokeDashoffset={276 - (276 * scrollProgress) / 100}
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
};
