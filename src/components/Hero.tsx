import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDownRight, Code2 } from 'lucide-react';
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
    }, 75);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-16 md:pt-36 md:pb-20 flex flex-col justify-between border-b border-white/5 overflow-hidden">
      {/* Soft Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/2 -right-32 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Top Status Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex items-center text-xs font-mono tracking-wider text-slate-400 mb-8 z-20">
        <div data-floating-avoid="true" className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-emerald-400 font-medium">AVAILABLE FOR ROLES</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center my-auto z-20">
        {/* Left Column: Heading, Bio, CTAs */}
        <div data-floating-avoid="true" className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Subtle Role Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono tracking-wider mb-6 w-fit">
            <Code2 size={13} className="text-cyan-400" />
            <span>SOFTWARE ENGINEER • BACKEND & CLOUD</span>
          </div>

          {/* Name Display */}
          <div className="relative mb-5">
            <h1 className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.9] uppercase select-none text-white">
              <div className="flex items-center overflow-hidden">
                {firstName.split('').map((char, index) => {
                  const isVisible = index < revealedCount;
                  return (
                    <span
                      key={`first-${index}`}
                      className="inline-block transition-all duration-500 transform hover:text-cyan-300 cursor-default"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transitionDelay: `${index * 35}ms`,
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>

              <div className="flex items-center overflow-hidden mt-1">
                {lastName.split('').map((char, index) => {
                  const charIndex = firstName.length + index;
                  const isVisible = charIndex < revealedCount;
                  return (
                    <span
                      key={`last-${index}`}
                      className="inline-block transition-all duration-500 transform hover:text-cyan-300 cursor-default text-white"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transitionDelay: `${charIndex * 35}ms`,
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            </h1>
          </div>

          {/* Headline & Description */}
          <div className="space-y-3 mb-8 max-w-xl">
            <p className="text-lg sm:text-xl font-normal text-slate-200 leading-snug">
              Building scalable backend architectures, reliable APIs, and cloud infrastructure with clean, maintainable code.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Specialized in Django, REST Framework, PostgreSQL, and AWS systems designed for performance and clean data flow.
            </p>
          </div>

          {/* Quick Core Tech Pills */}
          <div className="flex flex-wrap gap-2 mb-8 max-w-xl">
            {['Django & DRF', 'PostgreSQL', 'AWS & Terraform', 'Redis & Celery', 'Docker', 'AI / RAG'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/10 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Clean Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-mono font-semibold uppercase tracking-wider rounded-md transition-all duration-200 shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowDownRight size={15} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/15 hover:border-cyan-400/50 bg-white/[0.02] text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white rounded-md transition-all duration-200"
            >
              <span>ABOUT ME</span>
            </a>
          </div>
        </div>

        {/* Right Column: Clean, Elegant Portrait Card */}
        <div data-floating-avoid="true" className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <div className="relative w-full max-w-sm">
            {/* Elegant Framed Card */}
            <div className="relative p-2.5 rounded-2xl border border-white/10 bg-[#070912]/80 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-cyan-500/30">
              {/* Photo Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#090C16]">
                <img
                  src={originalPhoto}
                  alt="Avni Gupta — Backend Software Engineer"
                  className="w-full h-full object-cover object-[center_35%] filter brightness-[1.02] contrast-[1.02] transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Gentle Gradient at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Clean Bottom Caption */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="block font-semibold text-white">AVNI GUPTA</span>
                    <span className="text-[11px] text-cyan-300">Backend Software Engineer</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-[10px]">
                    8.5 CGPA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Scroll Hint */}
      <div data-floating-avoid="true" className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 z-20">
        <div className="flex items-center justify-between py-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
          <span className="tracking-wide">SELECTED WORKS & ARCHITECTURE</span>
          <a href="#projects" className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors">
            <span>SCROLL DOWN</span>
            <ArrowDownRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
};
