import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Code, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05080E] py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Code className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-display font-bold text-base text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Full-Stack (MERN) Developer | Java & DSA | Software Testing
            </p>
          </div>

          {/* Quick nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-emerald-300 transition-colors">About</a>
            <span>•</span>
            <a href="#skills" className="hover:text-emerald-300 transition-colors">Skills</a>
            <span>•</span>
            <a href="#projects" className="hover:text-emerald-300 transition-colors">Projects</a>
            <span>•</span>
            <a href="#education" className="hover:text-emerald-300 transition-colors">Education</a>
            <span>•</span>
            <a href="#contact" className="hover:text-emerald-300 transition-colors">Contact</a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/30 text-xs font-mono text-slate-300 hover:text-white transition-all group"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        {/* Copyright strip */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
        </div>

      </div>
    </footer>
  );
}
