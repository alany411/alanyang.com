import type { MDXComponents } from 'mdx/types'
import { Fragment } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

const customComponents: MDXComponents = {
  code: ({ className, children }) => {
    const language = className?.replace('language-', '')

    if (!language) {
      return (
        <code className='bg-neutral-100 py-1 dark:bg-neutral-800'>
          {children}
        </code>
      )
    }

    return (
      <SyntaxHighlighter
        className='border border-neutral-300 dark:border-neutral-700'
        language={language}
        useInlineStyles={false}
      >
        {/* SyntaxHighlighter throws a fit if we don't render the children as a string */}
        {children as string}
      </SyntaxHighlighter>
    )
  },
  pre: Fragment,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customComponents,
  }
}
