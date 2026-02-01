import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import React from 'react'
import { WeMoveMinistryArchive } from '@/components/WeMoveMinistryArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'
export const revalidate = 600

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}

export default async function WeMoveMinistryPageNumber({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const pageNum = parseInt(pageNumber, 10)
  if (isNaN(pageNum) || pageNum < 1) {
    notFound()
  }

  const items = await payload.find({
    collection: 'we-move-ministry',
    depth: 1,
    limit: 12,
    page: pageNum,
    overrideAccess: false,
    sort: '-publishedDate',
    select: {
      title: true,
      slug: true,
      publishedDate: true,
      author: true,
      readTime: true,
      meta: {
        image: true,
        description: true,
      },
    },
  })

  if (items.docs.length === 0 && pageNum > 1) {
    notFound()
  }

  return (
    <div className="pt-24 pb-24">
      <div className="container mb-8">
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-3xl lg:text-4xl font-bold">We Move Ministry</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-center text-muted-foreground text-sm">
              Explore devotions from our We Move Ministry.
            </p>
          </div>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collectionLabels={{ plural: 'Devotions', singular: 'Devotion' }}
          currentPage={items.page}
          limit={12}
          totalDocs={items.totalDocs}
        />
      </div>

      <WeMoveMinistryArchive items={items.docs} />

      <div className="container mt-8">
        {items.totalPages > 1 && items.page && (
          <Pagination
            page={items.page}
            totalPages={items.totalPages}
            basePath="/we-move-ministry"
          />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'We Move Ministry',
    description: 'Explore devotions from our We Move Ministry.',
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const items = await payload.find({
    collection: 'we-move-ministry',
    depth: 0,
    limit: 1,
    overrideAccess: false,
  })

  const totalPages = items.totalPages
  const params = []

  for (let i = 2; i <= totalPages; i++) {
    params.push({ pageNumber: String(i) })
  }

  return params
}
