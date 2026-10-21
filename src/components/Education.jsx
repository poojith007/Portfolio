import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-20 relative border-t border-slate-900 bg-dark-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-6 bg-primary-500 rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
            Education
          </h2>
          <div className="h-px bg-slate-800 flex-1 ml-4" />
        </div>

        <p className="text-sm text-slate-400 max-w-2xl mb-8">
          Academic foundation in Information Science & Engineering, algorithms, and computing fundamentals.
        </p>

        {/* Clean, Non-overdesigned Education Card */}
        <div className="max-w-3xl">
          <div className="bg-dark-900/80 border border-slate-800 hover:border-slate-700/90 rounded-2xl p-6 sm:p-8 transition-colors shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 shrink-0 mt-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {educationData.degree}
                  </h3>
                  <div className="text-sm font-medium text-primary-400">
                    {educationData.institution}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-300" />
                      <span>{educationData.location}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary-400" />
                      <span>Expected Graduation: {educationData.graduation}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Graduation Tag */}
              <div className="sm:self-start">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary-950/60 text-primary-300 border border-primary-800/50">
                  Class of {educationData.graduation}
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
