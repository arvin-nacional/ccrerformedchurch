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
      <div className="container pt-8">
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
            {/* Hero Image */}
            <div className="pb-6">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                {sermon.heroImage && typeof sermon.heroImage !== 'string' ? (
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{sermon.title}</h1>
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
                  {sermon.scriptureReference && (
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
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      </svg>
                      {sermon.scriptureReference}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {sermon.description && (
              <div className="mb-8">
                <RichText
                  className="prose dark:prose-invert max-w-none"
                  data={sermon.description}
                />
              </div>
            )}

            <div className="flex gap-4 mb-8">
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                Listen to Audio
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                </svg>
                Share
              </button>
            </div>

            <div className="border-t border-b py-6 mb-8">
              <div className="flex gap-8">
                <button className="flex items-center gap-2 pb-2 border-b-2 border-primary font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  Sermon Notes
                </button>
                <button className="flex items-center gap-2 pb-2 text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Transcript
                </button>
              </div>
            </div>

            {sermon.keyPoints && sermon.keyPoints.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Key Points</h2>
                <div className="space-y-4">
                  {sermon.keyPoints.map((keyPoint, index) => (
                    <div key={index} className="prose dark:prose-invert max-w-none">
                      <RichText data={keyPoint.point} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {sermon.scriptureReferences && sermon.scriptureReferences.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Scripture References</h2>
                <ul className="list-none space-y-1">
                  {sermon.scriptureReferences.map((ref, index) => (
                    <li key={index} className="text-sm">
                      - {ref.reference}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {sermon.content && (
              <div className="mb-8">
                <RichText className="prose dark:prose-invert max-w-none" data={sermon.content} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About the Speaker */}
            {sermon.populatedSpeaker && (
              <div className="border border-border rounded-lg p-6">
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
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-sm font-semibold mb-4">About This Series</h3>
                <h4 className="font-bold text-lg mb-3">{sermon.series.title}</h4>
                {sermon.series.description && (
                  <p className="text-sm leading-relaxed">{sermon.series.description}</p>
                )}
              </div>
            )}

            {/* Download Options */}
            <div className="border border-border rounded-lg p-6">
              <h3 className="text-sm font-semibold mb-4">Download Options</h3>
              <div className="space-y-3">
                {sermon.videoFile && typeof sermon.videoFile === 'object' && (
                  <a
                    href={sermon.videoFile.url || ''}
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                    download
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Video (MP4)
                  </a>
                )}
                {sermon.audioFile && typeof sermon.audioFile === 'object' && (
                  <a
                    href={sermon.audioFile.url || ''}
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                    download
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Audio (MP3)
                  </a>
                )}
                {sermon.sermonNotes && typeof sermon.sermonNotes === 'object' && (
                  <a
                    href={sermon.sermonNotes.url || ''}
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                    download
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    Sermon Notes (PDF)
                  </a>
                )}
              </div>
            </div>
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
