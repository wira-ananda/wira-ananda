import React from "react";
import { contentWidth, EmptySection } from "./HomePage";
import { FaReact, FaLaravel } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { useTheme } from "next-themes";
import { SiNuxtdotjs, SiExpress, SiNestjs, SiAstro } from "react-icons/si";

export default function About({ id }: { id: string }) {
  return (
    <main id={id}>
      <div className={`${contentWidth} mx-auto border-x text-sm`}>
        <h1
          className="items-center px-4 border-b text-2xl font-semibold"
          aria-labelledby="about-title"
        >
          About
        </h1>

        <AboutContent />
      </div>

      <EmptySection />
    </main>
  );
}

function AboutContent() {
  const { theme } = useTheme();
  const colorText = theme === "dark" ? "text-zinc-400" : "text-zinc-800";

  return (
    <article className="px-4 py-3 leading-relaxed gap-2 space-y-2 font-thin">
      <figure>
        <figcaption>Halo! Saya Wira Ananda 👋</figcaption>
      </figure>

      <p className={`text-sm leading-relaxed ${colorText}`}>
        <span className="font-semibold">Junior Software Engineer </span>
        yang fokus membangun aplikasi modern dengan UI konsisten dan integrasi
        sistem yang efisien. Berpengalaman mengerjakan project nyata secara
        kolaboratif dan saat ini{" "}
        <StatusBadge aria-label="Status: terbuka untuk bekerja">
          terbuka untuk bekerja
        </StatusBadge>{" "}
        dan peluang kolaborasi.
      </p>

      <p>
        Saya terbiasa menggunakan{" "}
        <SkillBadge
          color="blue"
          icon={<FaReact size={12} />}
          aria-label="React"
        >
          React
        </SkillBadge>
        ,{" "}
        <SkillBadge
          color="gray"
          icon={<TbBrandNextjs size={12} />}
          aria-label="Next.js"
        >
          Next.js
        </SkillBadge>
        ,{" "}
        <SkillBadge
          color="green"
          icon={<SiNuxtdotjs size={12} />}
          aria-label="Nuxt.js"
        >
          Nuxt.js
        </SkillBadge>
        ,{" "}
        <SkillBadge
          color="orange"
          icon={<SiAstro size={12} />}
          aria-label="Astro"
        >
          Astro
        </SkillBadge>
        ,{" "}
        <SkillBadge
          color="red"
          icon={<SiNestjs size={12} />}
          aria-label="Nest.js"
        >
          Nest.js
        </SkillBadge>
        ,{" "}
        <SkillBadge
          color="zinc"
          icon={<SiExpress size={12} />}
          aria-label="Express.js"
        >
          Express.js
        </SkillBadge>
        , dan{" "}
        <SkillBadge
          color="red"
          icon={<FaLaravel size={12} />}
          aria-label="Laravel"
        >
          Laravel
        </SkillBadge>{" "}
        dalam Software Development.
      </p>
    </article>
  );
}

// Komponen reusable untuk badge status (online, available, dll)
function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 pr-1.5 pl-2 rounded-full 
             border border-emerald-500/60 
             dark:text-emerald-400 text-green-800 font-medium"
      role="status"
      aria-live="polite"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-200 shadow-[0_0_10px_#34d399]" />
      </span>
      {children}
    </span>
  );
}

function SkillBadge({
  children,
  icon,
  color,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  color: "blue" | "green" | "red" | "gray" | "zinc" | "orange";
}) {
  const colors = {
    blue: "border-blue-500/60 bg-blue-500/10 dark:text-blue-400 text-blue-800", // React
    gray: "border-slate-500/60 bg-slate-500/10 dark:text-slate-300 text-slate-800", // Next.js
    green:
      "border-emerald-500/60 bg-emerald-500/10 dark:text-emerald-400 text-emerald-800", // Nuxt.js
    orange:
      "border-orange-500/60 bg-orange-500/10 dark:text-orange-400 text-orange-800", // Astro
    red: "border-red-600/60 bg-red-600/10 dark:text-red-400 text-red-800", // NestJS & Laravel
    zinc: "border-zinc-500/40 bg-zinc-500/5 dark:text-zinc-400 text-zinc-700", // Express (Neutral)
  };

  return (
    <span
      className={`inline-flex items-center gap-2 pr-1.5 pl-2 rounded-full border ${colors[color]} font-medium`}
      role="presentation"
    >
      {icon && <span className="sr-only">Icon {children}</span>}
      {icon} {children}
    </span>
  );
}
