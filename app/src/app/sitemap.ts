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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rupeevalcore.in";
  const lastModDate = new Date("2026-07-13"); // Static date to avoid spurious crawl hits

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastModDate,
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.8 : 1,
  }));
}
