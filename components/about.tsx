"use client";
import React from "react";
import { contentWidth, EmptySection } from "./HomePage";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  useAccordionItem, // Menggunakan useAccordionItem di dalam AccordionItem
} from "./ui/accordion";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function About() {
  return (
    <main>
      <Accordion type="multiple">
        <div className={`${contentWidth} mx-auto border-x text-sm `}>
          <AccordionItem value="uniqueValue">
            <AccordionHeader>
              <AccordionTrigger className="cursor-pointer flex justify-between items-center w-full px-4 transition-all duration-300">
                <h1 className="text-2xl font-semibold">About</h1>
                <AccordionTriggerWithIcon />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className="border-t">
              <AccordionItemContent />
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>
      <EmptySection />
    </main>
  );
}

function AccordionItemContent() {
  const { theme } = useTheme();
  const colorText = theme === "dark" ? "text-zinc-400" : "text-zinc-800";
  return (
    <article className="px-4 py-3 leading-relaxed gap-2 space-y-2 font-thin">
      <figure>Halo! Saya Wira Ananda 👋</figure>
      <p className={`text-sm leading-relaxed ${colorText}`}>
        <span className="font-semibold">Junior Full-Stack Developer </span> yang
        fokus membangun aplikasi web modern dengan UI konsisten dan integrasi
        sistem yang efisien. Berpengalaman mengerjakan project web nyata secara
        kolaboratif dan saat ini{" "}
        <span
          className="inline-flex items-center gap-2 pr-1.5 pl-2 rounded-full 
                   border border-emerald-500/60 bg-emerald-500/10 
                   text-emerald-400 font-medium"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="absolute inline-flex h-full w-full rounded-full 
                       bg-emerald-400 opacity-75 animate-ping"
            />
            <span
              className="relative inline-flex h-2.5 w-2.5 rounded-full 
                       bg-emerald-400 shadow-[0_0_10px_#34d399]"
            />
          </span>
          terbuka untuk bekerja
        </span>{" "}
        dan peluang kolaborasi.
      </p>
      <p>
        {" "}
        Saya terbiasa menggunakan{" "}
        <span
          className="inline-flex items-center gap-2 pr-1.5 pl-2 rounded-full 
                   border border-blue-500/60 bg-blue-500/10 
                   text-blue-400 font-medium"
        >
          <FaReact size={12} />
          React
        </span>
        ,{" "}
        <span
          className="inline-flex items-center gap-2 pr-1.5 pl-2 rounded-full 
                   border border-gray-600/60 bg-gray-600/10 
                   text-gray-400 font-medium"
        >
          <TbBrandNextjs size={12} />
          Next.js
        </span>
        ,{" "}
        <span
          className="inline-flex items-center gap-2 pr-1.5 pl-2 rounded-full 
                   border border-green-500/60 bg-green-500/10 
                   text-green-400 font-medium"
        >
          <FaNodeJs size={12} />
          Node.js
        </span>
        , dan{" "}
        <span
          className="inline-flex items-center gap-2 pr-1.5 pl-2 rounded-full 
                   border border-red-500/60 bg-red-500/10 
                   text-red-400 font-medium"
        >
          <FaLaravel size={12} />
          Laravel
        </span>{" "}
        dalam pengembangan aplikasi.
      </p>
    </article>
  );
}

function AccordionTriggerWithIcon() {
  const { isOpen } = useAccordionItem();

  return (
    <div className="">
      {isOpen ? (
        <ChevronUpIcon className="w-5 h-5" />
      ) : (
        <ChevronDownIcon className="w-5 h-5" />
      )}
    </div>
  );
}
