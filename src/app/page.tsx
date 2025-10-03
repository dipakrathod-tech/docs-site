import Hero from "@/components/hero";
import Featured from "@/components/featured";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Dipak Rathod's Documentation Hub. Explore cloud computing, DevOps, AWS tutorials, and software development projects with hands-on guides and practical examples.",
  alternates: {
    canonical: "https://docs.dipakrathod.me",
  },
  openGraph: {
    title: "Dipak Rathod - Cloud & DevOps Documentation Hub",
    description:
      "Explore cloud computing, DevOps, AWS tutorials, and software development projects",
    url: "https://docs.dipakrathod.me",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Featured />
    </>
  );
}
