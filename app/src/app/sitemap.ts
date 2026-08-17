import type { MetadataRoute } from "next";

const primaryPages = [
  { route: "", priority: 1.0 as const, changeFrequency: "weekly" as const },
  { route: "/schools", priority: 0.9 as const, changeFrequency: "monthly" as const },
  { route: "/colleges", priority: 0.9 as const, changeFrequency: "monthly" as const },
  { route: "/corporate-financial-wellness", priority: 0.9 as const, changeFrequency: "monthly" as const },
  { route: "/individual-learning", priority: 0.9 as const, changeFrequency: "monthly" as const },
];

const aiPages = [
  { route: "/ai", priority: 0.8 as const, changeFrequency: "monthly" as const },
  { route: "/ai/schools", priority: 0.7 as const, changeFrequency: "monthly" as const },
  { route: "/ai/colleges", priority: 0.7 as const, changeFrequency: "monthly" as const },
  { route: "/ai/resources", priority: 0.6 as const, changeFrequency: "monthly" as const },
];

const blogPages = [
  { route: "/blog", priority: 0.7 as const, changeFrequency: "weekly" as const },
  { route: "/blog/financial-literacy-for-school-students", priority: 0.6 as const, changeFrequency: "monthly" as const },
  { route: "/blog/how-to-manage-your-first-salary", priority: 0.6 as const, changeFrequency: "monthly" as const },
  { route: "/blog/what-is-employee-financial-wellness", priority: 0.6 as const, changeFrequency: "monthly" as const },
  { route: "/blog/personal-finance-for-young-professionals", priority: 0.6 as const, changeFrequency: "monthly" as const },
];

const toolPages = [
  { route: "/tools/financial-knowledge", priority: 0.8 as const, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rupeevalcore.in";
  const lastModDate = new Date("2026-08-16");

  const allPages = [...primaryPages, ...aiPages, ...blogPages, ...toolPages];

  return allPages.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastModDate,
    changeFrequency,
    priority,
  }));
}
