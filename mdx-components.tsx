import type { MDXComponents } from 'mdx/types'

import { cn } from '~/utils/cn'

const customComponents: MDXComponents = {
  a: (props) => {
    const { children, href, ...otherProps } = props

    if (href?.startsWith('/') || href?.startsWith('#')) {
      return (
        <a href={href} {...otherProps}>
          {children}
        </a>
      )
    }

    return (
      <a
        aria-label={`${children as string}, opens in new tab`}
        href={href}
        rel='noopener noreferrer'
        target='_blank'
        {...otherProps}
      >
        {children}
      </a>
    )
  },
  pre: ({ children, className }) => (
    <div className='my-8 overflow-hidden rounded-md border border-neutral-300 dark:border-neutral-700'>
      <pre className={cn('my-0', className)}>{children}</pre>
    </div>
  ),
  table: ({ children }) => (
    <div className='table-container my-8 overflow-x-auto'>
      <table className='m-0'>{children}</table>
    </div>
  ),
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customComponents,
  }
}
