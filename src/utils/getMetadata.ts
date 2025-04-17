export async function getMetadata(folder: string, slug: string) {
  const file = (await import(
    `../app/${folder}/(${folder})/${slug}/page.mdx`
  )) as {
    metadata?: MdxMetadata
  }

  if (file.metadata) {
    if (
      !file.metadata.title ||
      !file.metadata.description ||
      !file.metadata.date
    ) {
      throw new Error(`Missing some required metadata fields in: ${slug}`)
    }

    return {
      slug,
      title: file.metadata.title,
      date: file.metadata.date,
      description: file.metadata.description,
    }
  } else {
    throw new Error(`Unable to find metadata for ${slug}.mdx`)
  }
}
