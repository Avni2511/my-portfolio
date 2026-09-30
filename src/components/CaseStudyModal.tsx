import React, { useState, useEffect } from 'react';
import { CaseStudy } from '../types';
import { ArchitectureVisualizer } from './ArchitectureVisualizer';
import { X, ExternalLink, Github, Terminal, CheckCircle2, ArrowRight, Shield, Layers, Box, Cpu } from 'lucide-react';

interface CaseStudyModalProps {
  work: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ work, onClose }) => {
  const [initStage, setInitStage] = useState<number>(0);
  const [isSystemReady, setIsSystemReady] = useState<boolean>(false);

  useEffect(() => {
    if (!work) {
      setInitStage(0);
      setIsSystemReady(false);
      return;
    }

    // Special Atelier Interaction Sequence:
    // Fast, subtle system initialization
    setInitStage(1); // "WORK INITIALIZING"
    const timer1 = setTimeout(() => setInitStage(2), 200); // "API • DATABASE"
    const timer2 = setTimeout(() => setInitStage(3), 450); // "CACHE • WORKER"
    const timer3 = setTimeout(() => {
      setInitStage(4);
      setIsSystemReady(true);
    }, 700); // "SYSTEM READY"

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [work]);

  if (!work) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-start justify-center p-3 sm:p-6 md:p-10 animate-fade-in">
      <div
        className="relative w-full max-w-5xl bg-[#0D0D10] border border-atelier-surfaceBorder my-8 shadow-2xl text-atelier-sand overflow-hidden"
        style={{ borderColor: 'var(--border-strong)', backgroundColor: 'var(--bg-primary)' }}
      >
        {/* Top Atelier Calibration Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-atelier-surfaceBorder bg-black/60 text-[10px] font-mono tracking-widest text-atelier-muted uppercase"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <div className="flex items-center gap-3">
            <span className="text-atelier-bronze font-bold">{work.number}</span>
            <span className="opacity-30">/</span>
            <span>ATELIER SPECIFICATION DOC</span>
          </div>

          {/* Special Transition Indicator */}
          <div className="flex items-center gap-2">
            {!isSystemReady ? (
              <div className="flex items-center gap-2 text-amber-400">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping"></span>
                <span>
                  {initStage === 1 && "SYSTEM INITIALIZING..."}
                  {initStage === 2 && "PROBING: API • DATABASE..."}
                  {initStage === 3 && "ATTACHING: CACHE • WORKER..."}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                <span>SYSTEM READY</span>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1 hover:text-atelier-bronze hover:border-atelier-bronze transition-colors flex items-center gap-1 text-[11px]"
            title="Close Case Study (ESC)"
          >
            <X size={16} />
            <span className="hidden sm:inline">CLOSE [ESC]</span>
          </button>
        </div>

        {/* Modal Inner Content */}
        <div className="p-6 sm:p-10 md:p-14 space-y-16">
          {/* Work Header Title & Metadata */}
          <div className="space-y-4 border-b pb-10" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center gap-3 text-xs font-mono text-atelier-bronze tracking-widest uppercase">
              <span>{work.category}</span>
              <span>•</span>
              <span>{work.year}</span>
              <span>•</span>
              <span className="text-emerald-400">{work.status}</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-medium uppercase tracking-tight text-atelier-ivory" style={{ color: 'var(--text-primary)' }}>
              {work.title}
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-light text-atelier-sand max-w-3xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              "{work.tagline}"
            </p>

            {/* Quick Access Badges & GitHub Button */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {work.materials.flatMap(m => m.items).slice(0, 5).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-atelier-stone"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {work.githubUrl && (
                <a
                  href={work.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-atelier-surfaceElevated border border-atelier-surfaceBorder text-xs font-mono uppercase tracking-widest text-atelier-ivory hover:border-atelier-bronze hover:text-atelier-bronze transition-colors"
                  style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-subtle)' }}
                >
                  <Github size={14} />
                  <span>VIEW REPOSITORY (Avni2511)</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>

          {/* Section 01: THE PROBLEM & Section 02: THE APPROACH */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-6 border border-atelier-surfaceBorder bg-black/20 space-y-3" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-atelier-bronze uppercase">
                <span>01</span>
                <span>—</span>
                <span>THE PROBLEM</span>
              </div>
              <h3 className="font-serif text-xl text-atelier-ivory font-medium" style={{ color: 'var(--text-primary)' }}>
                System Constraints & Latency Bottlenecks
              </h3>
              <p className="text-sm font-sans text-atelier-stone leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {work.problem}
              </p>
            </div>

            <div className="p-6 border border-atelier-surfaceBorder bg-black/20 space-y-3" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-atelier-bronze uppercase">
                <span>02</span>
                <span>—</span>
                <span>THE APPROACH</span>
              </div>
              <h3 className="font-serif text-xl text-atelier-ivory font-medium" style={{ color: 'var(--text-primary)' }}>
                Architectural Resolution & Concurrency
              </h3>
              <p className="text-sm font-sans text-atelier-stone leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {work.approach}
              </p>
            </div>
          </div>

          {/* Section 03: THE ARCHITECTURE (Interactive Diagram) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-atelier-bronze uppercase">
              <span>03</span>
              <span>—</span>
              <span>THE ARCHITECTURE</span>
            </div>
            <ArchitectureVisualizer
              nodes={work.architecture.nodes}
              flows={work.architecture.flows}
              description={work.architecture.description}
              projectName={work.title}
            />
          </div>

          {/* Section 04: THE MATERIALS (Technologies Used) */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-atelier-bronze uppercase">
              <span>04</span>
              <span>—</span>
              <span>THE MATERIALS</span>
            </div>
            <h3 className="font-serif text-2xl text-atelier-ivory font-medium" style={{ color: 'var(--text-primary)' }}>
              Engineered Technologies & Protocols
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {work.materials.map((matGroup, idx) => (
                <div key={idx} className="p-4 border border-atelier-surfaceBorder bg-black/30" style={{ borderColor: 'var(--border-subtle)' }}>
                  <span className="block text-[9px] font-mono uppercase tracking-widest text-atelier-muted mb-2">
                    {matGroup.category}
                  </span>
                  <ul className="space-y-1.5">
                    {matGroup.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs font-mono text-atelier-ivory flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                        <span className="w-1 h-1 bg-atelier-bronze"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 05: THE DETAILS (Important Engineering Features) */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-atelier-bronze uppercase">
              <span>05</span>
              <span>—</span>
              <span>THE DETAILS</span>
            </div>
            <h3 className="font-serif text-2xl text-atelier-ivory font-medium" style={{ color: 'var(--text-primary)' }}>
              Key Engineering Implementations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {work.details.map((detail, idx) => (
                <div key={idx} className="p-5 border border-atelier-surfaceBorder bg-black/20 relative" style={{ borderColor: 'var(--border-subtle)' }}>
                  <div className="text-[9px] font-mono text-atelier-bronze mb-1">FEATURE 0{idx + 1}</div>
                  <h4 className="font-mono text-sm font-semibold text-atelier-ivory mb-2" style={{ color: 'var(--text-primary)' }}>
                    {detail.title}
                  </h4>
                  <p className="text-xs font-sans text-atelier-stone leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 06: THE LESSON (What I Learned) */}
          <div className="p-6 sm:p-8 border border-atelier-surfaceBorder bg-atelier-bronze/5 space-y-4" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-atelier-bronze uppercase">
              <span>06</span>
              <span>—</span>
              <span>THE LESSON</span>
            </div>
            <h3 className="font-serif text-2xl text-atelier-ivory font-medium" style={{ color: 'var(--text-primary)' }}>
              Engineering Takeaways & Architectural Insights
            </h3>
            <ul className="space-y-3">
              {work.lessons.map((lesson, idx) => (
                <li key={idx} className="text-xs sm:text-sm font-sans text-atelier-sand flex items-start gap-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} className="text-atelier-bronze shrink-0 mt-0.5" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Bottom Close Bar */}
        <div className="px-6 py-4 border-t border-atelier-surfaceBorder bg-black/60 flex items-center justify-between text-xs font-mono"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <span className="text-atelier-muted">AVNI GUPTA • DIGITAL ATELIER</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-atelier-surfaceElevated border border-atelier-surfaceBorder hover:border-atelier-bronze text-atelier-ivory transition-colors uppercase tracking-widest text-[11px]"
            style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-subtle)' }}
          >
            RETURN TO CATALOGUE
          </button>
        </div>
      </div>
    </div>
  );
};
