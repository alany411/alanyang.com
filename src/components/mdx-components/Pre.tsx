'use client'

import type { HTMLAttributes } from 'react'
import { useRef } from 'react'
import { toast } from 'sonner'

import IconButton from '~/components/IconButton'
import { cn } from '~/utils/cn'

type PreProps = HTMLAttributes<HTMLPreElement> & {
  showLineNumbers?: string
  title?: string
}

export default function Pre(props: PreProps) {
  const { className, title, ...otherProps } = props
  const contentRef = useRef<HTMLDivElement | null>(null)

  if (!title) throw new Error('Pre component requires a title prop')

  const handleOnClick = async () => {
    if (contentRef.current) {
      await navigator.clipboard.writeText(contentRef.current.textContent ?? '')
      toast.success(`Copied ${title} code to clipboard`)
    }
  }

  return (
    <div className={cn('my-8')}>
      <figure className={cn('my-0')}>
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
            overflow-hidden rounded-br-2xl border-2 border-t-0
            border-neutral-200

            dark:border-neutral-800
          `)}
        >
          <pre className={cn('my-0 rounded-none', className)} {...otherProps} />
        </div>
      </figure>
      <IconButton
        aria-label={`Copy ${title} code`}
        icon={{
          name: 'clipboard-copy',
          position: 'left',
        }}
        onClick={handleOnClick}
      >
        Copy
      </IconButton>
    </div>
  )
}
