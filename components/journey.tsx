"use client";
import React from "react";
import { contentWidth, EmptySection } from "./HomePage";
import Image from "next/image";
import ScrollReveal from "./ui/scroll-reveal";
import { Timeline } from "@/components/ui/timeline";

const dataJourney = [
  {
    id: 0,
    title: "Universitas Dipa Makassar",
    subtitle: "Teknik Informatika",
    year: "2022 - 2026",
    iconLink:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/LogoUndipa.png",
    description:
      "Menempuh pendidikan di bidang Teknik Informatika dengan fokus pada pengembangan perangkat lunak, dan pendalaman algoritma. Memperdalam kemampuan coding, pemodelan data, dan desain UI/UX melalui proyek praktikum dan kegiatan kampus, sehingga membangun dasar kuat untuk karier sebagai Software Developer.",
  },
  {
    id: 1,
    title: "Metrotech Digital Asia",
    subtitle: "Front-End Engineer",
    year: "Early 2025",
    iconLink:
      "https://media.licdn.com/dms/image/v2/D560BAQEFulCNZO5M9w/company-logo_200_200/company-logo_200_200/0/1726042455183/metrotech_digital_asia_logo?e=1774483200&v=beta&t=yWNcvO11CnTDnxEZqAbBHJ4CZWpuXwB4wcc9yaynbvU",
    description:
      "Mengembangkan UI responsif dan reusable components pada Metro Try Out System, mengoptimalkan autentikasi OAuth/JWT, sehingga sistem ujian berjalan stabil, efisien, dan pengalaman pengguna konsisten.",
  },
  {
    id: 2,
    title: "Winnicode Garuda Technology",
    subtitle: "Full-Stack Developer",
    year: "Early 2025",
    iconLink:
      "https://media.licdn.com/dms/image/v2/D560BAQHBchDFb5AGrg/company-logo_200_200/company-logo_200_200/0/1728400424449/winnicodegarudateknologi_logo?e=1774483200&v=beta&t=0mRRqEgZkS0ymb0ZX-VTz8JC81MNDzhj58VGZA7pX-E",
    description:
      "Mengembangkan Task Manager System end-to-end menggunakan Laravel, Inertia.js, dan React, mengimplementasikan role-based access, pengaturan tugas, dan pelacakan progres, sehingga sistem manajemen tugas berjalan terstruktur, efisien, dan meminimalkan human error.",
  },
  {
    id: 3,
    title: "Coding Camp by Dicoding x DBS",
    subtitle: "Frontend & Backend Path Learning",
    year: "Middle 2025",
    iconLink:
      "https://media.licdn.com/dms/image/v2/D560BAQEONBPsiZnU8w/company-logo_200_200/company-logo_200_200/0/1729482329489?e=1774483200&v=beta&t=C7s4hF-d2b4pHirxWaT_RVaubQ4rOI7FiuktRT4lOxs",
    description:
      "Beasiswa Bootcamp; Mempelajari full-stack development dengan fokus integrasi front-end dan back-end, membangun aplikasi dengan autentikasi, API handling, dan manajemen state, sehingga kemampuan end-to-end development meningkat dan best practices diterapkan.",
  },
  {
    id: 4,
    title: "SinergiMP Technology",
    subtitle: "Front-End Developer",
    year: "Middle 2025",
    iconLink:
      "https://media.licdn.com/dms/image/v2/D560BAQFuqs1MxCdGjQ/company-logo_200_200/B56ZeGPuR2GQAQ-/0/1750303958559/ptsinergimp_logo?e=1774483200&v=beta&t=erP6FoyencTnMknhcfiEWzvkjzFiAcGkTU77cRmXIVM",
    description:
      "Mengelola antarmuka frontend, manajemen state, dan integrasi API pada Human Resource System, sehingga efisiensi pengembangan fitur meningkat, UI konsisten, dan produktivitas tim terjaga.",
  },
  {
    id: 4,
    title: "Dunia Teknologi Nusantara",
    subtitle: "Junior Software Engineer",
    year: "Early 2026 - Now",
    iconLink:
      "https://media.licdn.com/dms/image/v2/D4E03AQHx-uAp4M1UAA/profile-displayphoto-shrink_200_200/B4EZVmz2XmHMAY-/0/1741186624340?e=1774483200&v=beta&t=9_ENypED691F_5yu90MWaMmge4ZtGWn2xchHCkQ31BE",
    description:
      "Fokus pada pengembangan web full-stack, menangani aspek front-end dan back-end, mengelola testing dan maintenance aplikasi, berkolaborasi dengan tim untuk implementasi fitur baru, serta memanfaatkan feedback pengguna untuk memperbaiki website, sehingga pengembangan aplikasi berjalan efisien, terstruktur, dan kualitas sistem terjaga.",
  },
];

export default function Journey() {
  // transform dataJourney ke format Timeline
  const timelineData = dataJourney.map((item) => ({
    title: item.year,
    content: (
      <div className="w-full items-center">
        <div className="flex gap-4 items-center">
          <img
            src={item.iconLink}
            alt={item.title}
            width={50}
            height={50}
            className="rounded-md object-cover"
          />

          <div className="flex flex-col text-left">
            <h3 className="font-light text-sm">{item.title}</h3>
            <h4 className="text-xs text-muted-foreground">{item.subtitle}</h4>
          </div>
        </div>
        <p className="text-md text-muted-foreground pt-3">{item.description}</p>
      </div>
    ),
  }));

  return (
    <section>
      <div className={`${contentWidth} mx-auto border-x`}>
        {/* <div className="px-4 hidden md:block">
          <ScrollReveal
            baseOpacity={0.8}
            enableBlur
            baseRotation={4}
            blurStrength={15}
          >
            We are what we repeatedly do. Excellence grows through persistent
            effort and mindful practice.
          </ScrollReveal>
        </div> */}
        <div className="">
          <h2 className="text-2xl font-semibold mb-2 px-4 border-b py-1">
            Journey
          </h2>
          <p className="text-muted-foreground mb-6 text-sm px-4">
            Steps I’ve taken, lessons I’ve learned, and milestones along the
            way.
          </p>

          {/* Desktop: Timeline */}
          <div className="relative w-full overflow-clip md:top-4">
            <Timeline data={timelineData} />
          </div>
        </div>
      </div>
      <EmptySection />
    </section>
  );
}
