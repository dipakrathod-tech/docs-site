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
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

const navbar = (
  <Navbar
    logo={
      <img
        src="/icon.svg"
        alt="Logo"
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
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Dipak Rathod Documentation Hub",
              url: "https://docs.dipakrathod.me",
              description:
                "Documentation Hub for Cloud, DevOps, and Software Development Projects",
              author: {
                "@type": "Person",
                name: "Dipak Rathod",
                url: "https://dipakrathod.me",
              },
              publisher: {
                "@type": "Person",
                name: "Dipak Rathod",
              },
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
