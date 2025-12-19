import type { Metadata } from 'next/types'

import { ThinkingBiblicallyArchive } from '@/components/ThinkingBiblicallyArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { notFound } from 'next/navigation'

export const revalidate = 600

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const sanitizedPageNumber = Number(pageNumber)

  if (!Number.isInteger(sanitizedPageNumber)) notFound()

  const items = await payload.find({
    collection: 'thinking-biblically',
    depth: 1,
    limit: 12,
    page: sanitizedPageNumber,
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
      <PageClient />
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
        {items?.page && items?.totalPages > 1 && (
          <Pagination
            page={items.page}
            totalPages={items.totalPages}
            basePath="/thinking-biblically"
          />
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `Thinking Biblically - Page ${pageNumber || ''}`,
    description: 'Explore articles and videos to help you think biblically about faith and life.',
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({
    collection: 'thinking-biblically',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / 12)

  const pages: { pageNumber: string }[] = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}
