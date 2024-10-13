import type { MetadataRoute } from 'next'

export default function robots() {
  const robots: MetadataRoute.Robots = {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://alanyang.com/sitemap.xml',
  }

  return robots
}
