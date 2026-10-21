import React from 'react';
import { Layers, Terminal, Database, GitBranch } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const getIcon = (name) => {
    switch (name) {
      case 'Layers': return <Layers className="w-5 h-5 text-primary-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-primary-400" />;
      case 'Database': return <Database className="w-5 h-5 text-primary-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-primary-400" />;
      default: return <Layers className="w-5 h-5 text-primary-400" />;
    }
  };

  return (
    <section id="skills" className="scroll-mt-20 py-20 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-6 bg-primary-500 rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
            Technical Skills
          </h2>
          <div className="h-px bg-slate-800 flex-1 ml-4" />
        </div>

        <p className="text-sm text-slate-400 max-w-2xl mb-10">
          Core toolsets and programming languages applied across full-stack development, database architecture, and ongoing systems exploration.
        </p>

        {/* 4 Focused Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="bg-dark-900/80 border border-slate-800/90 hover:border-primary-500/40 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-dark-800 border border-slate-700/60">
                    {getIcon(category.icon)}
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {category.category}
                  </h3>
                </div>

                {/* Category Summary */}
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.summary}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/60">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono font-medium text-slate-200 bg-dark-800 hover:bg-dark-750 border border-slate-700/70 rounded-md transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
