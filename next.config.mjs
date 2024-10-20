import createMDX from '@next/mdx'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  experimental: {
    mdxRs: false,
    reactCompiler: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.vercel-insights.com https://va.vercel-scripts.com https://vercel.live;
              style-src 'self' 'unsafe-inline' https://vercel.live;
              img-src 'self' https://vercel.live https://vercel.com data: blob:;
              media-src 'none';
              connect-src 'self' https://vercel.live wss://ws-us3.pusher.com;
              font-src 'self' https://vercel.live https://assets.vercel.com;
              frame-src 'self' https://vercel.live;
              object-src 'none';
              base-uri 'self';
              upgrade-insecure-requests;
              frame-ancestors 'none';
            `.replace(/\n/g, ''),
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  },
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
        source: '/work/:slug',
        destination: '/work',
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
