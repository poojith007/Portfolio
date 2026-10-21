import React from 'react';
import { personalBrand } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-dark-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity */}
          <div className="flex flex-col items-center sm:items-start space-y-1">
            <span className="text-sm font-bold text-white tracking-tight">
              {personalBrand.name}
            </span>
            <span className="text-xs font-mono text-primary-400">
              {personalBrand.primaryTitle}
            </span>
          </div>

          {/* Direct Links */}
          <div className="flex items-center gap-6 text-xs font-mono text-slate-400">
            <a
              href={personalBrand.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-800">·</span>
            <a
              href={personalBrand.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-800">·</span>
            <a
              href={`mailto:${personalBrand.socialLinks.email}`}
              className="hover:text-primary-400 transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs font-mono text-slate-300">
            {personalBrand.meta.copyright}
          </div>

        </div>
      </div>
    </footer>
  );
}
