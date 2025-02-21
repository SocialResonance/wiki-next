import { Search } from 'nextra/components'

import { Encode_Sans_Condensed } from 'next/font/google'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
// Required for theme styles, previously was imported under the hood
import 'nextra-theme-docs/style.css'
 
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

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={encodeSansCondensed.variable}>
                <header>
          <Search />
        </header>
        <body className={encodeSansCondensed.className}>{children}</body>
      </html>
    )
  }