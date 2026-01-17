import type { Metadata } from 'next/types'

import { SermonArchive } from '@/components/SermonArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload, Where } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const revalidate = 600

type SearchParams = {
  series?: string
  speaker?: string
  year?: string
  q?: string
}

const hasFilters = (params: SearchParams) => {
  return (
    (params.series && params.series !== 'all') ||
    (params.speaker && params.speaker !== 'all') ||
    (params.year && params.year !== 'all') ||
    params.q
  )
}

export default async function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams
  const payload = await getPayload({ config: configPromise })

  // Build where clause based on search params
  const conditions: Where[] = []

  if (params.series && params.series !== 'all') {
    conditions.push({ series: { equals: params.series } })
  }

  if (params.speaker && params.speaker !== 'all') {
    conditions.push({ speaker: { equals: params.speaker } })
  }

  if (params.year && params.year !== 'all') {
    const year = parseInt(params.year)
    conditions.push({
      sermonDate: {
        greater_than_equal: `${year}-01-01`,
        less_than_equal: `${year}-12-31`,
      },
    })
  }

  if (params.q) {
    conditions.push({
      or: [{ title: { contains: params.q } }],
    })
  }

  const where: Where = conditions.length > 0 ? { and: conditions } : {}

  // Run all queries in parallel for better performance
  const [sermons, series, speakers] = await Promise.all([
    payload.find({
      collection: 'sermons',
      depth: 1,
      limit: 12,
      overrideAccess: false,
      sort: '-sermonDate',
      where,
      select: {
        title: true,
        slug: true,
        series: true,
        speaker: true,
        sermonDate: true,
        meta: true,
        populatedSpeaker: true,
      },
    }),
    payload.find({
      collection: 'sermon-series',
      depth: 0,
      limit: 100,
      overrideAccess: false,
      select: {
        title: true,
        id: true,
      },
    }),
    payload.find({
      collection: 'speakers',
      depth: 0,
      limit: 100,
      overrideAccess: false,
      select: {
        name: true,
        id: true,
      },
    }),
  ])

  // Generate year range (current year down to 2020 or adjust as needed)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 2019 }, (_, i) => currentYear - i)

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

      <SermonArchive
        sermons={sermons.docs}
        series={series.docs}
        speakers={speakers.docs}
        years={years}
      />

      <div className="container mt-8">
        {sermons.totalPages > 1 && sermons.page && (
          <Pagination page={sermons.page} totalPages={sermons.totalPages} basePath="/sermons" />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Sermon Archive - Capitol Commons Reformed Church`,
    description: 'Browse our complete collection of sermons and grow in your faith journey.',
  }
}
