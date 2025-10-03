import { ImageResponse } from "next/og";
import { OGImage } from "@/components/og-image";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const alt = "Dipak Rathod - Cloud & DevOps Documentation Hub";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Load the icon
  const iconData = await readFile(join(process.cwd(), "public/icon.svg"));
  const iconSrc = `data:image/svg+xml;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    (
      <OGImage
        title="Dipak Rathod"
        description="Cloud & DevOps Documentation Hub - Learn AWS, Docker, Kubernetes, CI/CD, and modern development practices"
        category="Documentation"
        logoSrc={iconSrc}
      />
    ),
    {
      ...size,
    }
  );
}
