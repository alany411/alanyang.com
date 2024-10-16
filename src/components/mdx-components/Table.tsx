import type { TableHTMLAttributes } from 'react'

import { cn } from '~/utils/cn'

export default function Table({
  children,
  ...otherProps
}: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div
      className={cn(`
        table-container my-8 overflow-x-auto

        dark:scrollbar-thumb:bg-neutral-700

        scrollbar-thumb:bg-neutral-300

        scrollbar:h-3.5 scrollbar:bg-transparent
      `)}
    >
      <table className={cn('m-0')} {...otherProps}>
        {children}
      </table>
    </div>
  )
}
