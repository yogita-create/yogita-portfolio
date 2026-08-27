import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>04. ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Education & <span className="text-gradient-purple">Qualifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Formal computer science foundations in software development and advanced computing.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top gradient glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300">
                  <Calendar className="w-3 h-3 text-indigo-400" />
                  <span>{edu.period}</span>
                </span>
              </div>

              <div className="space-y-1 mb-4">
                <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-indigo-300 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-emerald-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{edu.institution}</span>
                </p>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-4">
                {edu.status}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed bg-white/[0.02] p-4 rounded-2xl border border-white/[0.04]">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
