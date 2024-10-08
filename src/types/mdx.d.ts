type Metadata = {
  title?: string
  date?: string
  summary?: string
  alternates?: {
    canonical: string
  }
}

type Post = Required<Omit<Metadata, 'alternates'>> & {
  slug: string
}