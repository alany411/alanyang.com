'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '~/utils/cn'

type IconButtonProps = {
  children: string
  buttonProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>
  icon: {
    svg: ReactNode
    position: 'left' | 'right'
  }
}

export default function IconButton({
  children,
  buttonProps,
  icon: { svg, position },
}: IconButtonProps) {
  return (
    <button {...buttonProps}>
      <span
        className={cn(`
          transition-colors

          group-focus:text-sky-400

          group-hover:text-sky-400
        `)}
      >
        {position === 'left' && svg}
        <span>{children}</span>
        {position === 'right' && svg}
      </span>
    </button>
  )
}
