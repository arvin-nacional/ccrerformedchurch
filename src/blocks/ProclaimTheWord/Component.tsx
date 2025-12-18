import React from 'react'
import RichText from '@/components/RichText'
import type { ProclaimTheWordBlock as ProclaimTheWordBlockType } from '@/payload-types'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & ProclaimTheWordBlockType

export const ProclaimTheWordBlock: React.FC<Props> = ({
  className,
  title,
  subtitle,
  backgroundColor,
  sectionLabel,
  ministryCards,
  commissionTitle,
  commissionDescription,
  fourColumns,
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
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {ministryCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Card Title */}
                {card.title && (
                  <h4 className="text-base font-bold text-gray-900 mb-3">{card.title}</h4>
                )}

                {/* Card Description */}
                {card.description && (
                  <div className="text-gray-700 text-sm">
                    <RichText data={card.description} enableGutter={false} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Commission Section */}
        {(commissionTitle || commissionDescription) && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            {commissionTitle && (
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                {commissionTitle}
              </h3>
            )}
            {commissionDescription && (
              <div className="prose prose-sm max-w-none text-gray-700 mb-8">
                <RichText data={commissionDescription} enableGutter={false} />
              </div>
            )}

            {/* Four Columns */}
            {fourColumns && fourColumns.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {fourColumns.map((column, index) => (
                  <div key={index} className="text-center">
                    {column.heading && (
                      <h4 className="text-base font-bold text-gray-900 mb-2">{column.heading}</h4>
                    )}
                    {column.description && (
                      <div className="text-xs text-gray-600">
                        <RichText data={column.description} enableGutter={false} />
                      </div>
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
