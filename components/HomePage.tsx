"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Hero from "@/components/hero";
import { useTheme } from "next-themes";
import Navbar from "@/components/nav";
import Opening from "./Opening";

export const contentWidth = "md:w-[55%] w-[95%]";

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
      {/* <Opening /> */}
      <>
        <Navbar />
        <Hero />
      </>
    </div>
  );
}
