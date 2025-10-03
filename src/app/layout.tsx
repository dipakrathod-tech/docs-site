import { Layout, Navbar } from "nextra-theme-docs";
import Footer from "../components/footer";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.dipakrathod.me"),
  title: {
    default: "Dipak Rathod - Cloud & DevOps Engineer",
    template: "%s | Dipak Rathod",
  },
  description:
    "Documentation Hub for Cloud, DevOps, and Software Development Projects. Learn AWS, Docker, Kubernetes, CI/CD, and modern development practices through hands-on tutorials and real-world projects.",
  keywords: [
    "Cloud Computing",
    "DevOps",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Software Development",
    "Tutorials",
    "Documentation",
    "Dipak Rathod",
  ],
  authors: [{ name: "Dipak Rathod", url: "https://dipakrathod.me" }],
  creator: "Dipak Rathod",
  alternates: {
    canonical: "https://docs.dipakrathod.me",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.dipakrathod.me",
    title: "Dipak Rathod - Cloud & DevOps Engineer",
    description:
      "Documentation Hub for Cloud, DevOps, and Software Development Projects. Learn AWS, Docker, Kubernetes, and modern development practices.",
    siteName: "Dipak Rathod Docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipak Rathod - Cloud & DevOps Engineer",
    description:
      "Documentation Hub for Cloud, DevOps, and Software Development Projects",
    creator: "@DipakrathodTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "uMaPo0x9ifwxT-qd2XvwCtEE5q3qXeiP3n0y5WvTpaM",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

const navbar = (
  <Navbar
    logo={
      <img
        src="/icon.svg"
        alt="Dipak Rathod Documentation Hub"
        style={{ height: "32px", width: "auto" }}
        className="dark:invert"
      />
    }
    projectLink="https://github.com/dipakrathod-tech"
    // ... Your additional navbar options
  />
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      >
        {/* Structured Data for SEO - Enhanced Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://docs.dipakrathod.me/#website",
                  url: "https://docs.dipakrathod.me",
                  name: "Dipak Rathod Documentation Hub",
                  description:
                    "Documentation Hub for Cloud, DevOps, and Software Development Projects",
                  inLanguage: "en-US",
                  publisher: {
                    "@id": "https://docs.dipakrathod.me/#person",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://docs.dipakrathod.me/search?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Person",
                  "@id": "https://docs.dipakrathod.me/#person",
                  name: "Dipak Rathod",
                  url: "https://dipakrathod.me",
                  image: "https://docs.dipakrathod.me/icon.svg",
                  description:
                    "Cloud & DevOps Engineer specializing in AWS, Docker, Kubernetes, and CI/CD pipelines",
                  jobTitle: "Cloud & DevOps Engineer",
                  sameAs: [
                    "https://github.com/dipakrathod-tech",
                    "https://www.linkedin.com/in/dipakrathod-tech",
                    "https://twitter.com/DipakrathodTech",
                  ],
                  knowsAbout: [
                    "Cloud Computing",
                    "DevOps",
                    "AWS",
                    "Docker",
                    "Kubernetes",
                    "CI/CD",
                    "Infrastructure as Code",
                    "Software Development",
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://docs.dipakrathod.me/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://docs.dipakrathod.me",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Documentation",
                      item: "https://docs.dipakrathod.me/docs",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Layout
          editLink={false}
          feedback={{ content: null }}
          navbar={navbar}
          pageMap={await getPageMap()}
          // docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={<Footer />}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
