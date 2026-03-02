"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Hero from "@/components/hero";
import { useTheme } from "next-themes";
import Navbar from "@/components/nav";

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`${theme}`}>
      <Navbar />
      <Hero />
    </div>
  );
}
