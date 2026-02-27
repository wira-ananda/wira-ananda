"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
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
      <Button onClick={onClick}>
        {theme === "light" ? <MdWbSunny /> : <MdNightlight />}
      </Button>
    </>
  );
}
