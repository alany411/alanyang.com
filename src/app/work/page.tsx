import type { Metadata } from 'next'

import Nav from '~/components/Nav'
import OpenGraphImage from '~/opengraph-image.png'
import { cn } from '~/utils/cn'

export const metadata: Metadata = {
  title: 'Work',
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

export default function Work() {
  return (
    <div>
      <Nav links={links} />
      <div className={cn('mb-6 flex')}>
        <h1 className={cn('m-0')} id='work-title'>
          Work
        </h1>
      </div>
    </div>
  )
}
