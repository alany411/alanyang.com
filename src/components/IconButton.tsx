import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useCallback } from 'react'

import { cn } from '~/utils/cn'

type IconButtonProps = {
  children: string
  icon: {
    svg: ReactNode
    position: 'left' | 'right'
  }
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

export default function IconButton({
  children,
  icon: { svg, position },
  ...buttonProps
}: IconButtonProps) {
  const { className, ...otherButtonProps } = buttonProps

  const Icon = useCallback(() => {
    return (
      <span
        className={cn(`
          transition-colors

          group-focus:text-sky-400

          group-hover:text-sky-400
        `)}
      >
        {svg}
      </span>
    )
  }, [svg])

  return (
    <button
      className={cn(
        `
          group prose prose-neutral inline-flex items-center justify-center
          space-x-1 bg-neutral-200 p-2 text-xs

          dark:prose-invert dark:bg-neutral-800

          focus:outline-none
        `,
        className
      )}
      {...otherButtonProps}
    >
      {position === 'left' && <Icon />}
      <span>{children}</span>
      {position === 'right' && <Icon />}
    </button>
  )
}
