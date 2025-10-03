"use client";

import React from "react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { useRouter } from "next/navigation";
import { RainbowButton } from "./ui/rainbow-button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

function PrimaryCTA({
  ctaHref,
  ctaText,
}: {
  ctaHref: string;
  ctaText: string;
}) {
  const router = useRouter();
  return (
    <RainbowButton onClick={() => router.push(ctaHref)} aria-label={ctaText}>
      {ctaText}
    </RainbowButton>
  );
}

/**
 * Hero
 *
 * - Fills the viewport while accounting for the navbar by subtracting
 *   `var(--nextra-navbar-height)` (falls back to 64px).
 * - Renders the DotPattern background only inside the hero wrapper.
 * - Uses the project's `RainbowButton` component for the primary CTA.
 */
export default function Hero({
  title = (
    <>
      Hey, I&apos;m{" "}
      <span className="text-indigo-400 whitespace-nowrap">Dipak Rathod</span>.
      <br /> Welcome to my Documentation Hub
    </>
  ),
  description = (
    <>
      This is a curated collection of my work in cloud, DevOps, and software
      development. Explore my projects, tutorials, and insights to learn more
      about what I do.
    </>
  ),
  ctaText = "Get started",
  ctaHref = "/docs",
}: HeroProps) {
  return (
    <section
      aria-label="Hero"
      className="relative bg-white dark:bg-black"
      style={{
        minHeight: "calc(100vh - var(--nextra-navbar-height, 64px))",
      }}
    >
      {/* Dot Background Pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#9ca3af_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      {/* Content */}
      <div className="relative z-20 flex min-h-full items-center">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Primary CTA uses client-side navigation via router.push to avoid nesting anchors */}
            <PrimaryCTA ctaHref={ctaHref} ctaText={ctaText} />

            <InteractiveHoverButton
              className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors"
              onClick={() =>
                window.open("https://www.dipakrathod.me", "_blank")
              }
              aria-label="View portfolio"
            >
              View portfolio
            </InteractiveHoverButton>
          </div>
        </div>
      </div>

      {/* Decorative footer hint */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-sm text-muted-foreground">
        Built with attention to detail
      </div>
    </section>
  );
}
