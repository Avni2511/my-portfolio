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
    { label: 'TECH STACK', href: '#skills' },
    { label: 'ABOUT ME', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        data-floating-avoid="true"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 backdrop-blur-xl bg-[#040508]/85 border-b border-white/10 shadow-lg'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg border border-white/10 bg-cyan-950/30 flex items-center justify-center text-xs font-mono font-bold text-cyan-300 group-hover:border-cyan-400/50 transition-all">
              ✦
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-sm tracking-wider uppercase font-semibold text-white group-hover:text-cyan-300 transition-colors">
                AVNI GUPTA
              </span>
              <span className="font-mono text-[9px] tracking-wider uppercase text-slate-400">
                SOFTWARE ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-1 uppercase hover:text-cyan-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Status Badge */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 text-[11px] font-mono rounded-full border border-white/10 bg-white/[0.03] text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Jhansi, India</span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white transition-colors"
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
