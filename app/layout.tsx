import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { siteConfig, absoluteUrl } from '@/config/site'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.title,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.person.fullName }],
  creator: siteConfig.person.fullName,
  alternates: { canonical: absoluteUrl('/') },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.person.fullName,
    type: 'website',
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.ogDescription,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: siteConfig.seo.themeColor,
  width: 'device-width',
  initialScale: 1,
}

/**
 * Strukturdaten für die lokale Suche: der Berater als Person, verknüpft mit
 * seinem Einzelunternehmen als ProfessionalService.
 */
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': absoluteUrl('/#person'),
      name: siteConfig.person.fullName,
      givenName: siteConfig.person.firstName,
      familyName: siteConfig.person.lastName,
      jobTitle: siteConfig.person.role,
      url: siteConfig.url,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      knowsAbout: [...siteConfig.seo.keywords],
      worksFor: { '@id': absoluteUrl('/#business') },
    },
    {
      '@type': 'ProfessionalService',
      '@id': absoluteUrl('/#business'),
      name: siteConfig.address.company,
      description: siteConfig.seo.description,
      url: siteConfig.url,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      priceRange: 'Kostenlose Erstberatung',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        postalCode: siteConfig.address.postalCode,
        addressLocality: siteConfig.address.city,
        addressCountry: siteConfig.address.countryCode,
      },
      areaServed: siteConfig.region.serviceArea,
      founder: { '@id': absoluteUrl('/#person') },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${playfair.variable} ${inter.variable} bg-background`}
    >
      <body className="antialiased font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}
