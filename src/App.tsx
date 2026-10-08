import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { ToolsOfAtelier } from './components/ToolsOfAtelier';
import { TheJourney } from './components/TheJourney';
import { TheMaker } from './components/TheMaker';
import { CurrentExperiments } from './components/CurrentExperiments';
import { BeyondTheCode } from './components/BeyondTheCode';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { FloatingLettersCanvas } from './components/FloatingLettersCanvas';
import { CustomCursor } from './components/CustomCursor';
import { CaseStudy } from './types';
import { SELECTED_WORKS } from './data/portfolioData';

export function App() {
  const [theme, setTheme] = useState<'charcoal' | 'ivory'>('charcoal');
  const [selectedWork, setSelectedWork] = useState<CaseStudy | null>(null);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'charcoal' ? 'ivory' : 'charcoal'));
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'ivory') {
      root.classList.remove('dark');
      root.classList.add('theme-ivory');
    } else {
      root.classList.add('dark');
      root.classList.remove('theme-ivory');
    }
  }, [theme]);

  const handleOpenCaseStudyById = (id: string) => {
    const found = SELECTED_WORKS.find(w => w.id === id);
    if (found) setSelectedWork(found);
  };

  return (
    <div className={`min-h-screen relative selection:bg-atelier-burgundy selection:text-atelier-ivory ${theme === 'ivory' ? 'theme-ivory' : ''}`}>
      {/* Luxury Trailing Cursor */}
      <CustomCursor />

      {/* Floating Kinetic Letters & Glyphs Background Canvas */}
      <FloatingLettersCanvas />

      {/* Subtle Grain Overlay for Editorial Texture */}
      <div className="grain-overlay"></div>

      {/* Luxury Sticky Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenCaseStudy={handleOpenCaseStudyById}
      />

      {/* Main Atelier Content Stream */}
      <main className="relative z-20">
        {/* 01: Editorial Hero */}
        <Hero />

        {/* 02: Selected Works (Atelier Catalogue) */}
        <SelectedWorks onSelectWork={setSelectedWork} />

        {/* 03: Tools of the Atelier (Materials & Tech) */}
        <ToolsOfAtelier />

        {/* 04: The Journey (Exhibition Timeline) */}
        <TheJourney />

        {/* 05: The Maker (About & Academic Foundation) */}
        <TheMaker />

        {/* 06: Current Experiment (AI × Backend & RAG) */}
        <CurrentExperiments />

        {/* 07: Beyond the Code (Interests & Perspective) */}
        <BeyondTheCode />

        {/* 08: Contact / Correspondence */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
      />
    </div>
  );
}

export default App;
