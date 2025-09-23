declare module 'next-mdx-import-source-file' {
  import type { MDXComponents } from 'nextra/mdx-components'

  export function useMDXComponents(components?: unknown): MDXComponents

  export default useMDXComponents
}
