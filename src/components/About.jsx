import React from 'react';
import { aboutData } from '../data/portfolioData';
import { User, Briefcase, Calendar, CheckCircle, Award, Terminal, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Engineering with <span className="text-gradient-aurora">Quality & Depth</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            A developer dedicated to reliable architectures, robust testing, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative - 3-4 Impactful Sentences (Left column: 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] relative overflow-hidden">
              {/* Subtle corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>Background & Engineering Vision</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutData.paragraphs.map((paragraph, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <p className="text-slate-300">{paragraph}</p>
                  </div>
                ))}
              </div>

              {/* Core Strengths summary pill row */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-200">MERN Architecture</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-200">Java & Algorithmic DSA</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-200">Testing & Debugging</span>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Experience Highlight Card (Right column: 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-colors" />

              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>WORK EXPERIENCE</span>
                </div>
                <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  {aboutData.experience.type}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {aboutData.experience.role}
                </h4>
                <p className="text-emerald-400 font-medium text-sm">
                  {aboutData.experience.company}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono pt-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{aboutData.experience.period}</span>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-4 rounded-2xl border border-white/[0.04]">
                {aboutData.experience.description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Production Web Development
                </span>
                <span className="font-mono text-[11px] text-slate-500">1 Year</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
