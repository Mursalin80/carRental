"use client";
import { useState, createContext, useContext, ReactNode } from "react";

const ThemeContext = createContext<{
  theme: string;
  toggleTheme: (theme: string) => void;
}>({
  theme: "light",
  toggleTheme: (theme) => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = (theme: string) => setTheme(theme);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
