import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { articles } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1, freq: "monthly" as const },
    { path: "/servicos", priority: 0.9, freq: "monthly" as const },
    { path: "/como-funciona", priority: 0.8, freq: "monthly" as const },
    { path: "/sobre", priority: 0.8, freq: "yearly" as const },
    { path: "/diagnostico", priority: 0.8, freq: "monthly" as const },
    { path: "/blog", priority: 0.9, freq: "weekly" as const },
    { path: "/contato", priority: 0.7, freq: "yearly" as const },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r.path}`,
      lastModified: now,
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...services.map((s) => ({
      url: `${site.url}/servicos/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/blog/${a.slug}`,
      lastModified: new Date(`${a.date}T12:00:00`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
