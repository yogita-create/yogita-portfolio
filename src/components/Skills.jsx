import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Layout, Server, Code2, ShieldCheck, Cpu, CheckCircle2, Sparkles } from 'lucide-react';

export default function Skills() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getAccentBadge = (category) => {
    switch (category) {
      case 'emerald':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
      case 'cyan':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';
      case 'indigo':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20';
      case 'purple':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/20';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Core Competencies & <span className="text-gradient-cyan">Tooling</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Grouped into four core pillars spanning full-stack development, algorithms, and software testing.
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group ${category.borderGlow}`}
            >
              {/* Card top subtle gradient */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`}
              />

              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {category.skills.length} core proficiencies
                    </span>
                  </div>
                </div>

                {category.id === 'testing-qa' && (
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-purple-500/15 text-purple-300 border border-purple-500/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>QA-Backed</span>
                  </span>
                )}
              </div>

              {/* Skills Tags List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-white/10 transition-all duration-200 flex items-center justify-between group/skill"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover/skill:bg-emerald-400 transition-colors" />
                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${getAccentBadge(
                        category.accentColor
                      )}`}
                    >
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>

              {category.id === 'testing-qa' && (
                <div className="mt-4 p-3 rounded-xl bg-purple-500/[0.06] border border-purple-500/20 text-xs text-purple-200/90 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>
                    Reinforced by continuous QA debugging in real projects (e.g. 5-10 bugs resolved on Cerebro).
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
