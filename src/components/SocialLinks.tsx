import type { IconType } from '@icons-pack/react-simple-icons'
import {
  SiBluesky,
  SiGithub,
  SiInstagram,
  SiThreads,
  SiX,
} from '@icons-pack/react-simple-icons'
import { MailIcon } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'

import { cn } from '~/utils/cn'

import IconButton from './IconButton'

/**
 * Simple Icons removed the LinkedIn icon from the package, so we have to
 * re-implement it here.
 * https://github.com/simple-icons/simple-icons/issues/11372
 */
type SiLinkedInProps = ComponentPropsWithoutRef<'svg'> & {
  title?: string
  color?: string
  size?: string | number
}
const SiLinkedIn: IconType = forwardRef<SVGSVGElement, SiLinkedInProps>(
  function SiLinkedIn(
    { title = 'LinkedIn', color = 'currentColor', size = 24, ...others },
    ref
  ) {
    if (color === 'default') {
      color = '#0A66C2'
    }

    return (
      <svg
        ref={ref}
        fill={color}
        height={size}
        viewBox='0 0 24 24'
        width={size}
        xmlns='http://www.w3.org/2000/svg'
        {...others}
      >
        <title>{title}</title>
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    )
  }
)

type Network = {
  name: string
  href: 'email' | `https://${string}`
  icon: IconType
}

const NETWORKS: Network[] = [
  {
    name: 'Email',
    href: 'email',
    icon: MailIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/alany411',
    icon: SiGithub,
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/alanyang.com',
    icon: SiBluesky,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/iam_alanyang',
    icon: SiX,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/iam.alanyang/',
    icon: SiInstagram,
  },
  {
    name: 'Threads',
    href: 'https://www.threads.net/@iam.alanyang',
    icon: SiThreads,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/iam-alan-yang/',
    icon: SiLinkedIn,
  },
]

export default function SocialLinks() {
  return (
    <ul
      className={cn(`
        prose prose-neutral flex w-full flex-row flex-wrap items-center gap-2
        dark:prose-invert
      `)}
    >
      {NETWORKS.map(({ name, href, icon: Icon }) => {
        return (
          <li key={name} className='mt-0 mb-0 list-none p-0'>
            {href === 'email' ? (
              <IconButton
                className='no-underline'
                email='me@alanyang.com'
                variant='email'
                icon={{
                  component: <Icon aria-hidden={true} size={16} />,
                  position: 'left',
                }}
              >
                {name}
              </IconButton>
            ) : (
              <IconButton
                className='no-underline'
                href={href}
                variant='external'
                icon={{
                  component: <Icon aria-hidden={true} size={16} />,
                  position: 'left',
                }}
              >
                {name}
              </IconButton>
            )}
          </li>
        )
      })}
    </ul>
  )
}
