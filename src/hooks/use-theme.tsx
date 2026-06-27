import { useState, useEffect, useCallback } from "react";

type Theme = "dark" | "light";

export function useTheme() {
  const theme: Theme = "light";

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("light");
  }, []);

  const toggleTheme = useCallback(() => {}, []);

  return { theme, toggleTheme } as const;
}
