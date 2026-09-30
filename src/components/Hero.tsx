import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDownRight, Sparkles, Terminal, Code2 } from 'lucide-react';
import originalPhoto from '../assets/avni-photo.jpg';

export const Hero: React.FC = () => {
  const firstName = "AVNI";
  const lastName = "GUPTA";

  const [revealedCount, setRevealedCount] = useState<number>(0);

  useEffect(() => {
    const totalChars = firstName.length + lastName.length;
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setRevealedCount(current);
      if (current >= totalChars) {
        clearInterval(interval);
      }
    }, 85);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 md:pt-36 md:pb-24 flex flex-col justify-between cosmic-grid-bg border-b border-cyan-500/10 overflow-hidden">
      {/* Ambient Lighting Glows */}
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Top Ticker */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center justify-between text-[10px] font-mono tracking-widest text-cyan-300/60 uppercase mb-8 z-20">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
          <span className="text-cyan-200 tracking-widest-xl">PORTFOLIO & SYSTEM WORKS</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-slate-400">
          <span>LOCATION: {PERSONAL_INFO.location}</span>
          <span>•</span>
          <span>KIET GROUP OF INSTITUTIONS</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
            OPEN TO OPPORTUNITIES
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center my-auto z-20">
        {/* Left Column: Letter-by-Letter Reveal & Role */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 text-[10px] font-mono tracking-widest uppercase bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <Code2 size={12} className="text-cyan-400" />
              <span>BACKEND DEVELOPER</span>
            </div>
            <div className="h-[1px] w-12 bg-gradient-to-r from-cyan-400 to-transparent"></div>
            <span className="text-[10px] font-mono tracking-widest uppercase text-purple-300/80">
              SOFTWARE ENGINEER
            </span>
          </div>

          {/* Letter-by-Letter Text Reveal Animation */}
          <div className="relative mb-6">
            <h1 className="font-editorial text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-normal tracking-tight leading-[0.88] uppercase select-none text-white">
              {/* First Name: AVNI */}
              <div className="flex items-center overflow-hidden">
                {firstName.split('').map((char, index) => {
                  const isVisible = index < revealedCount;
                  return (
                    <span
                      key={`first-${index}`}
                      className="inline-block transition-all duration-500 transform hover:text-cyan-400 cursor-default"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(40px) rotate(4deg)',
                        transitionDelay: `${index * 40}ms`,
                        textShadow: isVisible ? '0 0 30px rgba(0, 240, 255, 0.4)' : 'none',
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>

              {/* Last Name: GUPTA */}
              <div className="flex items-center overflow-hidden mt-1">
                {lastName.split('').map((char, index) => {
                  const charIndex = firstName.length + index;
                  const isVisible = charIndex < revealedCount;
                  return (
                    <span
                      key={`last-${index}`}
                      className="inline-block italic font-light text-cyan-200/90 transition-all duration-500 transform hover:text-cyan-400 cursor-default"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(40px) rotate(-4deg)',
                        transitionDelay: `${charIndex * 40}ms`,
                        textShadow: isVisible ? '0 0 35px rgba(139, 92, 246, 0.5)' : 'none',
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            </h1>

            {/* Orbiting Starlight glyph behind name */}
            <span className="absolute -top-10 -right-6 font-serif text-[140px] font-thin text-cyan-500/[0.04] select-none pointer-events-none">
              ✦
            </span>
          </div>

          {/* Role & Core Headline */}
          <div className="space-y-4 mb-8">
            <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-light tracking-wide uppercase text-slate-300">
              SOFTWARE ENGINEER
              <span className="block font-medium text-white mt-1 tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300">
                {PERSONAL_INFO.headline}
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-light text-slate-300 max-w-xl leading-relaxed italic border-l-2 border-cyan-400/50 pl-4">
              "{PERSONAL_INFO.subheadline}"
            </p>
          </div>

          {/* Metadata Cards */}
          <div className="pt-6 border-t border-cyan-500/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-xl mb-10">
            <div className="p-3 border border-cyan-500/15 bg-black/40 backdrop-blur-sm">
              <span className="block text-[9px] font-mono uppercase tracking-widest text-cyan-400/70">SPECIALIZATION</span>
              <span className="text-xs font-mono font-medium text-white">Backend Engineering</span>
            </div>
            <div className="p-3 border border-cyan-500/15 bg-black/40 backdrop-blur-sm">
              <span className="block text-[9px] font-mono uppercase tracking-widest text-cyan-400/70">CORE STACK</span>
              <span className="text-xs font-mono font-medium text-white">Django • DRF • PostgreSQL</span>
            </div>
            <div className="p-3 border border-cyan-500/15 bg-black/40 backdrop-blur-sm col-span-2 sm:col-span-1">
              <span className="block text-[9px] font-mono uppercase tracking-widest text-cyan-400/70">EDUCATION</span>
              <span className="text-xs font-mono font-medium text-cyan-300">KIET (8.5 CGPA)</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-xs font-mono font-bold uppercase tracking-widest hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300 group"
            >
              <span>VIEW FEATURED PROJECTS</span>
              <ArrowDownRight size={15} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-4 border border-cyan-500/20 bg-black/40 hover:border-cyan-400 text-xs font-mono uppercase tracking-widest text-slate-300 hover:text-white transition-all duration-300"
            >
              <span>ABOUT ME</span>
            </a>
          </div>
        </div>

        {/* Right Column: Original Photo with Clean Cyber Frame */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <div className="relative w-full max-w-md">
            {/* Top Annotation Badge */}
            <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-cyan-300/70 uppercase mb-2 px-2">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                PROFILE
              </span>
              <span>AVNI GUPTA</span>
              <span>INDIA</span>
            </div>

            {/* Asymmetrical Framing Box */}
            <div className="relative p-2.5 border border-cyan-500/30 bg-[#06080F]/80 backdrop-blur-md shadow-[0_0_35px_rgba(0,240,255,0.12)] transition-all duration-500 group">
              {/* Corner crosshairs */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400 pointer-events-none"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400 pointer-events-none"></div>

              {/* Photo Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A0C14] border border-cyan-500/20">
                <img
                  src={originalPhoto}
                  alt="Avni Gupta — Backend Software Engineer"
                  className="w-full h-full object-cover object-[center_35%] filter brightness-[1.0] contrast-[1.04] transition-all duration-700 group-hover:scale-105"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040508] via-transparent to-transparent pointer-events-none"></div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/80 border border-cyan-400/40 text-[8px] font-mono text-cyan-300 backdrop-blur-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></span>
                  ACTIVE DEVELOPER
                </div>

                <div className="absolute top-4 right-4 px-2.5 py-1 bg-black/80 border border-cyan-400/40 text-[8px] font-mono text-slate-300 backdrop-blur-sm">
                  {PERSONAL_INFO.coordinates}
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 inset-x-3 p-3 bg-black/90 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between text-[9px] font-mono text-slate-300">
                  <div>
                    <span className="block font-bold text-white uppercase">AVNI GUPTA</span>
                    <span className="text-[8px] text-cyan-400/80">SOFTWARE ENGINEER • KIET / IT</span>
                  </div>
                  <span className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-400 text-cyan-300 text-[8px]">
                    CGPA: 8.5
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="mt-3 flex items-center justify-between text-[9px] font-mono px-1 text-slate-500">
              <span>BACKEND & CLOUD SYSTEMS</span>
              <span className="text-cyan-400">JHANSI, INDIA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-10 z-20">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b border-cyan-500/15 text-[10px] font-mono uppercase tracking-widest-xl text-slate-400">
          <div className="flex items-center gap-6">
            <span className="text-cyan-300">[ 01 ] FEATURED PROJECTS</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span className="hidden sm:inline">[ 02 ] HOW I BUILD</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span className="hidden sm:inline">[ 03 ] TECH STACK</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span className="hidden sm:inline">[ 04 ] AI EXPLORATION</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-400 font-bold">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight size={13} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
