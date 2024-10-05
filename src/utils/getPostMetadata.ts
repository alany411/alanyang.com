export async function getPostMetadata(slug: string) {
  const file = (await import('~/app/posts/(posts)/' + slug + '/page.mdx')) as {
    metadata?: Metadata
  }

  if (file.metadata) {
    if (!file.metadata.title || !file.metadata.summary || !file.metadata.date) {
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
}
