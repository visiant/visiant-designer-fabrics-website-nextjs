import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output keeps the Coolify/Nixpacks image lean (same pattern
  // as the dfhome app and the Visiant portal).
  output: "standalone",
};

export default nextConfig;
