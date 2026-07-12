"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 opacity-50" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      style={{
        background: "var(--toggle-bg)",
        border: "1px solid var(--toggle-border)",
      }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div
        className={`absolute transition-all duration-200 ease-out ${
          isDark ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 rotate-90"
        }`}
      >
        <Moon size={18} />
      </div>
      <div
        className={`absolute transition-all duration-200 ease-out ${
          isDark ? "scale-0 opacity-0 -rotate-90" : "scale-100 opacity-100 rotate-0"
        }`}
      >
        <Sun size={18} />
      </div>
    </button>
  );
}
