import React from 'react'
import RichText from '@/components/RichText'
import type { KnowTheWordBlock as KnowTheWordBlockType } from '@/payload-types'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & KnowTheWordBlockType

export const KnowTheWordBlock: React.FC<Props> = ({
  className,
  title,
  subtitle,
  ministryTitle,
  ministrySubtitle,
  focusAreas,
  purposeTitle,
  purposeDescription,
  buttonText,
  buttonUrl,
  additionalContent,
}) => {
  return (
    <section className={`py-16 bg-gray-50 ${className || ''}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
          {subtitle && (
            <div className="text-gray-600 max-w-3xl mx-auto text-sm">
              <RichText data={subtitle} enableGutter={false} />
            </div>
          )}
        </div>

        {/* Ministry Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          {/* Ministry Title */}
          {ministryTitle && (
            <h3 className="text-xl font-bold text-gray-900 mb-3">{ministryTitle}</h3>
          )}

          {/* Ministry Subtitle */}
          {ministrySubtitle && (
            <div className="text-gray-700 text-sm mb-6">
              <RichText data={ministrySubtitle} enableGutter={false} />
            </div>
          )}

          {/* Focus Areas */}
          {focusAreas && focusAreas.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3">Focus Areas:</h4>
              <ul className="space-y-2">
                {focusAreas.map((area, index) => (
                  <li key={index} className="text-gray-700 text-sm flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>{area.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Purpose */}
          {purposeDescription && (
            <div className="mb-6">
              {purposeTitle && <h4 className="font-bold text-gray-900 mb-3">{purposeTitle}</h4>}
              <div className="text-gray-700 text-sm">
                <RichText data={purposeDescription} enableGutter={false} />
              </div>
            </div>
          )}

          {/* Button */}
          {buttonUrl && (
            <div className="flex">
              <Link
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
              >
                {buttonText || 'View All Courses & Events'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        {/* Additional Content */}
        {additionalContent && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="prose prose-sm max-w-none text-gray-700">
              <RichText data={additionalContent} enableGutter={false} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
