/**
 * Dynamic Sitemap Generator Helper
 *
 * This file provides utilities to generate sitemap entries dynamically
 * based on your content structure.
 *
 * Usage:
 * 1. Import this in your sitemap.ts
 * 2. Call generateContentPages() to get all MDX pages
 * 3. Merge with your static pages
 *
 * TODO: Implement file system scanning when you add more content
 */

import { MetadataRoute } from "next";

export interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

const BASE_URL = "https://docs.dipakrathod.me";

/**
 * Static pages with highest priority
 */
export function getStaticPages(): SitemapEntry[] {
  const currentDate = new Date();
  return [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/docs`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}

/**
 * Section pages (categories)
 */
export function getSectionPages(): SitemapEntry[] {
  const currentDate = new Date();
  return [
    {
      url: `${BASE_URL}/docs/projects`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/docs/tutorials`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/docs/workshops`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

/**
 * Content pages (projects, tutorials, workshops)
 *
 * TODO: When you add more content, add entries here or implement
 * file system scanning to generate this dynamically.
 */
export function getContentPages(): SitemapEntry[] {
  const currentDate = new Date();

  // Manually defined content pages
  // Replace this with dynamic file scanning when you have more content
  const contentPages = [
    {
      path: "/docs/projects/demo-project",
      lastModified: currentDate,
    },
    {
      path: "/docs/tutorials/demo-tutorial",
      lastModified: currentDate,
    },
    {
      path: "/docs/workshops/demo-workshop",
      lastModified: currentDate,
    },
  ];

  return contentPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
}

/**
 * Generate complete sitemap
 */
export function generateSitemap(): MetadataRoute.Sitemap {
  const staticPages = getStaticPages();
  const sectionPages = getSectionPages();
  const contentPages = getContentPages();

  return [...staticPages, ...sectionPages, ...contentPages];
}

/**
 * Future: Scan file system for MDX files
 *
 * Uncomment and implement when you have more content:
 *
 * import { readdirSync, statSync } from "fs";
 * import { join } from "path";
 *
 * export function scanMDXPages(dir: string): SitemapEntry[] {
 *   const entries: SitemapEntry[] = [];
 *   const files = readdirSync(dir);
 *
 *   for (const file of files) {
 *     const filePath = join(dir, file);
 *     const stat = statSync(filePath);
 *
 *     if (stat.isDirectory()) {
 *       entries.push(...scanMDXPages(filePath));
 *     } else if (file === "page.mdx") {
 *       // Extract URL from file path
 *       const url = filePath
 *         .replace(process.cwd(), "")
 *         .replace("/src/app", "")
 *         .replace("/page.mdx", "");
 *
 *       entries.push({
 *         url: `${BASE_URL}${url}`,
 *         lastModified: stat.mtime,
 *         changeFrequency: "monthly",
 *         priority: 0.7,
 *       });
 *     }
 *   }
 *
 *   return entries;
 * }
 */
