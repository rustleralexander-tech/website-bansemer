import type { MetadataRoute } from 'next'
import { siteConfig, absoluteUrl } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Rechtsseiten sind erreichbar, sollen aber nicht indexiert werden.
      disallow: [...siteConfig.legalRoutes],
    },
    sitemap: absoluteUrl('/sitemap.xml'),
    host: siteConfig.url,
  }
}
