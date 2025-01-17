/* eslint-disable @typescript-eslint/require-await */
import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  poweredByHeader: false,
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
              img-src 'self' data: blob: https://vercel.com https://vercel.live;
              media-src 'none';
              connect-src 'self' https://vercel.live wss://ws-us3.pusher.com;
              font-src 'self' https://assets.vercel.com https://vercel.live;
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
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
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
    rehypePlugins: [rehypeSlug, rehypePrismPlus, rehypeMdxCodeProps],
  },
})

export default withMDX(nextConfig)
