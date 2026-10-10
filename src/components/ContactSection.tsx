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
    <section id="contact" className="py-24 md:py-36 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono tracking-wider uppercase mb-6 rounded-full">
          <MessageSquare size={13} className="text-cyan-400" />
          <span>GET IN TOUCH</span>
        </div>

        {/* Big Heading */}
        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white mb-6 leading-tight">
          LET'S BUILD<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-purple-300">
            SOMETHING TOGETHER.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Open to software engineering opportunities, backend development roles, and collaborative projects.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-lg mx-auto">
          {/* Email Direct Button */}
          <a
            href={PERSONAL_INFO.email}
            className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(0,240,255,0.2)]"
          >
            <Mail size={16} />
            <span>SEND EMAIL</span>
          </a>

          {/* Copy Button */}
          <button
            onClick={handleCopyEmail}
            className="px-5 py-3.5 border border-white/10 bg-white/[0.03] hover:border-cyan-400/40 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-2 rounded-xl"
            title="Copy email to clipboard"
          >
            {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
            <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
          </button>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-cyan-400/30 rounded-lg text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <Github size={15} />
            <span>GitHub</span>
            <ArrowUpRight size={13} />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-cyan-400/30 rounded-lg text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <Linkedin size={15} />
            <span>LinkedIn</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Location Note */}
        <div className="mt-14 text-xs font-mono text-slate-500">
          <span>Jhansi, India • Indian Standard Time (IST)</span>
        </div>
      </div>
    </section>
  );
};
