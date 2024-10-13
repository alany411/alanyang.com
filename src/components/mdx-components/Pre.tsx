'use client'

import type { HTMLAttributes } from 'react'
import { useRef, useState } from 'react'

import { cn } from '~/utils/cn'

type PreProps = HTMLAttributes<HTMLPreElement> & {
  showLineNumbers?: string
  title?: string
}

export default function Pre(props: PreProps) {
  const { className, title, ...otherProps } = props
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [isCopied, setIsCopied] = useState(false)

  if (!title) throw new Error('Pre component requires a title prop')

  const handleOnClick = async () => {
    if (contentRef.current) {
      await navigator.clipboard.writeText(contentRef.current.textContent ?? '')
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    }
  }

  return (
    <figure className={cn('my-8')}>
      <figcaption
        className={cn(
          `
            prose prose-neutral rounded-t-2xl border-2 border-b-0
            border-neutral-200 bg-neutral-200 px-5 py-1 font-mono font-bold

            dark:prose-invert dark:border-neutral-800 dark:bg-neutral-800
          `
        )}
      >
        {title}
      </figcaption>
      <div
        ref={contentRef}
        className={cn(`
          overflow-hidden rounded-br-2xl border-2 border-t-0 border-neutral-200

          dark:border-neutral-800
        `)}
      >
        <pre className={cn('my-0 rounded-none', className)} {...otherProps} />
      </div>
      <button
        aria-label={`Copy ${title} code`}
        className={cn(`
          group prose prose-neutral inline-flex items-center justify-center
          space-x-1 bg-neutral-200 p-2 text-xs

          dark:prose-invert dark:bg-neutral-800

          focus:outline-none
        `)}
        onClick={handleOnClick}
      >
        <span
          className={cn(`
            transition-colors

            group-focus:text-sky-400

            group-hover:text-sky-400
          `)}
        >
          {isCopied ? (
            <svg
              className={cn('size-4')}
              fill='currentColor'
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                clipRule='evenodd'
                d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z'
                fillRule='evenodd'
              />
            </svg>
          ) : (
            <svg
              className={cn('size-4')}
              fill='currentColor'
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M5.5 3.5A1.5 1.5 0 0 1 7 2h2.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 1 .439 1.061V9.5A1.5 1.5 0 0 1 12 11V8.621a3 3 0 0 0-.879-2.121L9 4.379A3 3 0 0 0 6.879 3.5H5.5Z' />
              <path d='M4 5a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 4 14h5a1.5 1.5 0 0 0 1.5-1.5V8.621a1.5 1.5 0 0 0-.44-1.06L7.94 5.439A1.5 1.5 0 0 0 6.878 5H4Z' />
            </svg>
          )}
        </span>
        <span>{isCopied ? 'Copied' : 'Copy'}</span>
      </button>
    </figure>
  )
}
