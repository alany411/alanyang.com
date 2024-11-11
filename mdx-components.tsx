import type { MDXComponents } from 'mdx/types'

import A from '~/components/mdx-components/A'
import H1 from '~/components/mdx-components/H1'
import Pre from '~/components/mdx-components/Pre'
import Table from '~/components/mdx-components/Table'

const customComponents: MDXComponents = {
  a: A,
  h1: H1,
  pre: Pre,
  table: Table,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...customComponents,
  }
}
