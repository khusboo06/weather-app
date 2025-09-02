import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
    >
      {theme === "dark" ? <Sun size={25} /> : <Moon size={25} />}
    </button>
  );
}
