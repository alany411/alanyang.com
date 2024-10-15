type Metadata = {
  title?: string
  date?: string
  description?: string
  alternates?: {
    canonical: string
  }
}

type Post = Required<Omit<Metadata, 'alternates'>> & {
  slug: string
}
