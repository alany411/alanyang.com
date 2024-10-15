'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Link } from 'next-view-transitions'
import { Fragment, useMemo } from 'react'

import { cn } from '~/utils/cn'
import { toCapitalize } from '~/utils/toCapitalize'

const home = {
  href: '/',
  title: 'Home',
}

export default function Nav() {
  const pathname = usePathname()

  const links = useMemo(() => {
    const firstPath = pathname.split('/').filter(Boolean).slice(0, -1)[0]

    return [
      home,
      firstPath && {
        href: `/${firstPath}`,
        title: toCapitalize(firstPath),
      },
    ].filter(Boolean)
  }, [pathname])

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
