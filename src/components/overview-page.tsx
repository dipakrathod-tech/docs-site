import type { PageMapItem } from 'nextra'
import { Cards } from 'nextra/components'
import { MDXRemote } from 'nextra/mdx-remote'
import { createIndexPage, getPageMap } from 'nextra/page-map'
import type { FC } from 'react'

export const OverviewPage: FC<{
  filePath: string
  icons?: Record<string, FC>
  pageMap?: PageMapItem[]
}> = async ({ filePath, icons, pageMap: $pageMap }) => {
  const currentRoute = filePath.replace('src/app', '').replace(/\/$/, '')
  const pageMap = $pageMap ?? (await getPageMap(currentRoute))

  const compiledSource = await createIndexPage(pageMap)

  return (
    <MDXRemote
      compiledSource={compiledSource}
      components={{ Cards, ...(icons || {}) }}
    />
  )
}
