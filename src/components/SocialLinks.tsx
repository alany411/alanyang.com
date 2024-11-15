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

import { cn } from '~/utils/cn'

import IconButton from './IconButton'

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
