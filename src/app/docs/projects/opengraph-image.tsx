import { ImageResponse } from "next/og";
import { OGImage } from "@/components/og-image";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const alt = "Projects - Dipak Rathod";
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
        title="Projects"
        description="Real-world cloud and DevOps projects with detailed documentation and implementation guides"
        category="Projects"
        logoSrc={iconSrc}
      />
    ),
    {
      ...size,
    }
  );
}
