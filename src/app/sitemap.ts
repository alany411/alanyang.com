import type { MetadataRoute } from 'next'
import path from 'path'

import { getSlugs } from '~/utils/getSlugs'

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

  const routes: MetadataRoute.Sitemap = [
    '/photos',
    '/posts',
    '/projects',
    '/work',
  ].map((route) => ({
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
  const postSlugs = getSlugs(postsDirectory)
  const posts: MetadataRoute.Sitemap = postSlugs.map((postSlug) => ({
    url: `${baseUrl}/posts/${postSlug}`,
    lastModified,
    changeFrequency: 'daily',
    priority: 0.5,
  }))

  const projectsDirectory = path.join(
    process.cwd(),
    'src',
    'app',
    'projects',
    '(projects)'
  )
  const projectSlugs = getSlugs(projectsDirectory)
  const projects: MetadataRoute.Sitemap = projectSlugs.map((projectSlug) => ({
    url: `${baseUrl}/projects/${projectSlug}`,
    lastModified,
    changeFrequency: 'daily',
    priority: 0.5,
  }))

  return [...home, ...routes, ...posts, ...projects]
}
