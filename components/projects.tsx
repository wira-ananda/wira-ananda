import React from "react";
import { contentWidth, EmptySection } from "./HomePage";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { FaChartBar } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  useAccordionItem,
} from "./ui/accordion";

const ProjectList = ({
  title,
  month,
  warnaLogo,
}: {
  title: string;
  month: string;
  warnaLogo: string;
}) => {
  return (
    <AccordionTrigger
      className={`
    group
    flex
    justify-between
    p-4
    cursor-pointer
    items-center
    border-y
    w-full
    transition-all
    duration-300
    `}
    >
      <div className="flex gap-5 items-center">
        <span
          className={`w-8 h-8 flex items-center justify-center rounded-md ${warnaLogo} `}
        >
          <FaChartBar size={17} className="text-white" />
        </span>
        <div className="leading-snug text-[.8rem] flex flex-col text-left">
          <h3 className="font-semibold">{title}</h3>
          <h3 className="font-thin text-muted-foreground">{month}</h3>
        </div>
      </div>
      <div className="flex gap-2">
        <a href="">
          <LuGithub size={18} />
        </a>
        <HiOutlineInformationCircle size={18} />
      </div>
    </AccordionTrigger>
  );
};

const ProjectDetail = () => {
  return (
    <AccordionContent
      className=" group
        p-4
        items-center w-full grid grid-cols-1 gap-3"
    >
      <figure className="w-full border h-50"></figure>
      <p>
        Human Resources System berbasis web yang memudahkan pengelolaan data
        karyawan, kehadiran, cuti, dan reimburse secara terpusat dan efisien.
      </p>
      <div className="font-medium gap-2 flex">
        <span className="px-1.5 border border-gray-600/60 bg-gray-600/10">
          Next.js
        </span>
        <span className="px-1.5 border border-gray-600/60 bg-gray-600/10">
          TanStack Query
        </span>
        <span className="px-1.5 border border-gray-600/60 bg-gray-600/10">
          Tailwind
        </span>
      </div>
    </AccordionContent>
  );
};

export default function Projects() {
  return (
    <section>
      {" "}
      <div className={`${contentWidth} mx-auto border-x text-sm`}>
        {" "}
        <div className={`flex justify-between items-center w-full px-4`}>
          <h1 className={`text-2xl font-semibold `}>Projects</h1>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="project-1">
            <ProjectList
              title="HR System"
              month="Apr 2025"
              warnaLogo="bg-linear-to-br from-red-400 to-red-800"
            />
            <ProjectDetail />
          </AccordionItem>
          <AccordionItem value="project-2">
            <ProjectList
              title="HR System"
              month="Apr 2025"
              warnaLogo="bg-linear-to-br from-red-400 to-red-800"
            />
            <ProjectDetail />
          </AccordionItem>
        </Accordion>
      </div>
      <EmptySection />
    </section>
  );
}
