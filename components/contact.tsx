import React from "react";
import { contentWidth, EmptySection } from "./HomePage";
import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";
import ContactItem from "./ui/ContactItem";

export default function Contact() {
  return (
    <section className={` `}>
      <div
        className={`${contentWidth} mx-auto border-x text-sm grid grid-cols-1 md:grid-cols-2 gap-4`}
      >
        <ContactItem
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
          imageAlt="Instagram Wira Ananda"
          title="wiraanandaa_"
          subtitle="1.000 followers"
          rightIcon={<CiLocationArrow1 size={20} />}
          className="border-r border-b hover:text-red-400 transition-all duration-300"
        />
        <ContactItem
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          imageAlt="LinkedIn Wira Ananda"
          title="wira-ananda"
          subtitle="1.000 followers"
          rightIcon={<CiLocationArrow1 size={20} />}
          className="border-l border-b hover:text-blue-400 transition-all duration-300"
        />
        <ContactItem
          imageSrc="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
          imageAlt="Github Wira Ananda"
          title="wira-ananda"
          subtitle="1.000 followers"
          rightIcon={<CiLocationArrow1 size={20} />}
          className="border-t border-r hover:text-gray-500 transition-all duration-300"
        />
        <ContactItem
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
          imageAlt="Email Wira Ananda"
          title="ur.wiraananda@gmail.com"
          subtitle="Contact via Email"
          rightIcon={<CiLocationArrow1 size={20} />}
          className="border-t border-l hover:text-red-400 transition-all duration-300"
        />
      </div>
      <EmptySection />
    </section>
  );
}
