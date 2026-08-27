import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, FileText, Sparkles, Terminal, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] sm:w-[48rem] h-[24rem] sm:h-[32rem] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Availability / Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-medium text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-8 animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{personalInfo.status}</span>
        </div>

        {/* Headline Above Name */}
        <div className="mb-4">
          <p className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-widest text-emerald-400 font-semibold">
            {personalInfo.headline}
          </p>
        </div>

        {/* Hero Main Heading with Aurora Gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          Hi, I&apos;m{' '}
          <span className="text-gradient-aurora">
            {personalInfo.name}
          </span>
        </h1>

        {/* 1-Line Crisp Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16">
          {/* View Projects CTA */}
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-[#070B12] bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:brightness-110 rounded-2xl shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 ml-0.5" />
          </a>

          {/* Download Resume CTA */}
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-emerald-500/40 rounded-2xl backdrop-blur-xl shadow-glass hover:shadow-glass-hover transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            title="Resume link placeholder "
          >
            <FileText className="w-4 h-4 text-emerald-400" />
              
            <span >Download Resume</span>
          </a>
        </div>

        {/* Key Highlights / Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          {personalInfo.metrics.map((metric, index) => (
            <div
              key={index}
              className="glass-card p-4 rounded-2xl border border-white/[0.07] hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs font-medium text-slate-400 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] font-mono text-emerald-400/80 mt-1 flex items-center gap-1">
                <span>•</span>
                <span>{metric.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-slate-500 text-xs font-mono">
        <span>Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
