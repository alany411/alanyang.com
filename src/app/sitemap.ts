import type { MetadataRoute } from 'next'
import path from 'path'

import { getPostSlugs } from '~/utils/getPostSlugs'

const baseUrl = 'https://alanyang.com'

export default function sitemap() {
  const lastModified = new Date().toISOString()

  const home: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
  ]

  const routes: MetadataRoute.Sitemap = ['/posts', '/work'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'daily',
    priority: 0.8,
  }))

  const postsDirectory = path.join(
    process.cwd(),
    'src',
    'app',
    'posts',
    '(posts)'
  )
  const slugs = getPostSlugs(postsDirectory)

  const posts: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/posts/${slug}`,
    lastModified,
    changeFrequency: 'daily',
    priority: 0.5,
  }))

  return [...home, ...routes, ...posts]
}
