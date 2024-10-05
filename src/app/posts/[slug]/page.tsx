import dynamic from 'next/dynamic'
import { Link } from 'next-view-transitions'

import { getPostMetadata } from '~/utils/getPostMetadata'

interface PostPageProps {
  params: {
    slug: string
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { title } = await getPostMetadata(params.slug)

  const PostMarkdown = dynamic(() => import('~/posts/' + params.slug + '.mdx'))

  return (
    <div>
      <div className='space-x-1 text-lg'>
        <Link aria-label='Back to home page' href='/'>
          Home
        </Link>
        <span>/</span>
        <Link aria-label='Go to posts page' href='/posts'>
          Posts
        </Link>
      </div>
      <div className='mb-6 flex'>
        <h1 className='m-0'>{title}</h1>
      </div>
      <PostMarkdown />
    </div>
  )
}
