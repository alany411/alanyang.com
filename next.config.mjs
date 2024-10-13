import createMDX from '@next/mdx'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  experimental: { mdxRs: false },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/posts',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/posts/:slug',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sitemap',
        destination: '/sitemap.xml',
        permanent: false,
      },
      {
        source: '/uses',
        destination: '/',
        permanent: true,
      },
      {
        source: '/work',
        destination: '/',
        permanent: true,
      },
      {
        source: '/work/:slug',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrismPlus, rehypeMdxCodeProps],
  },
})

export default withMDX(nextConfig)
