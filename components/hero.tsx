"use client";
import Typewriter from "typewriter-effect";
import { contentWidth, EmptySection } from "./HomePage";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card-ui";
import { useTheme } from "next-themes";
import GradientText from "./ui/GradientText";

export default function Hero({ id }: { id: string }) {
  const { theme } = useTheme();
  const colorsGradient =
    theme === "dark"
      ? ["#2a9d8f", "#9ef0e6", "#ffffff"]
      : ["#2a9d8f", "#2b7d77", "#000000"];

  return (
    <>
      <header id={id} className="">
        <div className={`${contentWidth} mx-auto border-x flex`}>
          <div className="border-r w-48 flex relative  items-center justify-center">
            <Image
              src={"/img/wira-foto.jpg"}
              alt="Wira Ananda Profile Photo"
              width={1754}
              height={1754}
              className="relative rounded-full object-cover shadow-lg border"
            />{" "}
          </div>
          <div className="flex items-end w-full">
            <span className="w-full border-t">
              <div className="border-b flex items-center">
                <GradientText
                  colors={colorsGradient}
                  animationSpeed={1.5}
                  showBorder={false}
                  pauseOnHover={true}
                  className="ml-3 mr-1 my-1 text-4xl gradient-text font-black"
                >
                  Wira Ananda
                </GradientText>
                <HoverCard openDelay={10} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <RiVerifiedBadgeFill
                      size={22}
                      className="text-blue-400 cursor-pointer md:block hidden"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent
                    side="right"
                    className={`flex w-64 gap-0.5 text-sm `}
                  >
                    <span>🎯</span>
                    <p>
                      <span className="font-semibold">Software Developer</span>{" "}
                      — UI, performance, best practice.
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="mx-3">
                <h2>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      strings: ["Software Developer", "Graphic Designer"],
                    }}
                  />
                </h2>
              </div>
            </span>
          </div>
        </div>
      </header>
      <EmptySection />
    </>
  );
}
