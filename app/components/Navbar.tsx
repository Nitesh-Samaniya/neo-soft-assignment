"use client";

import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="h-14 flex items-center justify-between">
          <span
            className="text-lg font-semibold"
            style={{ color: "var(--brand-color)" }}
          >
            Neo Soft
          </span>

          <button
            onClick={toggleTheme}
            className="cursor-pointer px-3 py-1 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-800"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}
