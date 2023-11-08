import React, { PropsWithChildren, useContext, useState } from "react";
import { usePersistState } from "../hooks/usePersistState";

const ThemeContext = React.createContext({
  theme: "",
  changeTheme: (newTheme: string) => {},
});

export function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = usePersistState("theme", "light");

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
