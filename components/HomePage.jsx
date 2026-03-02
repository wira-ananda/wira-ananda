"use client";
import React from "react";
import Image from "next/image";
import Hero from "@/components/hero";
import { useTheme } from "next-themes";
import Navbar from "@/components/nav";

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${theme} border`}>
      <Navbar />
    </div>
  );
}
