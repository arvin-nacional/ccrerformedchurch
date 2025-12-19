import type { Metadata } from 'next/types'

import { SermonArchive } from '@/components/SermonArchive'
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

  const sermons = await payload.find({
    collection: 'sermons',
    depth: 1,
    limit: 12,
    page: sanitizedPageNumber,
    overrideAccess: false,
    sort: '-sermonDate',
    select: {
      title: true,
      slug: true,
      series: true,
      speaker: true,
      sermonDate: true,
      meta: true,
      populatedSpeaker: true,
    },
  })

  const series = await payload.find({
    collection: 'sermon-series',
    depth: 0,
    limit: 100,
    overrideAccess: false,
    select: {
      title: true,
      id: true,
    },
  })

  const speakers = await payload.find({
    collection: 'speakers',
    depth: 0,
    limit: 100,
    overrideAccess: false,
    select: {
      name: true,
      id: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-8">
        <div className="prose dark:prose-invert max-w-none text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 pt-2">Sermon Archive</h2>
          <p className="text-gray-600 text-sm">
            Browse our complete collection of sermons. Watch, listen, and grow in your faith
            journey.
          </p>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collectionLabels={{ plural: 'Sermons', singular: 'Sermon' }}
          currentPage={sermons.page}
          limit={12}
          totalDocs={sermons.totalDocs}
        />
      </div>

      <SermonArchive sermons={sermons.docs} series={series.docs} speakers={speakers.docs} />

      <div className="container mt-8">
        {sermons?.page && sermons?.totalPages > 1 && (
          <Pagination page={sermons.page} totalPages={sermons.totalPages} basePath="/sermons" />
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `Sermon Archive - Page ${pageNumber || ''} - Capitol Commons Reformed Church`,
    description: 'Browse our complete collection of sermons and grow in your faith journey.',
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({
    collection: 'sermons',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / 12)

  const pages: { pageNumber: string }[] = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}
