'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'
import { Fragment } from 'react'

import { cn } from '~/utils/cn'
import { toCapitalize } from '~/utils/toCapitalize'

const home = {
  href: '/',
  title: 'Home',
}

export default function Nav() {
  const pathname = usePathname()

  const firstPath = pathname.split('/').filter(Boolean).slice(0, -1)[0]
  const links = [
    home,
    firstPath && {
      href: `/${firstPath}`,
      title: toCapitalize(firstPath),
    },
  ].filter(Boolean)

  return (
    <div className={cn('flex flex-row items-center space-x-2')}>
      <Image
        alt='Alan Yang profile'
        height={24}
        priority={true}
        src='/me.jpg'
        width={24}
        className={cn(
          `
            my-0 size-6 select-none overflow-hidden rounded-full

            [view-transition-name:profile-picture]
          `
        )}
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
            <Link
              href={href}
              className={cn(
                `
                  [view-transition-name:${title.toLowerCase()}-title]
                `
              )}
            >
              {title}
            </Link>
          </Fragment>
        ))}
      </nav>
    </div>
  )
}
