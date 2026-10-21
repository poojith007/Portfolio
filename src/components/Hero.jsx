import React from 'react';
import { ArrowRight, FileDown, Github, Linkedin, Mail, ChevronDown, Layers, Terminal, Cpu, Code2 } from 'lucide-react';
import { personalBrand } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20 relative min-h-[92vh] flex flex-col justify-between pt-24 pb-8 overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] tech-radial-glow pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Brand & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-slate-800 text-xs text-slate-300 font-mono shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              <span>Open to Software Engineering Opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalBrand.name}
              </h1>
              
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-400 via-primary-300 to-primary-600 bg-clip-text text-transparent">
                  {personalBrand.primaryTitle}
                </div>
                <div className="text-lg sm:text-xl font-medium text-slate-300">
                  {personalBrand.secondaryPositioning}
                </div>
              </div>
            </div>

            {/* Hero Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalBrand.heroDescription}
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-500 active:bg-primary-700 rounded-lg shadow-lg shadow-primary-950/60 hover:shadow-primary-sm transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalBrand.resumeUrl}
                download="Poojith_S_Menon_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-dark-850 hover:bg-dark-800 hover:text-white border border-slate-700 hover:border-primary-500/50 rounded-lg transition-all duration-200 shadow-sm w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 group"
              >
                <FileDown className="w-4 h-4 text-primary-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social / Direct Channels: Clean GitHub · LinkedIn · Email */}
            <div className="pt-4 border-t border-slate-800/80 w-full flex items-center gap-3 text-sm">
              <a
                href={personalBrand.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-400 rounded"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-mono">GitHub</span>
              </a>

              <span className="text-slate-700">·</span>

              <a
                href={personalBrand.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-400 rounded"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-mono">LinkedIn</span>
              </a>

              <span className="text-slate-700">·</span>

              <a
                href={`mailto:${personalBrand.socialLinks.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-400 rounded"
                aria-label="Send direct email"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-mono">Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Development Focus Technical Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer subtle glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/15 to-primary-600/10 rounded-2xl blur-xl opacity-60" />
              
              {/* Technical Focus Container */}
              <div className="relative bg-dark-900 border border-slate-800/90 rounded-2xl p-6 shadow-2xl backdrop-blur-xl space-y-4">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    <span className="text-xs font-mono font-semibold tracking-wider text-slate-200 uppercase">
                      Development Focus
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-300">
                    Core Competencies
                  </span>
                </div>

                {/* Focus Area 1: Full-Stack Applications */}
                <div className="bg-dark-850/80 border border-slate-800 rounded-xl p-3.5 hover:border-primary-500/40 transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-primary-500/10 text-primary-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Full-Stack Applications</div>
                        <div className="text-[11px] text-slate-300 mt-0.5">Primary Focus · Web & APIs</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-mono text-primary-400 bg-primary-950/60 border border-primary-800/50 rounded">
                      Primary
                    </span>
                  </div>
                </div>

                {/* Focus Area 2: Python */}
                <div className="bg-dark-850/80 border border-slate-800 rounded-xl p-3.5 hover:border-primary-500/40 transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Python</div>
                        <div className="text-[11px] text-slate-300 mt-0.5">Software Development · Algorithms</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-mono text-slate-300 bg-dark-800 border border-slate-700/60 rounded">
                      Core
                    </span>
                  </div>
                </div>

                {/* Focus Area 3: C++ */}
                <div className="bg-dark-850/80 border border-slate-800 rounded-xl p-3.5 hover:border-primary-500/40 transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">C++</div>
                        <div className="text-[11px] text-slate-300 mt-0.5">Systems Foundations · Problem Solving</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-mono text-slate-300 bg-dark-800 border border-slate-700/60 rounded">
                      Core
                    </span>
                  </div>
                </div>

                {/* Focus Area 4: Embedded Systems */}
                <div className="bg-dark-850/80 border border-slate-800 rounded-xl p-3.5 hover:border-primary-500/40 transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Embedded Systems</div>
                        <div className="text-[11px] text-slate-300 mt-0.5">Systems Trajectory · Hardware Integration</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 rounded">
                      Developing
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll to Explore Indicator */}
      <div className="relative pt-8 pb-2 flex justify-center w-full">
        <a
          href="#about"
          className="group inline-flex flex-col items-center gap-1.5 text-slate-300 hover:text-primary-400 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-400 rounded-md py-1 px-3"
          aria-label="Scroll to explore about section"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-300 group-hover:text-primary-400 group-hover:translate-y-0.5 transition-all animate-bounce" />
        </a>
      </div>
    </section>
  );
}
