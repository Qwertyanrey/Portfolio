import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Portfolio",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
