import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ["http://192.168.1.70:3000", "http://localhost:3000"],
  },
};

export default nextConfig;
