import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wiraananda.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
  ];
}
