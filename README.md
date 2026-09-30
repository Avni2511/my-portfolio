# AVNI GUPTA — DIGITAL ATELIER
> *Software Engineer & Backend Systems Architect*

A luxury editorial personal portfolio & engineering atelier designed with quiet luxury, architectural rigor, and technical depth.

---

## 🏛️ Atelier Concept & Visual System

This portfolio is structured around the philosophy of an **engineering atelier** — a sanctuary where software systems, concurrency models, persistence layers, and cloud infrastructure are carefully crafted.

### Key Highlights:
- **Editorial Typography**: Pairing *Playfair Display* & *Cormorant Garamond* with *Plus Jakarta Sans* and *JetBrains Mono*.
- **Sophisticated Neutral Palette**: Deep Charcoal Noir (`#0C0C0E`), Warm Ivory (`#F7F6F2`), and refined Warm Bronze (`#B89065`).
- **Atelier Studio Theme Switcher**: Instant transition between Charcoal Noir and Warm Ivory Studio aesthetics.
- **Interactive Case Studies**: Immersive technical dossiers with the special initialization sequence (`WORK INITIALIZING... API → DATABASE → CACHE → WORKER → SYSTEM READY`).
- **Interactive Architecture Visualizer**: Live schematic inspector for all 4 flagship engineering works.
- **Authentic Engineering Profile**: Grounded strictly in real skills, projects, and academic background (KIET Group of Institutions, Ghaziabad — B.Tech IT, CGPA 8.48/10).

---

## 🛠️ Tech Stack

- **Framework**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS, Vanilla CSS custom tokens, Glassmorphism, Fine blueprint grids
- **Icons**: Lucide Icons
- **Deployment Ready**: Standard SPA bundle

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build
```

---

## 📁 Project Structure

```
myPortfolio/
├── index.html                  # Editorial HTML shell with Google Fonts
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Atelier theme colors & typography
├── src/
│   ├── types/index.ts          # TypeScript interfaces for Case Studies & Nodes
│   ├── data/portfolioData.ts   # Authentic portfolio content (Projects, Journey, Craft)
│   ├── components/
│   │   ├── Navbar.tsx          # Minimal luxury sticky navigation & theme toggle
│   │   ├── Hero.tsx            # Editorial hero with technical annotations & asymmetric framing
│   │   ├── SelectedWorks.tsx   # Atelier catalogue of engineering pieces
│   │   ├── ArchitectureVisualizer.tsx # Interactive architecture flow diagram
│   │   ├── CaseStudyModal.tsx  # 6-section technical case study modal with special transition
│   │   ├── TheCraft.tsx        # 7-stage engineering methodology
│   │   ├── ToolsOfAtelier.tsx  # Materials & technologies organized with visual hierarchy
│   │   ├── TheJourney.tsx      # Gallery exhibition chronological timeline
│   │   ├── TheMaker.tsx        # Biography, philosophy, and academic foundation
│   │   ├── CurrentExperiments.tsx # AI × Backend & RAG exploration
│   │   ├── BeyondTheCode.tsx   # Curated interests & customizable placeholders
│   │   ├── ContactSection.tsx  # Editorial correspondence page
│   │   ├── Footer.tsx          # Minimalist atelier footer
│   │   └── SystemStatusWidget.tsx # Live floating telemetry badge
│   ├── App.tsx                 # Core app orchestrator
│   ├── main.tsx                # React root mount
│   └── index.css               # Global theme tokens, blueprint grids, scrollbars
```

---

## 🎨 Adding Your Portrait Photo

To add your own portrait image:
1. Place your portrait image file into `src/assets/` (e.g., `src/assets/avni-portrait.jpg`).
2. In `src/components/Hero.tsx` and `src/components/TheMaker.tsx`, you can replace the monogram container with an `<img>` tag wrapped in the existing frame.
