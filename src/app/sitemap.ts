import type { MetadataRoute } from "next";

const siteUrl = "https://aditya-dosapati.github.io/Personal-Portfolio-Website";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
