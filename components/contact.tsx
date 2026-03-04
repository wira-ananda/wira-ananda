"use client";
import { useEffect, useState } from "react";
import { contentWidth, EmptySection } from "./HomePage";
import Image from "next/image";
import ContactItem from "./ui/ContactItem";
import { useTheme } from "next-themes";

export default function Contact() {
  const { theme } = useTheme();
  const [repoCount, setRepoCount] = useState<any | null>(null);

  useEffect(() => {
    fetch("/api/github/wira-ananda")
      .then((res) => res.json())
      .then((data) => setRepoCount(data.repoCount))
      .catch(console.error);
  }, []);

  return (
    <section className={` `}>
      <div
        className={`${contentWidth} mx-auto border-x text-sm grid grid-cols-1 md:grid-cols-2 gap-4`}
      >
        <ContactItem
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
          imageAlt="Instagram Wira Ananda"
          title="wiraanandaa_"
          subtitle="1.000+ followers"
          className="md:border-r border-b  hover:text-red-400 transition-all duration-300"
          link="https://www.instagram.com/wiraanandaa_/"
        />
        <ContactItem
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          imageAlt="LinkedIn Wira Ananda"
          title="wira-ananda"
          subtitle="500+ connections"
          className="md:border-l border-b md:border-t-0 border-t hover:text-blue-400 transition-all duration-300"
          link="https://www.linkedin.com/in/wira-ananda/"
        />
        <ContactItem
          imageSrc="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
          imageAlt="Github Wira Ananda"
          title="wira-ananda"
          subtitle={`${repoCount != undefined ? repoCount : "50+"} repositories`}
          className={`border-t border-b md:border-b-0 md:border-r hover:text-gray-500 transition-all duration-300`}
          link="https://github.com/wira-ananda"
        />
        <ContactItem
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
          imageAlt="Email Wira Ananda"
          title="ur.wiraananda@gmail.com"
          subtitle="Contact via Email"
          className="border-t md:border-l hover:text-red-400 transition-all duration-300"
          link="mailto:ur.wiraananda@gmail.com?subject=Software%20Developer%20Inquiry&body=Halo%20Wira👋,%0ASaya%20melihat%20portfolio%20Anda..."
        />
      </div>
      <EmptySection />
    </section>
  );
}
