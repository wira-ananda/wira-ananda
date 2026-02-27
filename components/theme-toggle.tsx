"use client";

import React from "react";
import { useTheme } from "next-themes"; // Gunakan useTheme dari next-themes

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme(); // Mengambil tema dan fungsi setTheme

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
