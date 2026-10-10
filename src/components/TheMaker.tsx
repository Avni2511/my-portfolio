import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MapPin, User, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export const TheMaker: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-2">
              <User size={14} />
              <span>ABOUT THE ENGINEER</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight uppercase text-white">
              MEET AVNI GUPTA
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm font-light text-slate-300 max-w-md text-left md:text-right">
            A software engineer focused on system reliability, clean architecture, and scalable backend pipelines.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Education & Credentials Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl border border-white/10 bg-[#070912]/80 backdrop-blur-md shadow-xl space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">ACADEMIC FOUNDATION</h3>
                  <span className="text-xs font-mono text-cyan-300">KIET Group of Institutions</span>
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Degree</span>
                  <span className="text-white font-medium text-right">B.Tech in Information Technology</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Timeline</span>
                  <span className="text-slate-300">2024 — 2028 (Expected)</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Cumulative CGPA</span>
                  <span className="text-emerald-400 font-bold text-sm">8.5 / 10</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Location</span>
                  <span className="text-slate-300">Jhansi, India</span>
                </div>
              </div>

              {/* High School & Senior Secondary Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-[11px] text-slate-400 block mb-1">Class XII</span>
                  <span className="text-white font-semibold text-sm">84%</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-[11px] text-slate-400 block mb-1">Class X</span>
                  <span className="text-white font-semibold text-sm">89%</span>
                </div>
              </div>
            </div>

            {/* Quick Summary Pill */}
            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 text-xs font-mono text-slate-300">
              <MapPin size={16} className="text-cyan-400 shrink-0" />
              <span>Based in Jhansi, India • Open to remote & hybrid engineering roles</span>
            </div>
          </div>

          {/* Right Column: Bio & Engineering Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl sm:text-3xl text-white leading-snug">
                I enjoy understanding how systems work under the hood and crafting reliable backend software.
              </h3>

              <div className="space-y-4 text-sm sm:text-base font-light text-slate-300 leading-relaxed">
                <p>
                  As a backend software engineer, my focus is on designing scalable APIs, database models, and cloud infrastructure that perform reliably under real-world conditions.
                </p>
                <p>
                  I love diving into the core mechanics of backend technologies — understanding how the Django ORM builds efficient queries, how Redis caches data in memory, how Celery manages background task queues, and how Terraform provisions automated cloud resources on AWS.
                </p>
                <p>
                  I'm continuously refining my skills: solidifying algorithmic problem solving in C++, containerizing services with Docker, building cloud networks on AWS, and integrating AI/RAG models into structured backend workflows.
                </p>
              </div>
            </div>

            {/* 4 Core Pillars */}
            <div className="pt-4 border-t border-white/5">
              <span className="block text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4">
                CORE TECHNICAL PILLARS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-white/10 bg-[#070912]/60 hover:border-cyan-500/30 transition-colors">
                  <div className="text-xs font-mono font-semibold text-white mb-1.5 flex items-center gap-2">
                    <span className="text-cyan-400">01</span>
                    <span>BACKEND RELIABILITY</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Clean REST APIs, stateless JWT auth, RBAC permissions, and strict schema validation.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-[#070912]/60 hover:border-cyan-500/30 transition-colors">
                  <div className="text-xs font-mono font-semibold text-white mb-1.5 flex items-center gap-2">
                    <span className="text-cyan-400">02</span>
                    <span>ASYNC & CACHING</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Decoupled Celery task queues and lightning-fast Redis caching layers.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-[#070912]/60 hover:border-cyan-500/30 transition-colors">
                  <div className="text-xs font-mono font-semibold text-white mb-1.5 flex items-center gap-2">
                    <span className="text-cyan-400">03</span>
                    <span>CLOUD & DEVOPS</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Automated AWS cloud provisioning with Terraform and Docker container parity.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-[#070912]/60 hover:border-cyan-500/30 transition-colors">
                  <div className="text-xs font-mono font-semibold text-white mb-1.5 flex items-center gap-2">
                    <span className="text-cyan-400">04</span>
                    <span>PROBLEM SOLVING</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Algorithmic optimization, C++ data structures, and efficient query plans.
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
