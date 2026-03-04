import React from "react";
import { contentWidth, EmptySection } from "./HomePage";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  useAccordionItem,
} from "./ui/accordion";
import { useTheme } from "next-themes";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { FaChartBar } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { LiaSchoolSolid } from "react-icons/lia";
import { IconType } from "react-icons/lib";
import { FaTasks } from "react-icons/fa";

const ProjectList = ({
  title,
  month,
  warnaLogo,
  icon: Icon,
  linkProject,
}: {
  title: string;
  month: string;
  warnaLogo: string;
  icon: string | IconType;
  linkProject?: string;
}) => {
  return (
    <div
      className={`
        group
        flex
        justify-between
        p-4
        items-center
        border-y
        w-full
        transition-all
        duration-300
      `}
    >
      <div className="flex gap-5 items-center">
        <span
          className={`w-8 h-8 flex items-center justify-center rounded-md ${warnaLogo}`}
        >
          {/* Cek jika icon adalah URL gambar */}
          {typeof Icon === "string" ? (
            <Image
              src={Icon}
              alt="Project Logo"
              width={25}
              height={25}
              className="object-cover"
            />
          ) : (
            <Icon size={17} className="text-white" />
          )}
        </span>
        <div className="leading-snug text-[.8rem] flex flex-col text-left">
          <h3 className="font-semibold">{title}</h3>
          <h4 className="font-thin text-muted-foreground">{month}</h4>
        </div>
      </div>
      <div className="flex gap-3">
        {linkProject && (
          <a
            href={linkProject}
            className="hover:text-blue-500 transition-all duration-300"
          >
            <LuGithub size={23} />
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
    <AccordionContent
      className=" group
        p-4
        items-center w-full grid grid-cols-1 gap-3"
    >
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
      {" "}
      <div className={`${contentWidth} mx-auto border-x text-sm`}>
        {" "}
        <div className={`flex justify-between items-center w-full px-4`}>
          <h1 className={`text-2xl font-semibold `}>Projects</h1>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="project-1">
            <ProjectList
              title="HR System - Frontend Developing"
              month="Apr 2025"
              warnaLogo="bg-linear-to-br from-red-400 to-red-800"
              icon={FaChartBar}
            />
            <ProjectDetail
              projectDesc="   Human Resources System berbasis web yang memudahkan pengelolaan data
        karyawan, kehadiran, cuti, dan reimburse secara terpusat dan efisien."
              techStack={["Next.js", "TanStack Query", "Tailwind"]}
            />
          </AccordionItem>
          <AccordionItem value="project-2">
            <ProjectList
              title="Tryout System - Frontend Developing"
              month="Jan 2025"
              warnaLogo="bg-linear-to-br from-blue-400 to-blue-800"
              icon={LiaSchoolSolid}
            />
            <ProjectDetail
              projectDesc="System platform ujian online yang menyederhanakan proses penyelenggaraan tryout dengan manajemen soal, penilaian otomatis, serta pembaruan data real-time, memastikan pengalaman ujian yang efisien dan terorganisir bagi ratusan peserta."
              techStack={[
                "Next.js",
                "TanStack Query",
                "Tailwind",
                "Ant Design",
                "OAuth",
                "Docker",
              ]}
            />
          </AccordionItem>
          <AccordionItem value="project-3">
            <ProjectList
              title="Task Manager System - Full-Stack Developing"
              month="Mei 2025"
              warnaLogo="bg-linear-to-br from-gray-400 to-gray-800"
              icon={FaTasks}
              linkProject="https://github.com/taskify-id"
            />
            <ProjectDetail
              projectDesc="Aplikasi berbasis web yang memudahkan perencanaan, pengelolaan, dan pemantauan tugas secara terstruktur, meningkatkan koordinasi pekerjaan dan produktivitas tim dengan pelacakan progres tugas yang lebih efisien."
              techStack={[
                "React.js",
                "Laravel",
                "Inertia",
                "MySQL",
                "JWT",
                "Docker",
              ]}
            />
          </AccordionItem>
          <AccordionItem value="project-4">
            <ProjectList
              title="Web Community Profile - Web & SEO Developing"
              month="Nov 2024"
              warnaLogo="bg-linear-to-br from-yellow-900 to-yellow-300"
              icon="https://abbscout.vercel.app/img/abbLogo.png"
            />
            <ProjectDetail
              projectDesc="Website profil Ambalan Abbulosibatang (Pramuka SMAN 1 Gowa) yang dikembangkan untuk menyediakan informasi, publikasi artikel, dokumentasi kegiatan, struktur organisasi, serta identitas Ambalan secara digital, dengan fokus pada optimasi SEO dan performa halaman yang efisien."
              techStack={[
                "Next.js",
                "Tailwind",
                "Express.js",
                "Axios",
                "Medium API",
                "Google PageSpeed",
              ]}
            />
          </AccordionItem>
        </Accordion>
      </div>
      <EmptySection />
    </section>
  );
}
