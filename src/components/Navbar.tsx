import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  theme: 'charcoal' | 'ivory';
  toggleTheme: () => void;
  onOpenCaseStudy?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'HOW I BUILD', href: '#process' },
    { label: 'TECH STACK', href: '#skills' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'ABOUT ME', href: '#about' },
    { label: 'EXPLORING AI', href: '#ai' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3 backdrop-blur-xl bg-[#040508]/85 border-b border-cyan-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-8 h-8 border border-cyan-400/40 bg-cyan-950/30 flex items-center justify-center text-xs font-mono font-bold tracking-tighter text-cyan-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
              ✦
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-widest-xl text-xs md:text-sm uppercase font-semibold text-white group-hover:text-cyan-300 transition-colors">
                AVNI GUPTA
              </span>
              <span className="font-mono text-[9px] tracking-widest uppercase text-cyan-400/70">
                SOFTWARE ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] font-mono tracking-widest text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 uppercase hover:text-cyan-300 transition-colors duration-200 group flex items-center gap-1"
              >
                <span>{link.label}</span>
                <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            ))}
          </nav>

          {/* Right Status Badge */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 text-[10px] font-mono border rounded-none border-cyan-500/30 bg-cyan-950/20 text-cyan-200">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>JHANSI, INDIA</span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 border border-cyan-500/30 text-cyan-300 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between p-8 backdrop-blur-2xl bg-[#040508]/98 border-b border-cyan-500/20 transition-all duration-300">
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-6">
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-widest uppercase text-white">
                AVNI GUPTA
              </span>
              <span className="font-mono text-[10px] tracking-widest text-cyan-400">
                PORTFOLIO NAVIGATION
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 border border-cyan-500/30 text-cyan-300"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-5 my-auto">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between font-serif text-2xl tracking-wide uppercase text-white hover:text-cyan-300 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-cyan-400/60">0{idx + 1}</span>
                  <span>{link.label}</span>
                </div>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-cyan-500/20 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>AVNI GUPTA</span>
            <span className="text-cyan-300">BACKEND DEVELOPER</span>
          </div>
        </div>
      )}
    </>
  );
};
