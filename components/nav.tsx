"use client";

import React, { useEffect, useState } from "react";
import { FiSearch as Search } from "react-icons/fi";
import { useTheme } from "next-themes";
import { PiMoonLight } from "react-icons/pi";
import { GoSun } from "react-icons/go";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { contentWidth } from "./HomePage";
import Image from "next/image";
import wiraLogoDark from "../public/img/wira-dark.svg";
import wiraLogoLight from "../public/img/wira-light.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { theme, setTheme } = useTheme();
  const wiraLogo = theme === "dark" ? wiraLogoLight : wiraLogoDark;

  const [showCommandCard, setShowCommandCard] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`sticky top-0 z-50 border-b  transition-all duration-300
    ${scrolled ? "backdrop-blur bg-background/80" : ""}`}
    >
      <div className="h-3.5 mx-auto border-b"></div>
      <div
        className={`${contentWidth} mx-auto border-l border-r flex gap-1 justify-end h-13`}
        suppressHydrationWarning={true}
      >
        <div
          className={`w-full m-2 flex items-center transition-all duration-300 justify-between`}
        >
          <div
            className={`
      flex items-center overflow-hidden
      transition-[width] duration-500 ease-out
      motion-reduce:transition-none
      ${scrolled ? "w-12" : "w-0"}
    `}
          >
            <Image
              width={400}
              height={400}
              src={wiraLogo}
              alt="Wira Ananda Logo"
              className={`
        w-8 ml-2
        transition-all duration-500 ease-out
        motion-reduce:transition-none
        will-change-transform
        ${
          scrolled
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
        }
      `}
              priority
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                setShowCommandCard(true);
              }}
              className={`cursor-pointer relative px-3 py-1.5 rounded-full text-xs font-medium  transition-all duration-300 flex items-center gap-2 border`}
              aria-label="Search (Cmd+K)"
              suppressHydrationWarning={true}
            >
              <Search className={`w-4 h-4 `} />
              <span className="hidden md:inline-block text-[10px] rounded font-mono border px-1.5 pt-1 py-0.5">
                ⌘ + K
              </span>
            </button>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
      </div>
      <CommandDialog
        open={showCommandCard}
        onOpenChange={setShowCommandCard}
        className={`${theme}`}
      >
        <Command className={`rounded-lg border`}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem className="cursor-pointer">Calendar</CommandItem>
              <CommandItem className="cursor-pointer">Search Emoji</CommandItem>
              <CommandItem className="cursor-pointer">Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem className="cursor-pointer">Profile</CommandItem>
              <CommandItem className="cursor-pointer">Billing</CommandItem>
              <CommandItem className="cursor-pointer">Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </nav>
  );
}
