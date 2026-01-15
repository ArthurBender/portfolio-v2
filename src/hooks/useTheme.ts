import { useEffect, useState } from "react";

const THEME_KEY = "theme";
export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");

    const newTheme: Theme = isDark ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
