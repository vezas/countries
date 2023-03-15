import { createContext, useState, ReactNode, FC, useEffect } from 'react';

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

interface IThemeContextProvider {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  toggleTheme: () => {
    return;
  }
});

export const ThemeContextProvider: FC<IThemeContextProvider> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') setTheme('dark');
    else setTheme('light');
    document.querySelector('body')?.setAttribute('data-theme', storedTheme || theme);
  }, []);

  useEffect(() => {
    document.querySelector('body')?.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
