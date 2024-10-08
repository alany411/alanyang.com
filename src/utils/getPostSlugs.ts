import fs from 'fs'
import path from 'path'

export function getPostSlugs(postsDirectory: string) {
  const postSlugs = fs
    .readdirSync(postsDirectory)
    .map((fileName) => path.join(postsDirectory, fileName))
    .filter((filePath) => fs.statSync(filePath).isDirectory())
    .map((filePath) => {
      const fileName = path.basename(filePath, '.mdx')
      const slug = fileName.replace(/^\d+-/, '')
      return slug
    })

  return postSlugs
}
