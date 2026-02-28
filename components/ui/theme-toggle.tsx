"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdWbSunny, MdNightlight } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Jangan render komponen apapun selama SSR
  }

  const onClick = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <>
      <div onClick={onClick} className={`${theme} cursor-pointer m-3`}>
        {theme === "light" ? (
          <MdWbSunny size={20} className="mx-auto" />
        ) : (
          <MdNightlight size={20} className="mx-auto" />
        )}
      </div>
    </>
  );
}
