import { Link } from 'next-view-transitions'

import { getPostsByYear } from '~/utils/getPostsByYear'

export const metadata = {
  title: 'Posts',
}

export default async function PostsPage() {
  const postsByYear = await getPostsByYear()

  return (
    <div>
      <div className='text-lg'>
        <Link aria-label='Back to home page' href='/'>
          Home
        </Link>
      </div>
      <div className='mb-6 flex'>
        <h1 className='m-0'>Posts</h1>
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
                <div className='flex justify-between space-x-4'>
                  <span>
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </span>
                  <span className='shrink-0'>
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
