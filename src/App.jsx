import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TargetRoles from './components/TargetRoles';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CheckCircle, Info } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="relative min-h-screen bg-[#070B12] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden font-sans">
      
      {/* 
        AURORA BACKGROUND SYSTEM:
        Multi-layered ambient blurred glow meshes with subtle keyframe movement 
      */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />

        {/* Emerald Aurora Orb (Top-Right) */}
        <div className="absolute -top-40 right-[-10%] w-[45rem] h-[45rem] rounded-full bg-gradient-to-br from-emerald-500/12 via-teal-500/8 to-transparent blur-[120px] animate-aurora-glow-1" />

        {/* Cyan / Blue Aurora Orb (Mid-Left) */}
        <div className="absolute top-[35%] -left-[15%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-cyan-500/12 via-blue-500/8 to-transparent blur-[140px] animate-aurora-glow-2" />

        {/* Violet / Indigo Aurora Orb (Bottom-Right) */}
        <div className="absolute -bottom-20 right-[5%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-tl from-indigo-500/12 via-purple-500/8 to-transparent blur-[150px] animate-aurora-glow-3" />
      </div>

      {/* Top Navbar */}
      <Navbar />

      {/* Main Portfolio Sections in Requested Order */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Section */}
        <Projects />

        {/* 5. Target Roles Strip */}
        <TargetRoles />

        {/* 6. Education Section */}
        <Education />

        {/* 7. Contact Section */}
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl glass-card border border-emerald-500/40 bg-slate-900/90 text-slate-100 text-xs font-mono shadow-2xl shadow-emerald-500/20 backdrop-blur-xl">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

    </div>
  );
}
