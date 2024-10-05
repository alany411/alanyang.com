import { notFound } from 'next/navigation'

export async function getPostMetadata(slug: string) {
  try {
    const file = (await import('~/posts/' + slug + '.mdx')) as {
      metadata?: Metadata
    }

    if (file.metadata) {
      if (
        !file.metadata.title ||
        !file.metadata.summary ||
        !file.metadata.date
      ) {
        throw new Error(`Missing some required metadata fields in: ${slug}`)
      }

      return {
        slug,
        title: file.metadata.title,
        date: file.metadata.date,
        summary: file.metadata.summary,
      }
    } else {
      throw new Error(`Unable to find metadata for ${slug}.mdx`)
    }
  } catch (_error) {
    return notFound()
  }
}
