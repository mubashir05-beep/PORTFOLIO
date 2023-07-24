"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import "../app/globals.css";
import NextNProgress from "nextjs-progressbar";
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className=" w-auto rounded-lg p-2 mb-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? (
          <SunIcon className="h-6 w-6 text-orange-300" />
        ) : (
          <MoonIcon className="h-6 w-6 text-slate-800" />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
