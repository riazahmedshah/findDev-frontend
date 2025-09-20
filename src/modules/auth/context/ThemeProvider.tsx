import  { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

// Define the shape of the context value
interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

// Create a default value for the context to prevent the error
const defaultThemeContext: ThemeContextType = {
  theme: 'dark', // Default theme is dark
  toggleTheme: () => {}, // Provide a no-op function as default
};

// Create the context with the default value
const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

// Define props for ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};