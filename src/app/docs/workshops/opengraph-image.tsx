import { ImageResponse } from "next/og";
import { OGImage } from "@/components/og-image";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const alt = "Workshops - Dipak Rathod";
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
        title="Workshops"
        description="Hands-on workshops and practical sessions for learning cloud computing and DevOps engineering"
        category="Workshops"
        logoSrc={iconSrc}
      />
    ),
    {
      ...size,
    }
  );
}
