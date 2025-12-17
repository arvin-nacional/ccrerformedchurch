import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Sermon } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Media } from '@/components/Media'
import { formatDateTime } from '@/utilities/formatDateTime'
import Link from 'next/link'

function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#]+)/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const sermons = await payload.find({
    collection: 'sermons',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = sermons.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function SermonPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const url = '/sermons/' + decodedSlug
  const sermon = await querySermonBySlug({ slug: decodedSlug })

  if (!sermon) return <PayloadRedirects url={url} />

  return (
    <article className="pb-16 pt-12 ">
      <PageClient />

      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      {/* Back to Sermons Link */}
      <div className="container pt-12">
        <Link
          href="/sermons"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Sermons
        </Link>
      </div>

      <div className="container pt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          {/* Main Content */}
          <div>
            {/* Hero Video/Image */}
            <div className="pb-6">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                {sermon.youtubeUrl ? (
                  (() => {
                    const videoId = getYouTubeVideoId(sermon.youtubeUrl)
                    return videoId ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={sermon.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                        Invalid YouTube URL
                      </div>
                    )
                  })()
                ) : sermon.heroImage && typeof sermon.heroImage !== 'string' ? (
                  <Media resource={sermon.heroImage} imgClassName="object-cover" fill />
                ) : (
                  <div className="w-full h-full bg-muted" />
                )}
              </div>
            </div>

            {/* Sermon Title and Meta */}
            <div className="pb-8">
              <div className="mb-4">
                {sermon.series && typeof sermon.series === 'object' && (
                  <div className="text-sm text-muted-foreground mb-2">{sermon.series.title}</div>
                )}
                <h1 className="text-4xl lg:text-4xl font-bold mb-4">{sermon.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {sermon.populatedSpeaker?.name && (
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      {sermon.populatedSpeaker.name}
                    </div>
                  )}
                  {sermon.sermonDate && (
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      {formatDateTime(sermon.sermonDate)}
                    </div>
                  )}
                  {sermon.duration && (
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {sermon.duration} min
                    </div>
                  )}
                </div>
              </div>
            </div>
            {sermon.description && (
              <div className="mb-8">
                <RichText
                  className="prose dark:prose-invert max-w-none prose-p:m-0"
                  data={sermon.description}
                  enableGutter={false}
                />
              </div>
            )}

            {/* {sermon.content && (
              <div className="mb-8">
                <RichText className="prose dark:prose-invert max-w-none" data={sermon.content} />
              </div>
            )} */}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About the Speaker */}
            {sermon.populatedSpeaker && (
              <div className="border border-border rounded-2xl p-6">
                <h3 className="text-sm font-semibold mb-4">About the Speaker</h3>
                <h4 className="font-bold text-lg mb-1">{sermon.populatedSpeaker.name}</h4>
                {sermon.populatedSpeaker.title && (
                  <p className="text-sm text-muted-foreground mb-3">
                    {sermon.populatedSpeaker.title}
                  </p>
                )}
                {sermon.populatedSpeaker.bio && (
                  <p className="text-sm leading-relaxed">{sermon.populatedSpeaker.bio}</p>
                )}
              </div>
            )}

            {/* About This Series */}
            {sermon.series && typeof sermon.series === 'object' && (
              <div className="border border-border rounded-2xl p-6">
                <h3 className="text-sm font-semibold mb-4">About This Series</h3>
                <h4 className="font-bold text-lg mb-3">{sermon.series.title}</h4>
                {sermon.series.description && (
                  <p className="text-sm leading-relaxed">{sermon.series.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const sermon = await querySermonBySlug({ slug: decodedSlug })

  return generateMeta({ doc: sermon })
}

const querySermonBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'sermons',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
