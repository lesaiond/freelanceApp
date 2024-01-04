// ThemeToggle.tsx
import React, { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = React.createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeToggle: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
