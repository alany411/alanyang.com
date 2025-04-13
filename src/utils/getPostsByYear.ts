import path from 'path'

import { getMetadata } from './getMetadata'
import { getSlugs } from './getSlugs'

export async function getPostsByYear() {
  const postsDirectory = path.join(
    process.cwd(),
    'src',
    'app',
    'posts',
    '(posts)'
  )

  const postsPromises = getSlugs(postsDirectory).map(async (slug) => {
    const metadata = await getMetadata('posts', slug)
    return metadata
  })

  const posts = await Promise.all(postsPromises)

  const postsByYearObject = posts.reduce<Record<string, Post[]>>(
    (acc, post) => {
      const year = new Date(post.date).getFullYear().toString()
      acc[year] = acc[year] ?? []
      acc[year].push(post)
      return acc
    },
    {}
  )

  const sortedPostsByYear = Object.entries(postsByYearObject).sort((a, b) =>
    b[0].localeCompare(a[0])
  )

  return sortedPostsByYear
}
