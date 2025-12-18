import React from 'react'
import RichText from '@/components/RichText'
import type { LiveOutTheWordBlock as LiveOutTheWordBlockType } from '@/payload-types'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & LiveOutTheWordBlockType

export const LiveOutTheWordBlock: React.FC<Props> = ({
  className,
  title,
  subtitle,
  backgroundColor,
  sectionLabel,
  ministryCards,
  faithInActionTitle,
  faithInActionDescription,
  threeColumns,
  bibleVerse,
}) => {
  return (
    <section className={`py-16 ${backgroundColor || 'bg-gray-50'} ${className || ''}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
          {subtitle && (
            <div className="text-gray-600 max-w-3xl mx-auto text-sm">
              <RichText data={subtitle} enableGutter={false} />
            </div>
          )}
        </div>

        {/* Section Label */}
        {sectionLabel && (
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-gray-900">{sectionLabel}</h3>
          </div>
        )}

        {/* Ministry Cards */}
        {ministryCards && ministryCards.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {ministryCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Card Title */}
                {card.title && (
                  <h4 className="text-base font-bold text-gray-900 mb-3">{card.title}</h4>
                )}

                {/* Card Subtitle */}
                {card.subtitle && (
                  <div className="text-gray-700 text-sm mb-4">
                    <RichText data={card.subtitle} enableGutter={false} />
                  </div>
                )}

                {/* Bullet Points */}
                {card.bulletPoints && card.bulletPoints.length > 0 && (
                  <ul className="space-y-2">
                    {card.bulletPoints.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-gray-700 text-sm flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span>{point.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Faith in Action Section */}
        {(faithInActionTitle || faithInActionDescription) && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            {faithInActionTitle && (
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                {faithInActionTitle}
              </h3>
            )}
            {faithInActionDescription && (
              <div className="prose prose-sm max-w-none text-gray-700 mb-6">
                <RichText data={faithInActionDescription} enableGutter={false} />
              </div>
            )}

            {/* Three Columns */}
            {threeColumns && threeColumns.length > 0 && (
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {threeColumns.map((column, index) => (
                  <div key={index} className="text-center">
                    {column.heading && (
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{column.heading}</h4>
                    )}
                    {column.subheading && (
                      <p className="text-sm text-gray-600">{column.subheading}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Bible Verse */}
            {bibleVerse && (
              <div className="text-center text-sm text-gray-600 italic border-t pt-6">
                <RichText data={bibleVerse} enableGutter={false} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
