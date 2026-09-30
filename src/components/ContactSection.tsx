import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, Check, Copy, ArrowUpRight, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.emailDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 md:py-44 border-b border-cyan-500/15 relative bg-gradient-to-b from-transparent via-[#040508] to-[#020305]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono tracking-widest-xl uppercase mb-8 shadow-[0_0_15px_rgba(0,240,255,0.15)] rounded-sm">
          <MessageSquare size={12} className="text-cyan-400" />
          <span>INDEX / 09 • GET IN TOUCH</span>
        </div>

        {/* Big Heading */}
        <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight text-white mb-8 leading-[0.9]">
          LET'S BUILD<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-purple-400">
            SOMETHING TOGETHER.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="font-light text-base sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-14 leading-relaxed font-sans">
          "Open to exciting software engineering opportunities, backend development roles, and collaborative projects."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto">
          {/* GitHub Button */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#070A14] border border-cyan-500/25 hover:border-cyan-400 text-white text-xs font-mono uppercase tracking-widest transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] rounded-sm"
          >
            <Github size={16} />
            <span>GITHUB</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          </a>

          {/* LinkedIn Button */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#070A14] border border-cyan-500/25 hover:border-cyan-400 text-white text-xs font-mono uppercase tracking-widest transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] rounded-sm"
          >
            <Linkedin size={16} />
            <span>LINKEDIN</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          </a>

          {/* Email Direct & Copy Button */}
          <div className="w-full flex items-center justify-center gap-2 mt-2">
            <a
              href={PERSONAL_INFO.email}
              className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-xs font-mono uppercase tracking-widest hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all rounded-sm"
            >
              <Mail size={16} />
              <span>SEND AN EMAIL</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-4 border border-cyan-500/25 bg-[#070A14] hover:border-cyan-400 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-2 rounded-sm"
              title="Copy email to clipboard"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              <span className="hidden sm:inline">{copied ? "EMAIL COPIED" : "COPY EMAIL"}</span>
            </button>
          </div>
        </div>

        {/* Location Note */}
        <div className="mt-16 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          <span>BASED IN JHANSI, INDIA • TIMEZONE: IST (UTC+5:30)</span>
        </div>
      </div>
    </section>
  );
};
