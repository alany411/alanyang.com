'use client'

import { ClipboardCheckIcon, ClipboardCopyIcon } from 'lucide-react'
import type { HTMLAttributes } from 'react'
import { useRef, useState } from 'react'

import IconButton from '~/components/IconButton'
import { cn } from '~/utils/cn'

type PreProps = HTMLAttributes<HTMLPreElement> & {
  showLineNumbers?: string
  title?: string
  showCopy?: boolean
}

export default function Pre({
  className,
  title,
  showCopy = true,
  ...otherProps
}: PreProps) {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [isCopied, setIsCopied] = useState(false)

  if (!title) throw new Error('Pre component requires a title prop')

  const handleOnClick = async () => {
    if (contentRef.current) {
      await navigator.clipboard.writeText(contentRef.current.textContent || '')
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    }
  }

  return (
    <div className={cn('relative my-8')}>
      {showCopy && (
        <IconButton
          aria-label={`Copy ${title} code`}
          className={cn('absolute top-[3px] right-4')}
          variant='function'
          icon={{
            component: isCopied ? (
              <ClipboardCheckIcon absoluteStrokeWidth={true} size={16} />
            ) : (
              <ClipboardCopyIcon absoluteStrokeWidth={true} size={16} />
            ),
            position: 'right',
          }}
          onClick={handleOnClick}
        >
          {isCopied ? 'Copied' : 'Copy'}
        </IconButton>
      )}
      <figure className={cn('my-0')}>
        <figcaption
          className={cn(
            `
              my-0 prose w-full max-w-full rounded-t-2xl border-2 border-b-0
              border-neutral-200 bg-neutral-200 pt-1 pr-24 pb-1 pl-5 font-mono
              text-base leading-7 font-bold prose-neutral
              dark:border-neutral-800 dark:bg-neutral-800 dark:prose-invert
            `
          )}
        >
          {title}
        </figcaption>
        <div
          ref={contentRef}
          className={cn(`
            overflow-hidden rounded-b-2xl border-2 border-t-0 border-neutral-200
            dark:border-neutral-800
          `)}
        >
          <pre
            className={cn(
              `
                mt-0 mb-0 rounded-none font-mono
                focus:rounded-b-2xl focus:outline-sky-500
                dark:focus:outline-sky-400
                scrollbar:h-3.5 scrollbar:bg-neutral-200
                dark:scrollbar:bg-neutral-800
                scrollbar-thumb:bg-neutral-300
                dark:scrollbar-thumb:bg-neutral-700
              `,
              className
            )}
            {...otherProps}
          />
        </div>
      </figure>
    </div>
  )
}
