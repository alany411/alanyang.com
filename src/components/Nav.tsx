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
    <nav className={cn('text-lg', links.length > 0 && 'space-x-1')}>
      {links.map(({ href, title }, index) => (
        <Fragment key={href}>
          {index !== 0 && <span className={cn('text-sky-400')}>/</span>}
          <Link href={href}>{title}</Link>
        </Fragment>
      ))}
    </nav>
  )
}
