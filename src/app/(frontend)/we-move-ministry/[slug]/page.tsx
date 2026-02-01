import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { WeMoveMinistry } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Media } from '@/components/Media'
import { formatDateTime } from '@/utilities/formatDateTime'
import Link from 'next/link'
import { RelatedWeMoveMinistry } from '@/components/RelatedWeMoveMinistry'
import { ShareButton } from '@/components/ShareButton'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const items = await payload.find({
    collection: 'we-move-ministry',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = items.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function WeMoveMinistryDetailPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const url = '/we-move-ministry/' + decodedSlug
  const item = await queryItemBySlug({ slug: decodedSlug })

  if (!item) return <PayloadRedirects url={url} />

  return (
    <article className="pt-12">
      <PageClient />

      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <div className="container pt-12">
        <Link
          href="/we-move-ministry"
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
          Back to We Move Ministry
        </Link>
      </div>

      <div className="container pt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          {/* Main Content */}
          <div>
            <div className="pb-6">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                {item.heroImage && typeof item.heroImage !== 'string' ? (
                  <Media resource={item.heroImage} imgClassName="object-cover" fill />
                ) : (
                  <div className="w-full h-full bg-muted" />
                )}
              </div>
            </div>

            <div className="pb-8">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                    Devotion
                  </span>
                </div>
                <h1 className="text-4xl lg:text-4xl font-bold mb-4">{item.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  {item.author && (
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
                      {item.author}
                    </div>
                  )}
                  {item.publishedDate && (
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
                      {formatDateTime(item.publishedDate)}
                    </div>
                  )}
                  {item.readTime && (
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
                      {item.readTime} min read
                    </div>
                  )}
                  <ShareButton title={item.title} url={url} />
                </div>
              </div>
            </div>
            {item.description && (
              <div className="mb-8">
                <RichText
                  className="prose dark:prose-invert max-w-none"
                  data={item.description}
                  enableGutter={false}
                />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About We Move Ministry */}
            <div className="border border-border rounded-2xl p-6">
              <h3 className="text-sm font-semibold mb-4">About We Move</h3>
              <h4 className="font-bold text-lg mb-3">We Move </h4>
              <p className="text-sm leading-relaxed">
                We Move is Capitol Commons Reformed Church’s Sports, Arts, and Body Stewardship
                Ministry, created to gather people through shared movement, discipline, creativity,
                and community for the sake of the gospel. We Move exists to help believers live
                disciplined, purposeful lives shaped by the gospel, while creating ordinary,
                relational spaces where Christ is visibly lived and clearly proclaimed. Through
                sports, physical training, creative expression, and engagement with God’s creation,
                we encourage faithful stewardship of the bodies God has entrusted to us—so that the
                Word is lived out, the gospel is proclaimed, and God is glorified in every sphere of
                life.
              </p>
            </div>

            {/* Have Questions? CTA */}
            <div className="border border-border rounded-2xl p-6">
              <h3 className="text-sm font-semibold mb-4">Have Questions?</h3>
              <p className="text-sm leading-relaxed mb-4">
                Do you have questions about this topic or anything else? We&apos;d love to hear from
                you and help you on your journey of faith.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-xl hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Content */}
      {item.publishedDate && (
        <RelatedWeMoveMinistry currentItemId={item.id} currentPublishedDate={item.publishedDate} />
      )}
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const item = await queryItemBySlug({ slug: decodedSlug })

  return generateMeta({ doc: item })
}

const queryItemBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'we-move-ministry',
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
