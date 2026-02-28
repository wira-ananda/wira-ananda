import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import RippleGrid from "./ui/RippleGrid";

export default function Hero() {
  return (
    <header className="cascadia-mono-regular mx-auto">
      <RippleGrid
        enableRainbow={false}
        gridColor="#e6e6e6"
        rippleIntensity={0.09}
        gridSize={12}
        gridThickness={7}
        fadeDistance={1.5}
        vignetteStrength={2}
        glowIntensity={0.5}
        opacity={0.25}
        gridRotation={70}
        mouseInteraction
        mouseInteractionRadius={2.1}
      />
    </header>
  );
}
