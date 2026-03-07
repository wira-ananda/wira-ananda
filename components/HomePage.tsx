"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Hero from "@/components/hero";
import { useTheme } from "next-themes";
import Navbar from "@/components/nav";
import Opening from "./Opening";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Journey from "./journey";
import Footer from "./footer";

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
        <Hero id="hero" />
        <About id="about" />
        <Contact id="contact" />
        <Projects id="projects" />
        <Journey id="journey" />
        <Footer />
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
        transparent 15px`
      : `rgba(0,0,0,0.08),
        rgba(0,0,0,0.08) 0.8px,
        transparent 0.5px,
        transparent 10px`;
  return (
    <div
      className={`border-y grid md:grid-cols-[22.5%_55%_22.5%] grid-cols-[2.5%_95%_2.5%] h-6 md:h-9 ${
        theme === "dark" ? "dark-empty-section" : "light-empty-section"
      }`}
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
