"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Hero from "@/components/hero";
import { useTheme } from "next-themes";
import Navbar from "@/components/nav";
import Opening from "./Opening";

export default function HomePage() {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`${theme}`}>
      {/* <Opening /> */}
      <>
        <Navbar />
        <Hero />
      </>
    </div>
  );
}

export const contentWidth = "md:w-[55%] w-[95%]";

export function EmptySection() {
  const { theme } = useTheme();
  const colorStripes =
    theme === "dark"
      ? `rgba(255,255,255,0.08),
        rgba(255,255,255,0.08) 0.8px,
        transparent 0.5px,
        transparent 10px`
      : `rgba(0,0,0,0.1),
        rgba(0,0,0,0.1) 0.8px,
        transparent 0.5px,
        transparent 10px`;
  return (
    <div
      className="border-y grid md:grid-cols-[22.5%_55%_22.5%] grid-cols-[2.5%_95%_2.5%] h-9"
      style={{
        backgroundImage: `
        repeating-linear-gradient(
          135deg,
          ${colorStripes}
        )
      `,
      }}
    >
      <div />
      <div className="border-x" />
      <div />
    </div>
  );
}
