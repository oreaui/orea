import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const siteUrl = 'https://www.orea.ink'
const siteName = 'Orea UI'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Premium animated React components`,
    template: `%s — ${siteName}`,
  },
  description:
    'Discover Orea UI: a curated collection of premium, animated React components powered by Framer Motion. Preview, copy, and ship production-ready UI in minutes.',
  keywords: [
    'React components',
    'animated UI',
    'Framer Motion',
    'React library',
    'copy-paste components',
    'open source',
    'premium UI kit',
    'React animation',
    'component library',
  ],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: `${siteName} — Premium animated React components`,
    description:
      'A curated collection of premium, animated React components powered by Framer Motion. Preview, copy, and ship.',
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Orea UI — Premium animated React components',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} — Premium animated React components`,
    description:
      'A curated collection of premium, animated React components powered by Framer Motion. Preview, copy, and ship.',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Orea UI',
  url: siteUrl,
  description:
    'A curated collection of premium, animated React components powered by Framer Motion.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-background font-sans">
        {children}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
