"use client"; // Menandai komponen ini hanya untuk sisi klien

import React, { useEffect, useState } from "react";
import { FiSearch as Search } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { PiMoonLight } from "react-icons/pi";
import { GoSun } from "react-icons/go";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onSearchClick = () => {
    console.log("Search clicked");
  };

  const onThemeClick = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav className={``}>
      <div className="h-2 mx-auto border"></div>
      <div
        className={`md:w-[50%] w-[95%] mx-auto border-l border-r flex gap-1 justify-end`}
        suppressHydrationWarning={true}
      >
        <div className="flex m-2 gap-2">
          <button
            onClick={onSearchClick}
            className={`cursor-pointer relative px-3 py-1.5 rounded-full text-xs font-medium  transition-all duration-300 flex items-center gap-2 border`}
            aria-label="Search (Cmd+K)"
          >
            <Search className={`w-4 h-4 `} />
            <span className="hidden md:inline-block text-[10px] rounded font-mono border px-1.5 pt-1 py-0.5">
              ⌘ + K
            </span>
          </button>
          <button
            onClick={onThemeClick}
            className={`cursor-pointer relative px-3 py-1.5 rounded-full text-xs font-medium  hover:text-gray-900  transition-all duration-300 flex items-center gap-2 border`}
            aria-label="Switch Theme"
            suppressHydrationWarning={true}
          >
            {theme === "light" ? (
              <GoSun size={15} className="mx-auto" />
            ) : (
              <PiMoonLight size={15} className="mx-auto" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
