import React from 'react';
import { Layers, Terminal, BookOpen } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 relative border-t border-slate-900 bg-dark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-6 bg-primary-500 rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
            {aboutData.heading}
          </h2>
          <div className="h-px bg-slate-800 flex-1 ml-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Statement Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-dark-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx} className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-primary-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                  <span>Primary: Full-Stack Web Applications</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Developing: C++ & Embedded Systems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Practical Development */}
            <div className="bg-dark-900/60 border border-slate-800/80 rounded-xl p-5 hover:border-primary-500/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-primary-500/10 border border-primary-500/20 text-primary-400 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Full-Stack Execution</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    End-to-end web applications with modular REST architectures, state management, and reliable data persistence.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Systems Direction */}
            <div className="bg-dark-900/60 border border-slate-800/80 rounded-xl p-5 hover:border-primary-500/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Emerging Systems Focus</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Strengthening Python and C++ foundations with an active development direction toward embedded systems and computer vision.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Academic Baseline */}
            <div className="bg-dark-900/60 border border-slate-800/80 rounded-xl p-5 hover:border-primary-500/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Information Science & Engineering</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    East Point College of Engineering and Technology · Expected Graduation 2027.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
