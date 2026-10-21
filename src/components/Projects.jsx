import React, { useState } from 'react';
import { ExternalLink, Github, CheckCircle2, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="scroll-mt-20 py-24 relative border-t border-slate-900 bg-dark-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-6 bg-primary-500 rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              Featured Projects
            </h2>
            <div className="h-px bg-slate-800 w-12 sm:w-24 ml-2" />
          </div>

          <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">
            3 Engineering Case Studies
          </span>
        </div>

        <p className="text-sm text-slate-400 max-w-2xl mb-12">
          Practical applications spanning full-stack e-commerce architecture, audio streaming infrastructure, and ongoing edge AI accessibility systems.
        </p>

        {/* Project Cards Grid */}
        <div className="space-y-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 group ${
                project.featured
                  ? 'bg-gradient-to-b from-dark-900 via-dark-900 to-dark-950 border-2 border-primary-500/40 shadow-xl shadow-primary-950/30'
                  : 'bg-dark-900/90 border border-slate-800/90 hover:border-slate-700 shadow-xl'
              }`}
            >
              {/* Subtle top indicator bar */}
              <div
                className={`h-1 w-full ${
                  project.isDeveloping
                    ? 'bg-gradient-to-r from-primary-400 via-primary-500 to-amber-500'
                    : 'bg-gradient-to-r from-primary-500 to-primary-700'
                }`}
              />

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Metadata & Narrative */}
                  <div className="lg:col-span-8 space-y-5">
                    
                    {/* Status & Number Bar */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs font-bold text-primary-400">
                        PROJECT {project.number}
                      </span>
                      <span className="text-slate-700 font-mono">/</span>
                      
                      {project.isDeveloping ? (
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            Currently in Development
                          </span>
                          <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                            Systems & AI Focus
                          </span>
                        </div>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          Completed
                        </span>
                      )}
                    </div>

                    {/* Titles */}
                    <div className="space-y-1.5">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-primary-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-primary-400">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                      {project.description}
                    </p>

                    {/* Highlight Features Checklist */}
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-medium">
                        {project.isDeveloping ? 'Work Involving:' : 'Key Capabilities:'}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-dark-850 text-slate-300 border border-slate-800"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary-400" />
                            <span>{highlight}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Tag Group */}
                    <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
                      <span className="text-xs font-mono text-slate-300 mr-2">Stack:</span>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono font-medium text-primary-300 bg-primary-950/40 border border-primary-800/40 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Right Column: Actions & Technical Summary Box */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 pt-2 lg:pt-0">
                    
                    <div className="bg-dark-850/80 border border-slate-800 rounded-xl p-5 space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2.5">
                        <span>ARCHITECTURE</span>
                        <span className="text-primary-400">CASE STUDY</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {project.caseStudy.whatWasBuilt}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-dark-800 hover:bg-dark-750 border border-slate-700 hover:border-primary-500/50 rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 group/btn"
                      >
                        <span>View Detailed Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 text-primary-400 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-dark-850 hover:bg-dark-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                          <ArrowUpRight className="w-3 h-3 text-slate-400" />
                        </a>

                        {project.liveDemo ? (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-primary-600 hover:bg-primary-500 rounded-lg shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        ) : (
                          <div className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-mono text-slate-300 bg-dark-850/60 border border-slate-800/80 rounded-lg select-none">
                            <Clock className="w-3 h-3 text-amber-400" />
                            <span>In Dev</span>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
