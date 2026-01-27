'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ThemeConfig {
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  surveyorName: string;
}

export const defaultTheme: ThemeConfig = {
  logo: '/images/novello-logo.svg',
  primaryColor: '#7ED6C2',
  secondaryColor: '#2A383D',
  fontFamily: 'OpenSauce',
  surveyorName: 'James Brook',
};

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
  updateTheme: (updates: Partial<ThemeConfig>) => void;
  resetTheme: () => void;
  isCustomTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'novello-theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeConfig>(defaultTheme);
  const [isCustomTheme, setIsCustomTheme] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setThemeState(parsed);
        setIsCustomTheme(true);
      } catch (e) {
        console.error('Failed to parse stored theme:', e);
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.style.setProperty('--primary', theme.primaryColor);
    document.documentElement.style.setProperty('--surface-elevated', theme.secondaryColor);
  }, [theme, mounted]);

  const setTheme = (newTheme: ThemeConfig) => {
    setThemeState(newTheme);
    setIsCustomTheme(true);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newTheme));
  };

  const updateTheme = (updates: Partial<ThemeConfig>) => {
    const newTheme = { ...theme, ...updates };
    setTheme(newTheme);
  };

  const resetTheme = () => {
    setThemeState(defaultTheme);
    setIsCustomTheme(false);
    localStorage.removeItem(STORAGE_KEY);
    document.documentElement.style.setProperty('--primary', defaultTheme.primaryColor);
    document.documentElement.style.setProperty('--surface-elevated', defaultTheme.secondaryColor);
  };

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, updateTheme, resetTheme, isCustomTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
