import type { Metadata } from 'next'
import { Link } from 'next-view-transitions'

import Nav from '~/components/Nav'
import OpenGraphImage from '~/opengraph-image.png'
import { cn } from '~/utils/cn'
import { getPostsByYear } from '~/utils/getPostsByYear'

export const metadata: Metadata = {
  title: 'Posts',
  alternates: {
    canonical: './',
  },
  openGraph: {
    images: [
      {
        url: OpenGraphImage.src,
        type: 'image/png',
        width: OpenGraphImage.width,
        height: OpenGraphImage.height,
      },
    ],
    siteName: 'Alan Yang',
    url: './',
  },
}

const links = [
  {
    href: '/',
    title: 'Home',
  },
]

export default async function PostsPage() {
  const postsByYear = await getPostsByYear()

  return (
    <div>
      <Nav links={links} />
      <div className={cn('mb-6 flex')}>
        <h1 className={cn('m-0')} id='posts-title'>
          Posts
        </h1>
      </div>
      {postsByYear.map(([year, posts]) => (
        <div key={year}>
          <h2>{year}</h2>
          <ul>
            {posts.map((post) => (
              <li
                key={post.slug}
                aria-label={`${post.title} posted ${post.date}`}
              >
                <div className={cn('flex justify-between space-x-4')}>
                  <span>
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </span>
                  <span className={cn('shrink-0')}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
