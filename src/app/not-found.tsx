import { HouseIcon } from 'lucide-react'
import type { Metadata } from 'next'

import IconButton from '~/components/IconButton'
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
      <p className={cn('text-xl font-medium text-[var(--tw-prose-headings)]')}>
        You seem to be lost...
      </p>
      <p>
        The page you are looking for does not exist. Maybe the page was moved or
        deleted.{' '}
        <span
          aria-hidden={true}
          className={cn(
            'whitespace-nowrap font-semibold text-[var(--tw-prose-headings)]'
          )}
        >
          ¯\_(ツ)_/¯
        </span>{' '}
        How you got here is a mystery, but you can click the button below to go
        back to the homepage.
      </p>
      <IconButton
        navigate='/'
        icon={{
          position: 'left',
          lucideIcon: <HouseIcon absoluteStrokeWidth={true} size={16} />,
        }}
      >
        Home
      </IconButton>
    </div>
  )
}
