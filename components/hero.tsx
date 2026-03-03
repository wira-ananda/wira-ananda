"use client";
import Typewriter from "typewriter-effect";
import { contentWidth } from "./HomePage";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();
  return (
    <header className="border-b">
      <div className={`${contentWidth} mx-auto border-l border-r flex`}>
        <div className="border-r">
          <Image
            src={"/img/wira-foto-test.jpg"}
            alt="Wira Aananda Profile Photo"
            width={1754}
            height={1754}
            className="w-48 rounded-full"
          />{" "}
        </div>
        <div className="flex items-end w-full">
          <span className="w-full border-t">
            <div className="border-b flex items-center">
              <h1 className="ml-3 mr-1 my-1 text-4xl gradient-text font-bold">
                Wira Ananda
              </h1>
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
                  <div>
                    Junior Web Developer dengan fokus pada UI, performa, dan
                    pengalaman pengguna.
                  </div>
                  {/* <div className="mt-1 text-xs text-muted-foreground">
                    Joined December 202
                  </div> */}
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="mx-3">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["Web Developer", "Graphic Designer"],
                }}
              />
            </div>
          </span>
        </div>
      </div>
    </header>
  );
}
