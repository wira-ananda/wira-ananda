import React from "react";
import { contentWidth, EmptySection } from "./HomePage";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion-projects";
import dataProjects from "@/data/dataProject.json";

import { FaChartBar } from "react-icons/fa";
import { VscEye } from "react-icons/vsc";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { LiaSchoolSolid } from "react-icons/lia";
import { FaTasks } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";

const iconMap: Record<string, React.ComponentType<any>> = {
  FaChartBar: FaChartBar,
  FaTasks: FaTasks,
  LiaSchoolSolid: LiaSchoolSolid,
  MdLocalMovies: MdLocalMovies,
};

const ProjectList = ({
  title,
  month,
  warnaLogo,
  icon: iconName,
  iconLink,
  projectLink,
}: {
  title: string;
  month: string;
  warnaLogo: string;
  icon?: string;
  iconLink?: string;
  projectLink?: string;
}) => {
  const Icon = iconName ? iconMap[iconName] : null;
  return (
    <div
      className={`group flex justify-between p-4.5 items-center border-y w-full transition-all duration-300`}
    >
      <div className="flex gap-5 items-center">
        <span
          className={`w-8 h-8 flex items-center justify-center rounded-md ${warnaLogo}`}
        >
          {iconLink && (
            <Image
              src={iconLink}
              alt="Project Logo"
              width={25}
              height={25}
              className="object-cover"
            />
          )}
          {Icon && <Icon size={17} className="text-white" />}
        </span>
        <div className="leading-snug text-[.8rem] flex flex-col text-left">
          <h3 className="font-semibold">{title}</h3>
          <h4 className="font-thin text-muted-foreground">{month}</h4>
        </div>
      </div>
      <div className="flex gap-3">
        {projectLink && (
          <a
            href={projectLink}
            className="hover:text-blue-500 transition-all duration-300"
          >
            <VscEye size={23} />
          </a>
        )}
        <AccordionTrigger>
          <div className="cursor-pointer hover:text-red-500 transition-all duration-300">
            <HiOutlineInformationCircle size={23} />
          </div>
        </AccordionTrigger>
      </div>
    </div>
  );
};

const ProjectDetail = ({
  projectDesc,
  techStack,
}: {
  projectDesc: string;
  techStack: string[];
}) => {
  return (
    <AccordionContent className="group p-4 items-center w-full grid grid-cols-1 gap-3">
      <figure className="w-full border h-50"></figure>
      <p>{projectDesc}</p>
      <div className="font-medium gap-2 flex flex-wrap max-w-full">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-1.5 border border-gray-600/60 bg-gray-600/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </AccordionContent>
  );
};

export default function Projects() {
  return (
    <section>
      <div className={`${contentWidth} mx-auto border-x text-sm`}>
        <div className={`flex justify-between items-center w-full px-4`}>
          <h1 className={`text-2xl font-semibold `}>Projects</h1>
        </div>
        <Accordion type="single" collapsible>
          {dataProjects.map((project) => (
            <AccordionItem key={project.id} value={project.id}>
              <ProjectList
                title={project.title}
                month={project.month}
                warnaLogo={project.warnaLogo}
                icon={project.icon}
                iconLink={project.iconLink}
                projectLink={project.projectLink}
              />
              <ProjectDetail
                projectDesc={project.projectDesc}
                techStack={project.techStack}
              />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <EmptySection />
    </section>
  );
}
