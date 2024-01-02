import React, { ReactNode, createContext, useEffect } from "react";

export const Themecontext = createContext();

interface IThemeProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<IThemeProps> = ({children}) => {

  useEffect(() => {

  }, [])


  return (
    <Themecontext.Provider value={[theme, setTheme]}>
      {children}
    </Themecontext.Provider>
  )
}