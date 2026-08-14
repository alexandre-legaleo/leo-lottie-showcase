import type { NextConfig } from "next";

const repoName = "leo-lottie-showcase";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  env: {
    NEXT_PUBLIC_BASE_PATH: `/${repoName}`,
  },
};

export default nextConfig;
