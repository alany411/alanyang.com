import type { IconType } from '@icons-pack/react-simple-icons'
import {
  SiBluesky,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiThreads,
  SiX,
} from '@icons-pack/react-simple-icons'
import { MailIcon } from 'lucide-react'
import { Email } from 'react-obfuscate-email'

import { cn } from '~/utils/cn'

type Network = {
  name: string
  href: string
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
    name: 'X',
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
    icon: SiLinkedin,
  },
]

const commonClassName = cn(`
  relative block overflow-hidden rounded-full p-2 text-[var(--tw-prose-body)]
  outline-none transition-all

  dark:focus:ring-sky-400

  focus:scale-125 focus:rounded-full focus:text-[var(--tw-prose-links)]
  focus:outline-none focus:ring-2 focus:ring-sky-500

  hover:scale-125 hover:text-[var(--tw-prose-links)]
`)

export default function SocialLinks() {
  return (
    <ul
      className={cn(`
        prose prose-neutral flex w-full flex-row flex-wrap gap-3

        dark:prose-invert
      `)}
    >
      {NETWORKS.map(({ name, href, icon: Icon }) => {
        return (
          <li key={name} className={cn('m-0 list-none')}>
            {href === 'email' ? (
              <Email
                aria-label='Send Alan Yang an email'
                className={commonClassName}
                email='me@alanyang.com'
              >
                <Icon className={cn('pointer-events-none')} size={32} />
              </Email>
            ) : (
              <a
                aria-label={`View Alan Yang's ${name} profile, opens in new tab`}
                className={commonClassName}
                href={href}
                rel='noopener noreferrer'
                target='_blank'
              >
                <Icon className={cn('pointer-events-none')} size={32} />
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}
