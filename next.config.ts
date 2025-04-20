/* eslint-disable @typescript-eslint/require-await */
import createMDX from '@next/mdx'
import type { NextConfig } from 'next'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const getContentSecurityPolicy = () => {
  const contentSecurityPolicyDirective = {
    'base-uri': [`'self'`],
    'default-src': [`'none'`],
    'frame-ancestors': [`'none'`],
    'font-src': [`'self'`],
    'form-action': [`'self'`],
    'frame-src': [`'self'`],
    'connect-src': [`'self'`],
    'img-src': [`'self'`],
    'manifest-src': [`'self'`],
    'object-src': [`'none'`],
    'report-to': ['csp'],
    'script-src': [`'self'`, `'unsafe-inline'`],
    'style-src': [`'self'`, `'unsafe-inline'`],
  }

  if (process.env.NODE_ENV === 'development') {
    contentSecurityPolicyDirective['script-src'].push(`'unsafe-eval'`)
  }

  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
    contentSecurityPolicyDirective['connect-src'].push('https://vercel.live')
    contentSecurityPolicyDirective['connect-src'].push('wss://*.pusher.com')
    contentSecurityPolicyDirective['img-src'].push('https://vercel.com')
    contentSecurityPolicyDirective['font-src'].push('https://vercel.live')
    contentSecurityPolicyDirective['frame-src'].push('https://vercel.live')
    contentSecurityPolicyDirective['style-src'].push('https://vercel.live')
  }

  return Object.entries(contentSecurityPolicyDirective)
    .map(([key, value]) => `${key} ${value.join(' ')}`)
    .join('; ')
}

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
            value: getContentSecurityPolicy(),
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort=()',
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
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
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
