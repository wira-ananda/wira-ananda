"use client";
import Typewriter from "typewriter-effect";
import { contentWidth, EmptySection } from "./HomePage";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useTheme } from "next-themes";
import GradientText from "./ui/GradientText";

export default function Hero() {
  const { theme } = useTheme();
  const colorsGradient =
    theme === "dark"
      ? ["#2a9d8f", "#9ef0e6", "#ffffff"]
      : ["#2a9d8f", "#2b7d77", "#000000"];

  return (
    <>
      <header className="">
        <div className={`${contentWidth} mx-auto border-x flex`}>
          <div className="border-r w-48 flex relative  items-center justify-center">
            <Image
              src={"/img/wira-foto-test.jpg"}
              alt="Wira Aananda Profile Photo"
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
                  className="ml-3 mr-1 my-1 text-4xl gradient-text font-bold"
                >
                  Wira Ananda
                </GradientText>
                <HoverCard openDelay={10} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <RiVerifiedBadgeFill
                      size={20}
                      className="text-blue-400 cursor-pointer"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent
                    side="right"
                    className={`flex w-64 flex-col gap-0.5 ${theme} `}
                  >
                    {/* <div className="font-semibold">verified</div> */}
                    <p>
                      Junior Web Developer dengan fokus pada UI, performa, dan
                      pengalaman pengguna.
                    </p>
                    {/* <div className="mt-1 text-xs text-muted-foreground">
                    Joined December 202
                  </div> */}
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
                      strings: ["Web Developer", "Graphic Designer"],
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
