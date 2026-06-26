import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative grid h-10 w-10 place-items-center rounded-full bg-foreground/5 transition-colors hover:bg-foreground/10 light:bg-black/5 light:hover:bg-black/10"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      id="theme-toggle"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            <Sun className="h-[1.15rem] w-[1.15rem] text-amber-300" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            <Moon className="h-[1.15rem] w-[1.15rem] text-indigo-500" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
