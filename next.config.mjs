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
              script-src 'self' https://cdn.vercel-insights.com https://va.vercel-scripts.com https://vercel.live 'sha256-OBTN3RiyCV4Bq7dFqZ5a2pAXjnCcCYeTJMO2I/LYKeo=' 'sha256-JQMxaFGDmeqTJsj5aZwkXDUj15Vi4w3cVdckV5APT0Q=' 'sha256-4gNMjCUgSqEbm/c1qsMc4ikMSrVyoMwGmKsBJ6vrNV0=' 'sha256-I58WLd8b6rWZqcm3Rs8ziPrevCZ7Q+kN208hUBa32CQ=' 'sha256-T2jo8MOEy/DgLn7vrieYAcHgXXI8IIs4znenPmr6A6Y=' 'sha256-s9uSRn7dRbXci0NwvDbS8ZCjtbN+I99eWAze17HVXME=' 'sha256-6Tn+5fOrALmOpmYCtqeBqhvUTNx9siW+NKMvd5MXdMc=';
              style-src 'self' 'unsafe-inline';
              img-src 'self';
              media-src 'none';
              connect-src 'self';
              font-src 'self';
              frame-src 'self';
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
