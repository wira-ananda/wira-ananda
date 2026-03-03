import React from "react";
import { contentWidth, EmptySection } from "./HomePage";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

export default function Projects() {
  return (
    <section>
      {" "}
      <div
        className={`${contentWidth} mx-auto border-x text-sm grid grid-cols-1 md:grid-cols-2 gap-4`}
      >
        {" "}
        <div className={`flex justify-between items-center w-full px-4`}>
          <h1 className={`text-2xl font-semibold `}>Projects</h1>
          <div></div>
        </div>
      </div>
      <EmptySection />
    </section>
  );
}
