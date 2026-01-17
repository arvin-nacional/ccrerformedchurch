import type { Metadata } from 'next/types'

import { SermonArchive } from '@/components/SermonArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload, Where } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

type Args = {
  params: Promise<{
    pageNumber: string
  }>
  searchParams: Promise<{
    series?: string
    speaker?: string
    year?: string
    q?: string
  }>
}

export default async function Page({ params: paramsPromise, searchParams }: Args) {
  const { pageNumber } = await paramsPromise
  const params = await searchParams
  const payload = await getPayload({ config: configPromise })

  const sanitizedPageNumber = Number(pageNumber)

  if (!Number.isInteger(sanitizedPageNumber)) notFound()

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

  const sermons = await payload.find({
    collection: 'sermons',
    depth: 1,
    limit: 12,
    page: sanitizedPageNumber,
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

  // Fetch all sermon dates to extract available years
  const allSermons = await payload.find({
    collection: 'sermons',
    depth: 0,
    limit: 0,
    overrideAccess: false,
    select: {
      sermonDate: true,
    },
  })

  const years = Array.from(
    new Set(
      allSermons.docs
        .map((sermon) => sermon.sermonDate && new Date(sermon.sermonDate).getFullYear())
        .filter(Boolean) as number[],
    ),
  ).sort((a, b) => b - a)

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
