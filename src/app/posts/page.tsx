import Image from 'next/image'
import { Link } from 'next-view-transitions'

import { getPostsByYear } from '~/utils/getPostsByYear'

export const metadata = {
  title: 'Posts',
}

export default function PostsPage() {
  const postsByYear = getPostsByYear()

  return (
    <div>
      <div className='mb-6 flex flex-row items-center gap-4'>
        <Link
          aria-label='Back to home page'
          className='not-prose group focus:no-underline focus:outline-none focus:ring-0'
          href='/'
        >
          <Image
            alt='Alan Yang profile'
            aria-hidden={true}
            className='m-0 overflow-hidden rounded-full outline-none transition-all group-hover:scale-125 group-hover:text-[var(--tw-prose-links)] group-focus:scale-125 group-focus:rounded-full group-focus:outline-none group-focus:ring-2 group-focus:ring-sky-400 group-focus:ring-offset-2 group-focus:ring-offset-white dark:group-focus:ring-offset-neutral-900'
            height={36}
            priority={true}
            src='/me.jpg'
            width={36}
          />
        </Link>
        <h1 className='m-0'>Posts</h1>
      </div>
      {Object.entries(postsByYear).map(([year, posts]) => (
        <div key={year}>
          <h2>{year}</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
