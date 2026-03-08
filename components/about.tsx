import React from "react";
import { contentWidth, EmptySection } from "./HomePage";
import { FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { useTheme } from "next-themes";

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
        <span className="font-semibold">Junior Full-Stack Developer </span>
        yang fokus membangun aplikasi web modern dengan UI konsisten dan
        integrasi sistem yang efisien. Berpengalaman mengerjakan project web
        nyata secara kolaboratif dan saat ini{" "}
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
          icon={<FaNodeJs size={12} />}
          aria-label="Node.js"
        >
          Node.js
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
  color: "blue" | "green" | "red" | "gray";
}) {
  const colors = {
    blue: "border-blue-500/60 bg-blue-500/10 dark:text-blue-400 text-blue-800",
    green: "border-green-500/60 dark:text-green-400 text-green-700",
    red: "border-red-500/60 bg-red-500/10 dark:text-red-400 text-red-900",
    gray: "border-gray-500/60 bg-gray-500/10 text-primary",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 pr-1.5 pl-2 rounded-full border ${colors[color]} font-medium`}
      role="presentation"
    >
      {icon && (
        <span className="sr-only">Icon {children}</span> // Menyembunyikan teks ini dari tampilan visual, tetapi pembaca layar akan membacanya
      )}
      {icon} {children}
    </span>
  );
}
