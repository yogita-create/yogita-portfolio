import React from 'react';
import { targetRoles } from '../data/portfolioData';
import { Target, CheckCircle2 } from 'lucide-react';

export default function TargetRoles() {
  return (
    <section id="roles" className="py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)]">
          {/* Subtle gradient banner glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-20 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            {/* Strip Label */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold font-display uppercase tracking-wider text-white">
                  Target Roles
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Actively interviewing & available
                </p>
              </div>
            </div>

            {/* Horizontal Row of Tags / Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {targetRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-emerald-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-emerald-300 transition-all duration-200 shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/70 group-hover:text-emerald-400 transition-colors" />
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
