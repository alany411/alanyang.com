import type { MetadataRoute } from 'next'
import path from 'path'

import { getPostSlugs } from '~/utils/getPostSlugs'

export default function sitemap() {
  const lastModified = new Date().toISOString()
  const routes: MetadataRoute.Sitemap = ['', '/posts'].map((route) => ({
    url: `https://alanyang.com${route}`,
    lastModified,
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
    url: `https://alanyang.com/posts/${slug}`,
    lastModified,
  }))

  return [...routes, ...posts]
}
