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
          svg: (
            <svg
              className='size-4'
              fill='currentColor'
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z' />
            </svg>
          ),
        }}
      >
        Home
      </IconButton>
    </div>
  )
}
