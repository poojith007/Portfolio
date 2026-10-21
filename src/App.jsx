import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col relative selection:bg-primary-500/25 selection:text-primary-200">
        
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary-600 text-white font-mono text-xs rounded-lg shadow-lg"
        >
          Skip to main content
        </a>

        {/* Ambient Cursor Follower with Dynamic Theme Glow */}
        <div
          className="pointer-events-none fixed -inset-px z-30 transition-opacity duration-300 opacity-30 hidden lg:block"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, var(--primary-glow-subtle), transparent 80%)`,
          }}
        />

        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Action */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-dark-850 hover:bg-dark-800 text-slate-400 hover:text-primary-400 border border-slate-800 hover:border-primary-500/40 shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

      </div>
    </ThemeProvider>
  );
}
