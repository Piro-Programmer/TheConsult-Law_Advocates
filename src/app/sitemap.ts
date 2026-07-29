import type { MetadataRoute } from "next";
import { practiceAreas } from "@/lib/practice-areas";
import { people } from "@/lib/people";
import { posts } from "@/lib/posts";
import { legalPages } from "@/lib/legal";

const BASE = "https://theconsult.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/practice-areas",
    "/people",
    "/blogs",
    "/contact",
    "/book-consultation",
  ];

  return [
    ...staticRoutes.map((r) => ({ url: `${BASE}${r}`, priority: r === "" ? 1 : 0.8 })),
    ...practiceAreas.map((a) => ({
      url: `${BASE}/practice-areas/${a.slug}`,
      priority: 0.7,
    })),
    ...people.map((p) => ({ url: `${BASE}/people/${p.slug}`, priority: 0.6 })),
    ...posts.map((p) => ({ url: `${BASE}/blogs/${p.slug}`, priority: 0.6 })),
    ...legalPages.map((p) => ({ url: `${BASE}/${p.slug}`, priority: 0.3 })),
  ];
}
