import { Link } from 'next-view-transitions'

import { getPostsByYear } from '~/utils/getPostsByYear'

export default async function PostsPage() {
  const postsByYear = await getPostsByYear()

  return (
    <div>
      <Link aria-label='Back to home page' className='text-lg' href='/'>
        Home
      </Link>
      <div className='mb-6 flex'>
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
