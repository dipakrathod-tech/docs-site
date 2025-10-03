import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dipak Rathod - Cloud & DevOps Documentation Hub",
    short_name: "Dipak Docs",
    description:
      "Comprehensive documentation hub for cloud computing, DevOps, AWS, Docker, Kubernetes, CI/CD, and software development. Learn through hands-on tutorials and real-world projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4f46e5",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-US",
    dir: "ltr",
    categories: ["education", "productivity", "developer tools"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/favicon.svg",
        sizes: "48x48",
        type: "image/svg+xml",
      },
    ],
    shortcuts: [
      {
        name: "Documentation",
        short_name: "Docs",
        description: "Browse all documentation",
        url: "/docs",
        icons: [{ src: "/icon.svg", sizes: "any" }],
      },
      {
        name: "Projects",
        short_name: "Projects",
        description: "View cloud and DevOps projects",
        url: "/docs/projects",
        icons: [{ src: "/icon.svg", sizes: "any" }],
      },
      {
        name: "Tutorials",
        short_name: "Tutorials",
        description: "Learn with step-by-step tutorials",
        url: "/docs/tutorials",
        icons: [{ src: "/icon.svg", sizes: "any" }],
      },
    ],
    screenshots: [
      {
        src: "/icon.svg",
        sizes: "1280x720",
        type: "image/svg+xml",
        form_factor: "wide",
        label: "Dipak Rathod Documentation Hub - Desktop View",
      },
      {
        src: "/icon.svg",
        sizes: "750x1334",
        type: "image/svg+xml",
        form_factor: "narrow",
        label: "Dipak Rathod Documentation Hub - Mobile View",
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
