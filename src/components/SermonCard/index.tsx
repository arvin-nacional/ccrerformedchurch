'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'

import type { Sermon } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatDateTime } from '@/utilities/formatDateTime'

export type CardSermonData = Pick<
  Sermon,
  'slug' | 'title' | 'series' | 'speaker' | 'sermonDate' | 'meta' | 'populatedSpeaker'
>

export const SermonCard: React.FC<{
  className?: string
  doc?: CardSermonData
  showSeries?: boolean
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, showSeries } = props

  const { slug, title, series, sermonDate, meta, populatedSpeaker } = doc || {}
  const { description, image: metaImage } = meta || {}

  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/sermons/${slug}`

  return (
    <article
      className={cn(
        'shadow-lg rounded-2xl overflow-hidden bg-gradient-to-r from-white to-gray-200 hover:cursor-pointer',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full aspect-video">
        {!metaImage && <div className="w-full h-full bg-muted" />}
        {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
      </div>
      <div className="p-6">
        {showSeries && series && typeof series === 'object' && (
          <div className="text-sm text-muted-foreground mb-2">
            {series.title || 'Expository Series'}
          </div>
        )}
        {title && (
          <div className="prose mb-2">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-900">
              <Link className="not-prose hover:underline" href={href} ref={link.ref}>
                {title}
              </Link>
            </h3>
          </div>
        )}
        {description && (
          <div className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {sanitizedDescription}
          </div>
        )}
        <div className="flex flex-col gap-2 text-sm">
          {populatedSpeaker?.name && (
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
                className="text-muted-foreground"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="text-gray-700">{populatedSpeaker.name}</span>
            </div>
          )}
          {sermonDate && (
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
                className="text-muted-foreground"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              <time dateTime={sermonDate} className="text-gray-700">
                {formatDateTime(sermonDate)}
              </time>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
