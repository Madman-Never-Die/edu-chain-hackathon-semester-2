import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Styled Components 지원 활성화
  },
};

export default nextConfig;
