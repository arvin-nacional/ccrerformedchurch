'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'

import type { ThinkingBiblically } from '@/payload-types'

import { Media } from '@/components/Media'
import { formatDateTime } from '@/utilities/formatDateTime'

export type CardThinkingBiblicallyData = Pick<
  ThinkingBiblically,
  'slug' | 'title' | 'contentType' | 'publishedDate' | 'author' | 'readTime' | 'duration' | 'meta'
>

export const ThinkingBiblicallyCard: React.FC<{
  className?: string
  doc?: CardThinkingBiblicallyData
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc } = props

  const { slug, title, contentType, publishedDate, author, readTime, duration, meta } = doc || {}
  const { description, image: metaImage } = meta || {}

  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/thinking-biblically/${slug}`

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
        {contentType && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-black/80 text-white text-xs font-medium rounded-full">
              {contentType === 'video' ? (
                <>
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
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Video
                </>
              ) : (
                <>
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
                  Article
                </>
              )}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        {title && (
          <div className="prose mb-2">
            <h3 className="text-xl font-semibold mb-2">
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
          {author && (
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
              <span className="text-gray-700">{author}</span>
            </div>
          )}
          <div className="flex items-center gap-4">
            {publishedDate && (
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
                <time dateTime={publishedDate} className="text-gray-700">
                  {formatDateTime(publishedDate)}
                </time>
              </div>
            )}
            {contentType === 'article' && readTime && (
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-gray-700">{readTime} min read</span>
              </div>
            )}
            {contentType === 'video' && duration && (
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-gray-700">{duration} min</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
