import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";

export default function Hero() {
  return (
    <header className="cascadia-mono-regular">
      <Flex gap="2">
        <Box>
          <Text>wira</Text>
        </Box>
        <Box>ananda</Box>
        <Box>makan</Box>
        <Box>nasi</Box>
      </Flex>
    </header>
  );
}
