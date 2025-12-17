import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import React from 'react'
import { ThinkingBiblicallyArchive } from '@/components/ThinkingBiblicallyArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function ThinkingBiblicallyPage() {
  const payload = await getPayload({ config: configPromise })

  const items = await payload.find({
    collection: 'thinking-biblically',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    sort: '-publishedDate',
    select: {
      title: true,
      slug: true,
      contentType: true,
      publishedDate: true,
      author: true,
      readTime: true,
      duration: true,
      meta: {
        image: true,
        description: true,
      },
    },
  })

  return (
    <div className="pt-24 pb-24">
      <div className="container mb-8">
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-3xl lg:text-4xl font-bold">Thinking Biblically</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-center text-muted-foreground text-sm">
              Explore articles and videos to help you think biblically about faith and life.
            </p>
          </div>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collectionLabels={{ plural: 'Items', singular: 'Item' }}
          currentPage={items.page}
          limit={12}
          totalDocs={items.totalDocs}
        />
      </div>

      <ThinkingBiblicallyArchive items={items.docs} />

      <div className="container mt-8">
        {items.totalPages > 1 && items.page && (
          <Pagination page={items.page} totalPages={items.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Thinking Biblically',
    description: 'Explore articles and videos to help you think biblically about faith and life.',
  }
}
