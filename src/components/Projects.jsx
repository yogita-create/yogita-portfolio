import React from 'react';
import { projectsData } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Sparkles, Bug, CheckCircle, Cpu, Zap, Layers, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const cerebro = projectsData.find((p) => p.id === 'cerebro');
  const aw = projectsData.find((p) => p.id === 'aw');

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03. FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Flagship & <span className="text-gradient-aurora">Core Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Real-world systems engineered with full-stack MERN architectures, AI integration, and computer vision.
          </p>
        </div>

        <div className="space-y-10">
          
          {/* FLAGSHIP PROJECT: Cerebro (Larger, prominent card) */}
          {cerebro && (
            <div className="glass-card p-6 sm:p-10 rounded-3xl border-2 border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_0_50px_rgba(16,185,129,0.12)] transition-all duration-300 relative overflow-hidden group">
              {/* Aurora gradient shine top border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500" />

              {/* Background ambient glow inside card */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

              <div className="relative z-10">
                {/* Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 text-xs font-semibold text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span>{cerebro.badge}</span>
                  </div>

                  {/* Deployment pill */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.04] px-3 py-1.5 rounded-xl border border-white/[0.08]">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Frontend: Vercel | Backend: Render</span>
                  </div>
                </div>

                {/* Title and Subtitle */}
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    {cerebro.title}
                  </h3>
                  <p className="text-sm font-mono text-cyan-400/90 mt-1">
                    {cerebro.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {cerebro.description}
                </p>

                {/* Testing Skill Proof Point (Prominent callout as requested) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-purple-500/30 mb-6 shadow-inner relative overflow-hidden">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Bug className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-mono text-purple-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Software Testing & QA Proof Point</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Found and fixed <strong className="text-emerald-400 font-semibold">5–10 critical bugs</strong> across multiple rigorous testing rounds—including PDF chunk parsing edge cases, context token truncation, Google OAuth token refresh race conditions, and session memory leak isolation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="mb-8">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Technologies & Architecture</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cerebro.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-emerald-500/30 rounded-xl transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links (Placeholders) */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
                  <a
                    href={cerebro.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#070B12] bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:brightness-110 rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={cerebro.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/40 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4 text-emerald-400" />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* PROJECT 2: Agent Workspace- A Project Management System */}
          {aw && (
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group">
              {/* Card top subtle line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{aw.badge}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-lg border border-white/[0.05]">
                  Tool for Project Management
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {aw.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
                  {aw.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {aw.description}
                </p>

                {/* Performance Tuning Callout */}
                <div className="p-4 rounded-2xl bg-cyan-500/[0.04] border border-cyan-500/20 mb-6 flex items-start gap-3">
                  <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-cyan-300 font-medium">Performance Optimization</strong> <br/>Added indexes to frequently queried MongoDB collections to speed up task lookups, cached AI agent responses to avoid redundant processing for repeated instructions, and debounced API calls to reduce unnecessary requests during rapid user input.
                </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {aw.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-white/[0.03] border border-white/[0.06] rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
                  <a
                    href={aw.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#070B12] bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:brightness-110 rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    title="Video Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={aw.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 rounded-xl transition-all duration-200"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GitHub Code</span>
                  </a>

                </div> 
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
