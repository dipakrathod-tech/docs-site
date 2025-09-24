import { Layout, Navbar } from 'nextra-theme-docs'
import Footer from '../components/footer'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
 
export const metadata: Metadata = {
  title: "Dipak Rathod - Cloud & DevOps Engineer",
  description: "Documentation Hub for Cloud, DevOps, and Software Development Projects",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
  },
};
 
const navbar = (
  <Navbar
    logo={<b>Dipak Rathod</b>}
    projectLink='https://github.com/dipakrathod-tech'
    // ... Your additional navbar options
  />
)



 
export default async function RootLayout({ children }: { children: React.ReactNode }) {

 
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
        faviconGlyph="✦" 

      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
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
  )
}