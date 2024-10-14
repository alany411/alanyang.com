'use client'

import type { LucideIcon } from 'lucide-react'
import { useTransitionRouter } from 'next-view-transitions'
import type { ButtonHTMLAttributes, MouseEvent, ReactElement } from 'react'
import { memo, useCallback } from 'react'

import { cn } from '~/utils/cn'

type LucideIconElement = ReactElement<LucideIcon>

const Icon = memo(({ lucideIcon }: { lucideIcon: LucideIconElement }) => (
  <span
    className={cn(`
      transition-colors

      dark:group-hover:text-sky-400 dark:group-focus:text-sky-400

      group-focus:text-sky-500

      group-hover:text-sky-500
    `)}
  >
    {lucideIcon}
  </span>
))

type IconButtonProps = {
  children: string
  icon: {
    lucideIcon: LucideIconElement
    position: 'left' | 'right'
  }
  navigate?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

function IconButton({
  children,
  icon: { lucideIcon, position },
  navigate,
  ...buttonProps
}: IconButtonProps) {
  const router = useTransitionRouter()

  const {
    'aria-label': ariaLabel,
    className,
    onClick,
    ...otherButtonProps
  } = buttonProps

  const handleOnClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (navigate) {
        router.push(navigate)
      }

      if (onClick) {
        onClick(e)
      }
    },
    [navigate, onClick, router]
  )

  return (
    <button
      aria-label={ariaLabel ? ariaLabel : children}
      type='button'
      className={cn(
        `
          group prose prose-neutral inline-flex items-center justify-center
          space-x-1 bg-neutral-200 p-2 text-xs font-semibold transition-all

          dark:prose-invert dark:bg-neutral-800 dark:focus:ring-sky-400

          focus:outline-none focus:ring-2 focus:ring-sky-500
        `,
        className
      )}
      onClick={handleOnClick}
      {...otherButtonProps}
    >
      {position === 'left' && <Icon lucideIcon={lucideIcon} />}
      <span>{children}</span>
      {position === 'right' && <Icon lucideIcon={lucideIcon} />}
    </button>
  )
}

const MemoizedIconButton = memo(IconButton)

export default MemoizedIconButton
