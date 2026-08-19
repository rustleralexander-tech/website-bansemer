import type { MetadataRoute } from 'next'
import { siteConfig, absoluteUrl } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return siteConfig.publicRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
