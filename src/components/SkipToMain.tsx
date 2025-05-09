import { Link } from 'next-view-transitions'

import { cn } from '~/utils/cn'

export default function SkipToMain() {
  return (
    <Link
      aria-label='Skip to main content'
      href='#main-content'
      className={cn(`
        prose prose-neutral absolute -top-full left-1/2 -translate-x-1/2 p-2
        decoration-transparent decoration-2 underline-offset-[3px]
        transition-all
        dark:prose-invert dark:hover:decoration-sky-400 dark:focus:ring-sky-400
        dark:focus:ring-offset-neutral-900
        hover:decoration-sky-500
        focus:top-4 focus:ring-2 focus:ring-sky-500 focus:ring-offset-0
        focus:ring-offset-white focus:outline-hidden
      `)}
    >
      Skip to main content
    </Link>
  )
}
