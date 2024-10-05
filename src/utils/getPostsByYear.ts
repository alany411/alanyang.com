import fs from 'fs'
import path from 'path'

interface Metadata {
  title: string
  date: string
  summary: string
}

type Post = Metadata & {
  slug: string
}

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'posts')

function getPostFiles() {
  const directories = fs.readdirSync(postsDirectory)

  const postFiles = directories
    .filter((filename) =>
      fs.statSync(path.join(postsDirectory, filename)).isDirectory()
    )
    .map((filename) => path.join(filename, 'page.mdx'))

  return postFiles
}

function getPostMetadata(file: string) {
  const contents = fs.readFileSync(file, 'utf8')

  const metadataRegex = /export\s+const\s+metadata\s*=\s*(\{[\s\S]*\})/
  const metadataMatch = metadataRegex.exec(contents)

  if (!metadataMatch?.[1]) {
    throw new Error('Metadata not found')
  }

  const metadata = metadataMatch[1]
  const formattedMetadataString = metadata
    .replace(/(\w+):/g, '"$1":')
    .replace(/'/g, '"')
    .replace(/,\s*}/g, '}')

  const formattedMetadata = JSON.parse(formattedMetadataString) as Metadata

  return formattedMetadata
}

export function getPostsByYear() {
  const postFiles = getPostFiles()

  const postsByYear = postFiles
    .map((postFile) => {
      const metadata = getPostMetadata(path.join(postsDirectory, postFile))
      const slug = postFile.replace('page.mdx', '')

      return {
        ...metadata,
        slug,
      } as Post
    })
    .reduce<Record<string, Post[]>>((acc, post) => {
      const year = new Date(post.date).getFullYear().toString()
      acc[year] = acc[year] ?? []
      acc[year].push(post)
      return acc
    }, {})

  return postsByYear
}
