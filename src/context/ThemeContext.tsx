import React, { PropsWithChildren, useContext, useState } from "react";

const ThemeContext = React.createContext({
  theme: "",
  changeTheme: (newTheme: string) => {},
});

export function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<string>("light");

  const changeTheme = (newTheme: string) => setTheme(newTheme);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
