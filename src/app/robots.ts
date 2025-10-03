import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Slurp", // Yahoo
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        crawlDelay: 0,
      },
    ],
    sitemap: "https://docs.dipakrathod.me/sitemap.xml",
    host: "https://docs.dipakrathod.me",
  };
}
