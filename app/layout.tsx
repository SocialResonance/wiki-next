import { Search } from 'nextra/components'

import { Encode_Sans_Condensed } from 'next/font/google'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
// Required for theme styles, previously was imported under the hood
import 'nextra-theme-docs/style.css'
import Link from 'next/link'
 
 
const banner = <Banner storageKey="some-key">Social Resonance Wiki</Banner>
const Feedback = <Link href='https://pol.is/2pnjwerpr5' target='_blank' rel='noopener noreferrer'>Feedback</Link>

export const metadata = {
  // ... your metadata API
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
const encodeSansCondensed = Encode_Sans_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-encode-sans-condensed',
})

const footer = <Footer>{new Date().getFullYear()} © Dimitri Postolov.</Footer>

export default async function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" dir="ltr" suppressHydrationWarning className={encodeSansCondensed.variable}>
        <Head
        backgroundColor={{
          dark: 'rgb(15, 23, 42)',
          light: 'rgb(254, 252, 232)'
        }}
        color={{
          hue: { dark: 120, light: 0 },
          saturation: { dark: 100, light: 100 }
        }}
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
        <body>
        <Layout
          banner={banner}
          navbar={
            <Navbar
              logo={<h1 className="text-2xl">Nextra</h1>}
              projectLink="https://github.com/SocialResonance/wiki-next"
            />
          }
          search={<Search placeholder="Search..." />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/SocialResonance/wiki-next"
          editLink="Edit this page on GitHub"
          feedback={{content: Feedback}}
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true }}
          footer={footer}
        >
          {children}
        </Layout>
      </body> 
          </html>
    )
  }