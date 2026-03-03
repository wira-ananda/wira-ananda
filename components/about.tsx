import React from "react";
import { contentWidth } from "./HomePage";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";

export default function About() {
  return (
    <main>
      <div className={`${contentWidth} mx-auto border-x flex text-sm`}>
        <article className="p-4 leading-relaxed gap-2 space-y-2 font-thin">
          <figure>Halo! Saya Wira Ananda 👋</figure>
          <p className="text-sm leading-relaxed text-zinc-400">
            <span className="font-semibold">Junior Full-Stack Developer </span>{" "}
            yang fokus membangun aplikasi web modern dengan UI konsisten dan
            integrasi sistem yang efisien. Berpengalaman mengerjakan project web
            nyata secara kolaboratif dan saat ini{" "}
            <span
              className="inline-flex items-center gap-2 pr-1.5 pl-2 rounded-full 
                   border border-emerald-500/60 bg-emerald-500/10 
                   text-emerald-400 font-medium"
            >
              <span className="relative flex h-3 w-3">
                <span
                  className="absolute inline-flex h-full w-full rounded-full 
                       bg-emerald-400 opacity-75 animate-ping"
                />
                <span
                  className="relative inline-flex h-3 w-3 rounded-full 
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
                   border border-gray-500/60 bg-gray-500/10 
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
      </div>
    </main>
  );
}

// <span className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
//     {" "}
//     <div className="w-full flex items-center justify-center gap-2 text-sm">
//       <div
//         className={`w-8 h-8 cursor-pointer relative rounded-full transition-all flex border items-center`}
//       >
//         <PiGraduationCapThin size={20} className="mx-auto" />
//       </div>
//       <h3>Sarjana Teknik Informatika</h3>
//     </div>
//     <div className="h-20">Item 2</div>
//     <div className="h-20">Item 3</div>
//     <div className="h-20">Item 4</div>
//   </span>
