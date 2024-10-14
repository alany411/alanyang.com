import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { Fragment } from 'react'

import { cn } from '~/utils/cn'

type NavProps = {
  links: {
    href: string
    title: string
  }[]
}

export default function Nav({ links }: NavProps) {
  return (
    <div className={cn('flex flex-row items-center space-x-2')}>
      <Image
        alt='Alan Yang profile'
        className={cn(`my-0 size-6 select-none overflow-hidden rounded-full`)}
        height={24}
        id='profile-picture'
        priority={true}
        src='/me.jpg'
        width={24}
      />
      <nav className={cn('text-lg', links.length > 0 && 'space-x-1')}>
        {links.map(({ href, title }, index) => (
          <Fragment key={href}>
            {index !== 0 && (
              <span
                className={cn(`
                  text-sky-500

                  dark:text-sky-400
                `)}
              >
                /
              </span>
            )}
            <Link href={href} id={`${title.toLowerCase()}-title`}>
              {title}
            </Link>
          </Fragment>
        ))}
      </nav>
    </div>
  )
}
