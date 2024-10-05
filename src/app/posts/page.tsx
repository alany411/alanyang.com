import Link from 'next/link'

import { getPostsByYear } from '~/utils/getPostsByYear'

export const metadata = {
  title: 'Posts',
}

export default function PostsPage() {
  const postsByYear = getPostsByYear()

  return (
    <div>
      <h1>Posts</h1>
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
