import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPage = repositoryName.endsWith(".github.io");
const shouldUseRepoBasePath = isGithubActions && repositoryName.length > 0 && !isUserOrOrgPage;

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: shouldUseRepoBasePath ? `/${repositoryName}` : "",
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(shouldUseRepoBasePath
    ? {
        basePath: `/${repositoryName}`,
        assetPrefix: `/${repositoryName}/`,
      }
    : {}),
};

export default nextConfig;
