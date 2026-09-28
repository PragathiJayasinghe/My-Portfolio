import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full glass hover:border-primary/60 hover:text-primary transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
    >
      {/* Sun icon for switching to light mode */}
      <Sun
        className={`w-5 h-5 transition-all duration-500 transform ${
          isDark
            ? "rotate-90 scale-0 opacity-0 absolute"
            : "rotate-0 scale-100 opacity-100 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
        }`}
      />

      {/* Moon icon for switching to dark mode */}
      <Moon
        className={`w-5 h-5 transition-all duration-500 transform ${
          isDark
            ? "rotate-0 scale-100 opacity-100 text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]"
            : "-rotate-90 scale-0 opacity-0 absolute"
        }`}
      />
    </button>
  );
};
