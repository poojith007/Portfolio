import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = [
  {
    id: 'blue',
    name: 'Electric Blue',
    tagline: 'Cyber Cyan & Electric Blue',
    accentColor: '#38bdf8',
    previewGradient: 'from-sky-400 to-blue-600',
    dotColor: '#38bdf8',
  },
  {
    id: 'violet',
    name: 'Cyberpunk Violet',
    tagline: 'Neon Violet & Electric Purple',
    accentColor: '#c084fc',
    previewGradient: 'from-purple-400 to-violet-600',
    dotColor: '#c084fc',
  },
  {
    id: 'emerald',
    name: 'Emerald Matrix',
    tagline: 'Neo Terminal & Mint Green',
    accentColor: '#34d399',
    previewGradient: 'from-emerald-400 to-teal-600',
    dotColor: '#34d399',
  },
  {
    id: 'amber',
    name: 'Sunset Amber',
    tagline: 'Warm Gold & Burning Ember',
    accentColor: '#fbbf24',
    previewGradient: 'from-amber-400 to-orange-600',
    dotColor: '#fbbf24',
  },
  {
    id: 'rose',
    name: 'Crimson Rose',
    tagline: 'Hyper Ruby & Neon Coral',
    accentColor: '#fb7185',
    previewGradient: 'from-rose-400 to-red-600',
    dotColor: '#fb7185',
  },
];

const ThemeContext = createContext({
  theme: 'blue',
  currentTheme: THEMES[0],
  setTheme: () => {},
  themes: THEMES,
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved && THEMES.some((t) => t.id === saved)) {
        return saved;
      }
    } catch {
      // LocalStorage access might be blocked
    }
    return 'blue';
  });

  const setTheme = (newThemeId) => {
    if (THEMES.some((t) => t.id === newThemeId)) {
      setThemeState(newThemeId);
      try {
        localStorage.setItem('portfolio-theme', newThemeId);
      } catch {
        // LocalStorage access might be blocked
      }
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const currentTheme = THEMES.find((t) => t.id === theme) || THEMES[0];

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
