"use client";
import React, { useState } from "react";
import { contentWidth, EmptySection } from "./HomePage";
import Image from "next/image";
import { useTheme } from "next-themes";
import dataProjects from "@/data/dataProject.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion-projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FaChartBar } from "react-icons/fa";
import { VscEye } from "react-icons/vsc";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { LiaSchoolSolid } from "react-icons/lia";
import { FaTasks } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { Button } from "./ui/button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const iconMap: Record<string, React.ComponentType<any>> = {
  FaChartBar: FaChartBar,
  FaTasks: FaTasks,
  LiaSchoolSolid: LiaSchoolSolid,
  MdLocalMovies: MdLocalMovies,
  BsPersonCircle: BsPersonCircle,
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
  projectImage,
}: {
  projectDesc: string;
  techStack: string[];
  projectImage?: string[];
}) => {
  return (
    <AccordionContent className="group p-4 items-center w-full grid grid-cols-1 gap-3">
      {projectImage && (
        <figure className="w-full border">
          <Carousel className="relative">
            {projectImage.length >= 2 && (
              <>
                <CarouselPrevious className="absolute left-3 z-20 shadow" />
                <CarouselNext className="absolute right-3 z-20 shadow" />
              </>
            )}

            <CarouselContent>
              {projectImage?.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative mx-auto w-full aspect-video">
                    <Image
                      src={img}
                      alt={`Project image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </figure>
      )}
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
  const { theme } = useTheme();
  const [showAll, setShowAll] = useState(false);

  const projectsToShow = showAll ? dataProjects : dataProjects.slice(0, 3);

  return (
    <section>
      <div className={`${contentWidth} mx-auto border-x text-sm`}>
        <div className={`flex justify-between items-center w-full px-4`}>
          <h1 className={`text-2xl font-semibold `}>Projects</h1>
        </div>
        <Accordion type="single" collapsible>
          {projectsToShow.map((project) => (
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
                projectImage={project.projectImage}
              />
            </AccordionItem>
          ))}
        </Accordion>
        {dataProjects.length > 3 && (
          <div className="flex justify-center">
            <Button
              className={`${theme} w-full px-4 border rounded hover:bg-gray-100 transition-all duration-300 cursor-pointer`}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </Button>
          </div>
        )}
      </div>
      <EmptySection />
    </section>
  );
}
