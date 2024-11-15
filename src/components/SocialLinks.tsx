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
    icon: SiLinkedin,
  },
]

const linkClasses = cn(`
  group prose prose-neutral inline-flex cursor-pointer items-center
  justify-center space-x-1 bg-neutral-200 p-2 text-xs font-semibold no-underline
  transition-all

  dark:prose-invert dark:bg-neutral-800 dark:focus:ring-sky-400

  focus:outline-none focus:ring-2 focus:ring-sky-500
`)

const iconClasses = cn(`
  transition-colors

  dark:group-hover:text-sky-400 dark:group-focus:text-sky-400

  group-focus:text-sky-500

  group-hover:text-sky-500
`)

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
          <li key={name} className='m-0 list-none p-0'>
            {href === 'email' ? (
              <Email className={linkClasses} email='me@alanyang.com'>
                <Icon aria-hidden={true} className={iconClasses} size={16} />
                <span>{name}</span>
              </Email>
            ) : (
              <a
                className={linkClasses}
                href={href}
                rel='noopener noreferrer'
                target='_blank'
              >
                <Icon aria-hidden={true} className={iconClasses} size={16} />
                <span>{name}</span>
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}
