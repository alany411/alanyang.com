import type { Metadata } from 'next'

import Nav from '~/components/Nav'
import { cn } from '~/utils/cn'

export const metadata: Metadata = {
  title: 'Not Found',
}

const links = [
  {
    href: '/',
    title: 'Home',
  },
]

export default function NotFound() {
  return (
    <div>
      <Nav links={links} />
      <div className={cn('mb-6 flex')}>
        <h1 className={cn('m-0')}>Not Found</h1>
      </div>
      <p>You seem to be lost... This path does not exist.</p>
      <p>
        Maybe it was moved or deleted.{' '}
        <span className={cn('whitespace-nowrap font-semibold')}>
          ¯\_(ツ)_/¯
        </span>
      </p>
    </div>
  )
}
