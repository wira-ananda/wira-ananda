import Image from "next/image";
import { ReactNode } from "react";
import { CiLocationArrow1 } from "react-icons/ci";

type HoverImageItemProps = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
  imageSize?: number;
  className?: string;
  link?: string;
};

export default function ContactItem({
  imageSrc,
  imageAlt = "",
  title,
  subtitle,
  imageSize = 40,
  className,
  link,
}: HoverImageItemProps) {
  return (
    <a
      className={`
        group
        h-20
        flex
        items-center
        justify-between
        px-4
        cursor-pointer
        ${className}
      `}
      href={link}
    >
      <div className="flex items-center gap-4">
        <Image
          src={imageSrc}
          width={imageSize * 10}
          height={imageSize * 10}
          alt={imageAlt}
          className="
            md:grayscale
            md:opacity-70
            transition-all
            duration-300
            group-hover:grayscale-0
            group-hover:opacity-100
            group-hover:scale-105
            rounded-xl
          "
          style={{ width: imageSize, height: imageSize }}
        />

        <div className="leading-normal text-[.8rem]">
          <h3 className="font-semibold ">{title}</h3>
          {subtitle && (
            <h3 className="font-thin text-muted-foreground">{subtitle}</h3>
          )}
        </div>
      </div>

      <div
        className="
            transition
            duration-300
            group-hover:translate-x-1
          "
      >
        <CiLocationArrow1 size={20} />
      </div>
    </a>
  );
}
