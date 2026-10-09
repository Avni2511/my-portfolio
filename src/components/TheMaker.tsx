import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MapPin, User, GraduationCap, CheckCircle2, Award } from 'lucide-react';
import originalPhoto from '../assets/avni-photo.jpg';

export const TheMaker: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 border-b border-cyan-500/15 cosmic-grid-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-cyan-500/15">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-3">
              <User size={14} className="text-cyan-400" />
              <span>INDEX / 04 • ABOUT ME</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase text-white">
              MEET THE DEVELOPER
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs md:text-sm font-light text-slate-300 max-w-md text-left md:text-right font-sans">
            A software engineer who enjoys understanding how systems work and turning ideas into reliable, functioning products.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Photo & Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3 border border-cyan-500/30 bg-[#06080F]/90 relative shadow-[0_0_35px_rgba(0,240,255,0.1)] rounded-sm">
              {/* Corner crosshairs */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

              {/* Original Photo Container */}
              <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-[#0A0C14] border border-cyan-500/20 relative">
                <img
                  src={originalPhoto}
                  alt="Avni Gupta — Backend Software Engineer"
                  className="w-full h-full object-cover object-[center_38%] filter brightness-[1.0] contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040508]/80 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-black/85 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-between text-[9px] font-mono">
                  <span className="text-white font-bold uppercase">AVNI GUPTA</span>
                  <span className="text-cyan-400">SOFTWARE ENGINEER</span>
                </div>
              </div>

              {/* Education Card with 8.5 CGPA */}
              <div className="mt-4 p-4 border border-cyan-500/15 bg-black/60 space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between pb-2 border-b border-cyan-500/10 text-[10px] text-cyan-400/70 uppercase">
                  <span>EDUCATION & ACADEMICS</span>
                  <span>KIET / IT</span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Degree:</span>
                    <span className="text-white font-medium">B.Tech in Information Technology</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">College:</span>
                    <span className="text-white text-right">KIET Group of Institutions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Timeline:</span>
                    <span className="text-slate-300">2024 — 2028 (Expected)</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-cyan-500/10">
                    <span className="text-cyan-300 font-bold">Cumulative CGPA:</span>
                    <span className="text-cyan-300 font-bold text-sm">8.5 / 10</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-cyan-500/10 text-[10px]">
                  <div className="p-2 border border-cyan-500/15 bg-cyan-950/20">
                    <span className="text-slate-400 block">Class XII:</span>
                    <span className="text-white font-bold">84%</span>
                  </div>
                  <div className="p-2 border border-cyan-500/15 bg-cyan-950/20">
                    <span className="text-slate-400 block">Class X:</span>
                    <span className="text-white font-bold">89%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="p-4 border border-cyan-500/15 bg-[#06080F]/70 flex items-center justify-between text-xs font-mono text-slate-300 rounded-sm">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-cyan-400" />
                <span>LOCATION: Jhansi, India</span>
              </div>
              <span className="text-[10px] text-cyan-400/80">{PERSONAL_INFO.coordinates}</span>
            </div>
          </div>

          {/* Right Column: Bio & Core Strengths */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <div className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                ENGINEERING BACKGROUND
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl text-white leading-tight uppercase">
                "I enjoy understanding how systems work under the hood and crafting reliable backend software."
              </h3>

              <div className="space-y-4 text-sm sm:text-base font-light text-slate-300 leading-relaxed font-sans">
                <p>
                  As a backend software engineer, my focus is on designing scalable APIs, database models, and cloud infrastructure that perform reliably under real-world conditions.
                </p>
                <p>
                  I love diving into the core mechanics of backend technologies — understanding how the Django ORM builds efficient queries, how Redis caches data in memory, how Celery manages background task queues, and how Terraform provisions automated cloud resources on AWS.
                </p>
                <p>
                  I am constantly learning and expanding my skills — building strong algorithmic problem-solving foundations in C++, engineering distributed systems with Django REST Framework, Docker, and AWS, and currently exploring how to integrate AI and Retrieval-Augmented Generation (RAG) into robust backend APIs.
                </p>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="pt-6 border-t border-cyan-500/15">
              <span className="block text-[9px] font-mono uppercase tracking-widest text-cyan-400/80 mb-4">
                CORE TECHNICAL PILLARS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-cyan-500/15 bg-black/40 hover:border-cyan-400/40 transition-colors rounded-sm">
                  <div className="text-xs font-mono font-bold text-white mb-1">
                    01 • BACKEND RELIABILITY
                  </div>
                  <p className="text-xs font-sans text-slate-300">
                    Clean REST APIs, stateless JWT authentication, role-based permissions, and data integrity.
                  </p>
                </div>

                <div className="p-4 border border-cyan-500/15 bg-black/40 hover:border-cyan-400/40 transition-colors rounded-sm">
                  <div className="text-xs font-mono font-bold text-white mb-1">
                    02 • ASYNC TASKS & CACHING
                  </div>
                  <p className="text-xs font-sans text-slate-300">
                    Offloading background jobs to Celery workers and speeding up queries with Redis caching.
                  </p>
                </div>

                <div className="p-4 border border-cyan-500/15 bg-black/40 hover:border-cyan-400/40 transition-colors rounded-sm">
                  <div className="text-xs font-mono font-bold text-white mb-1">
                    03 • CLOUD & DEVOPS
                  </div>
                  <p className="text-xs font-sans text-slate-300">
                    Codifying multi-environment AWS cloud infrastructure with Terraform and Docker containers.
                  </p>
                </div>

                <div className="p-4 border border-cyan-500/15 bg-black/40 hover:border-cyan-400/40 transition-colors rounded-sm">
                  <div className="text-xs font-mono font-bold text-white mb-1">
                    04 • PROBLEM SOLVING
                  </div>
                  <p className="text-xs font-sans text-slate-300">
                    Solid grounding in C++ data structures, algorithms, and efficient problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
