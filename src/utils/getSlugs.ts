import fs from 'fs'
import path from 'path'

export function getSlugs(directory: string) {
  const postSlugs = fs
    .readdirSync(directory)
    .map((fileName) => path.join(directory, fileName))
    .filter((filePath) => fs.statSync(filePath).isDirectory())
    .map((filePath) => {
      const fileName = path.basename(filePath, '.mdx')
      const slug = fileName.replace(/^\d+-/, '')
      return slug
    })

  return postSlugs
}
