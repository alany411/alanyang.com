import { Link } from 'next-view-transitions'
import type { AnchorHTMLAttributes } from 'react'

export default function A({
  children,
  href,
  ...otherProps
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) throw new Error('A component requires a href prop')

  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <Link href={href} {...otherProps}>
        {children}
      </Link>
    )
  }

  return (
    <a
      aria-label={`${children as string}, opens in new tab`}
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      {...otherProps}
    >
      {children}
    </a>
  )
}
