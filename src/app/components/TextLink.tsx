import { Link } from 'next-view-transitions'
import type { ReactNode } from 'react'

import { cn } from '~/utils/cn'

interface TextLinkProps {
  ariaLabel: string
  children: ReactNode
  className?: string
  external?: boolean
  href: string
}

export default function TextLink({
  ariaLabel,
  children,
  className,
  external = false,
  href,
}: TextLinkProps) {
  return external ? (
    <a
      aria-label={ariaLabel}
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      className={cn(
        'whitespace-nowrap text-[var(--link-color)] underline decoration-[var(--link-underline-color)] decoration-2 underline-offset-[3px] transition-colors hover:decoration-[var(--link-underline-hover-color)] focus:rounded focus:outline-none focus:ring-2 focus:ring-[var(--link-color)] focus:ring-offset-2 focus:ring-offset-[var(--background)]',
        className
      )}
    >
      {children}
    </a>
  ) : (
    <Link
      href={href}
      className={cn(
        'whitespace-nowrap text-[var(--link-color)] underline decoration-[var(--link-underline-color)] decoration-2 underline-offset-[3px] transition-colors hover:decoration-[var(--link-underline-hover-color)] focus:rounded focus:outline-none focus:ring-2 focus:ring-[var(--link-color)] focus:ring-offset-2 focus:ring-offset-[var(--background)]',
        className
      )}
    >
      {children}
    </Link>
  )
}
