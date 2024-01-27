import { useEffect, useState } from "react";
import { Theme } from "../../global.types";
import { LOCAL_STORAGE_KEYS } from "../../global.constants";
import { AppContext } from ".";

type AppContextProviderProps = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const lastTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.THEME);
    if (lastTheme) {
      setTheme(lastTheme as Theme);
    }
  }, []);

  const handleThemeChange = (nextTheme: Theme) => {
    setTheme(nextTheme);
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, nextTheme);
  };

  return (
    <AppContext.Provider
      value={{
        handleThemeChange,
        theme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
