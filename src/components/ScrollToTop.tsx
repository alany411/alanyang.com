'use client'

import { useEffect, useState } from 'react'

import { cn } from '~/utils/cn'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <span
      className={cn(
        'absolute -top-4 right-0 shrink-0 transition-opacity',
        isVisible
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      )}
    >
      <button
        aria-hidden={!isVisible}
        aria-label='Scroll to top'
        tabIndex={isVisible ? 0 : -1}
        className={cn(`
          group prose prose-neutral inline-flex items-center justify-center
          space-x-1 bg-neutral-200 p-2 text-xs

          dark:prose-invert dark:bg-neutral-800

          focus:outline-none
        `)}
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }}
      >
        <span>Scroll to top</span>
        <span
          className={cn(`
            transition-colors

            group-focus:text-sky-400

            group-hover:text-sky-400
          `)}
        >
          <svg
            className='size-4'
            fill='currentColor'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              clipRule='evenodd'
              d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.75 10.25a.75.75 0 0 0 1.5 0V6.56l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v4.69Z'
              fillRule='evenodd'
            />
          </svg>
        </span>
      </button>
    </span>
  )
}
