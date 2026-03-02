"use client";

import React, { useEffect, useState } from "react";
import { FiSearch as Search } from "react-icons/fi";
import { usePathname } from "next/navigation";
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

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { theme, setTheme } = useTheme();
  const [showCommandCard, setShowCommandCard] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className={`border-b`}>
      <div className="h-2 mx-auto border-b"></div>
      <div
        className={`md:w-[50%] w-[95%] mx-auto border-l border-r flex gap-1 justify-end`}
        suppressHydrationWarning={true}
      >
        <div className="flex m-2 gap-2">
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
      <CommandDialog
        open={showCommandCard}
        onOpenChange={setShowCommandCard}
        className={`${theme}`}
      >
        <Command className={`max-w-sm rounded-lg border`}>
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
