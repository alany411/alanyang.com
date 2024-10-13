'use client'

import { useRouter } from 'next/navigation'
import type {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactElement,
  SVGProps,
} from 'react'
import { useCallback } from 'react'

import { cn } from '~/utils/cn'

type IconButtonProps = {
  children: string
  icon: {
    svg: ReactElement<SVGProps<SVGSVGElement>>
    position: 'left' | 'right'
  }
  navigate?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

export default function IconButton({
  children,
  icon: { svg, position },
  navigate,
  ...buttonProps
}: IconButtonProps) {
  const router = useRouter()

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
      aria-label={ariaLabel ? ariaLabel : children}
      type='button'
      className={cn(
        `
          group prose prose-neutral inline-flex items-center justify-center
          space-x-1 bg-neutral-200 p-2 text-xs

          dark:prose-invert dark:bg-neutral-800

          focus:outline-none
        `,
        className
      )}
      onClick={handleOnClick}
      {...otherButtonProps}
    >
      {position === 'left' && <Icon />}
      <span>{children}</span>
      {position === 'right' && <Icon />}
    </button>
  )
}
