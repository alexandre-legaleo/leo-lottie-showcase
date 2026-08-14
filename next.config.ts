import type { NextConfig } from "next";

const repoName = "leo-lottie-showcase";
// Only prefix paths for the production build (GitHub Pages serves this repo
// under /leo-lottie-showcase/); keep `next dev` at the plain localhost root.
const basePath = process.env.NODE_ENV === "production" ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
