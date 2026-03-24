import type { MetadataRoute } from "next";

const siteUrl = "https://aditya-dosapati.github.io/Personal-Portfolio-Website";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
