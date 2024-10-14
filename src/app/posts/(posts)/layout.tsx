import type { Metadata } from 'next'

import Nav from '~/components/Nav'
import OpenGraphImage from '~/opengraph-image.png'

export const metadata: Metadata = {
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
  {
    href: '/posts',
    title: 'Posts',
  },
]

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Nav links={links} />
      {children}
    </div>
  )
}
