import { MetadataRoute } from "next";
import { generateSitemap } from "@/lib/sitemap-generator";

/**
 * Sitemap Generation
 * 
 * This file generates the sitemap.xml for search engines.
 * The actual logic is in src/lib/sitemap-generator.ts for better maintainability.
 * 
 * To add new pages:
 * 1. For static pages: Edit getStaticPages() in sitemap-generator.ts
 * 2. For content pages: Edit getContentPages() in sitemap-generator.ts
 * 3. For dynamic scanning: Implement file system scanning (see comments in helper)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap();
}
