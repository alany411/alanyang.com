import fs from 'fs'
import path from 'path'

import { getPostMetadata } from './getPostMetadata'

export async function getPostsByYear() {
  const postsDirectory = path.join(
    process.cwd(),
    'src',
    'app',
    'posts',
    '(posts)'
  )
  const postFilePaths = fs
    .readdirSync(postsDirectory)
    .map((fileName) => path.join(postsDirectory, fileName))
    .filter((filePath) => fs.statSync(filePath).isDirectory())

  const postsPromises = postFilePaths.map(async (filePath) => {
    const fileName = path.basename(filePath, '.mdx')
    const slug = fileName.replace(/^\d+-/, '')
    const metadata = await getPostMetadata(slug)

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

  return Object.entries(postsByYearObject).sort((a, b) =>
    b[0].localeCompare(a[0])
  )
}
