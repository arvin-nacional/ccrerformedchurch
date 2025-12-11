import React from 'react'
import RichText from '@/components/RichText'
import type { GospelOfSalvationBlock as GospelOfSalvationBlockType } from '@/payload-types'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & GospelOfSalvationBlockType

export const GospelOfSalvationBlock: React.FC<Props> = ({
  className,
  title,
  subtitle,
  backgroundColor,
  sections,
}) => {
  return (
    <section className={`py-16 ${backgroundColor || 'bg-gray-50'} ${className || ''}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
          {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
        </div>

        {/* Gospel Sections */}
        {sections && sections.length > 0 && (
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                {/* Section Title */}
                <div className="mb-6">
                  {section.sectionNumber && section.sectionTitle && (
                    <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                      {section.sectionNumber} {section.sectionTitle}
                    </h3>
                  )}
                  {!section.sectionNumber && section.sectionTitle && (
                    <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                      {section.sectionTitle}
                    </h3>
                  )}
                </div>

                {/* Section Content */}
                {section.content && (
                  <div className="prose prose-sm max-w-none text-gray-700 mb-6">
                    <RichText data={section.content} enableGutter={false} />
                  </div>
                )}

                {/* Highlighted Question */}
                {section.highlightedQuestion && (
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                    <div className="prose prose-sm max-w-none text-orange-900 font-medium">
                      <RichText data={section.highlightedQuestion} enableGutter={false} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
