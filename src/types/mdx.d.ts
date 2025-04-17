type MdxMetadata = {
  title?: string
  date?: string
  description?: string
  alternates?: {
    canonical: string
  }
}

type Post = Required<Omit<MdxMetadata, 'alternates'>> & {
  slug: string
}

type Project = Required<Omit<MdxMetadata, 'alternates'>> & {
  slug: string
}
