import type { MetadataRoute } from "next";

const routes = [
  "",
  "/schools",
  "/colleges",
  "/corporate-financial-wellness",
  "/individual-learning",
  "/ai",
  "/ai/schools",
  "/ai/colleges",
  "/ai/resources",
  "/financial-literacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rupeevalcore.in";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.8 : 1,
  }));
}
