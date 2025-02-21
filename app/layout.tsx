import { Search } from 'nextra/components'

import { Encode_Sans_Condensed } from 'next/font/google'

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