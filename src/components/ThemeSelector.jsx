import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeSelector({ variant = 'dropdown' }) {
  const { theme, currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Mobile / Inline Mode
  if (variant === 'inline') {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
          <Palette className="w-3.5 h-3.5 text-primary-400" />
          <span>Accent Theme</span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {themes.map((t) => {
            const isActive = t.id === theme;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTheme(t.id)}
                title={`${t.name}: ${t.tagline}`}
                className={`relative flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? 'bg-dark-800 border-primary-500 shadow-primary-sm'
                    : 'bg-dark-900/80 border-slate-800 hover:border-slate-700 hover:bg-dark-850'
                }`}
                aria-label={`Select ${t.name} theme`}
              >
                <span
                  className="w-5 h-5 rounded-full shadow-inner border border-white/20 transition-transform"
                  style={{
                    backgroundColor: t.accentColor,
                    boxShadow: isActive ? `0 0 10px ${t.accentColor}` : 'none',
                    transform: isActive ? 'scale(1.15)' : 'scale(1)',
                  }}
                />
                <span className="text-[10px] font-mono mt-1 text-slate-300 truncate max-w-full">
                  {t.name.split(' ')[0]}
                </span>
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary-500 rounded-full flex items-center justify-center text-white">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Dropdown Mode
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Current theme: ${currentTheme.name}. Click to change theme.`}
        className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 bg-dark-850 hover:bg-dark-800 hover:text-white border border-slate-700 hover:border-primary-500/60 rounded-lg transition-all duration-200 shadow-sm hover:shadow-primary-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 group"
      >
        <Palette className="w-3.5 h-3.5 text-primary-400 group-hover:rotate-12 transition-transform duration-200" />
        <span
          className="w-2 h-2 rounded-full transition-all"
          style={{
            backgroundColor: currentTheme.accentColor,
            boxShadow: `0 0 8px ${currentTheme.accentColor}`,
          }}
        />
        <span className="hidden xl:inline text-slate-300 group-hover:text-white">
          Theme
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-dark-900 border border-slate-700/80 rounded-xl shadow-2xl shadow-black/80 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 backdrop-blur-xl">
          <div className="px-3 py-2 border-b border-slate-800/80 flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-primary-400" />
              Accent Theme
            </span>
            <span className="text-[10px] font-mono text-primary-400 bg-dark-800 px-1.5 py-0.5 rounded border border-slate-700">
              5 Palettes
            </span>
          </div>

          <div className="p-1 space-y-1 mt-1">
            {themes.map((t) => {
              const isActive = t.id === theme;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all duration-150 group ${
                    isActive
                      ? 'bg-dark-800/90 text-white border border-primary-500/50 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-dark-800/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0 border border-white/20 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: t.accentColor,
                        boxShadow: isActive ? `0 0 10px ${t.accentColor}` : 'none',
                      }}
                    />
                    <div className="truncate">
                      <div className="text-xs font-medium text-white flex items-center gap-1.5">
                        <span>{t.name}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono truncate">
                        {t.tagline}
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <Check className="w-4 h-4 text-primary-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
