import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { personalBrand } from '../data/portfolioData';
import ThemeSelector from './ThemeSelector';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-md"
          >
            <div className="w-8 h-8 rounded-lg bg-dark-800 border border-slate-700/80 flex items-center justify-center text-primary-400 group-hover:border-primary-500/50 group-hover:text-primary-300 transition-all">
              <span className="font-mono text-xs font-bold tracking-tighter">PM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight text-slate-100 group-hover:text-white">
                {personalBrand.name}
              </span>
              <span className="text-[10px] font-mono text-primary-400 uppercase tracking-wider hidden sm:block">
                Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 border border-slate-800/80 rounded-full px-3 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-primary-400 bg-primary-950/50 border border-primary-800/50 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Selector & Resume */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeSelector variant="dropdown" />

            <a
              href={personalBrand.resumeUrl}
              download="Poojith_S_Menon_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 bg-dark-850 hover:bg-dark-800 hover:text-white border border-slate-700 hover:border-primary-500/60 rounded-lg transition-all duration-200 shadow-sm hover:shadow-primary-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
            >
              <FileDown className="w-3.5 h-3.5 text-primary-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeSelector variant="dropdown" />

            <a
              href={personalBrand.resumeUrl}
              download="Poojith_S_Menon_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-primary-400 bg-dark-850 border border-primary-500/30 rounded-md"
            >
              <FileDown className="w-3 h-3" />
              <span>Resume</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white bg-dark-850 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-4 px-4 bg-dark-900/95 border border-slate-800 rounded-xl backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 space-y-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? 'text-primary-400 bg-dark-800 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span>{link.name}</span>
                  {activeSection === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                  )}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-800">
              <ThemeSelector variant="inline" />
            </div>

            <div className="pt-2">
              <a
                href={personalBrand.resumeUrl}
                download="Poojith_S_Menon_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors shadow-primary-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
