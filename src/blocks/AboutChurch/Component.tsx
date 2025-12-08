import React from 'react'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import type { AboutChurchBlock as AboutChurchBlockType } from '@/payload-types'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & AboutChurchBlockType

export const AboutChurchBlock: React.FC<Props> = ({
  className,
  title,
  subtitle,
  launchDate,
  description,
  bibleVerse,
  bibleReference,
  image,
}) => {
  return (
    <section className={`py-16 bg-gray-50 ${className || ''}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
          {subtitle && <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              {launchDate && (
                <div className="text-gray-900">
                  <span className="font-bold">{launchDate.split(',')[0]}</span>
                  {launchDate.includes(',') && (
                    <span className="font-normal">
                      , {launchDate.split(',').slice(1).join(',')}
                    </span>
                  )}
                </div>
              )}

              {description && (
                <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
                  <RichText data={description} enableGutter={false} />
                </div>
              )}

              {bibleVerse && (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-700 italic">&quot;{bibleVerse}&quot;</p>
                  {bibleReference && (
                    <p className="text-gray-600 text-sm mt-2">— {bibleReference}</p>
                  )}
                </div>
              )}
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              {image && (
                <div className="relative rounded-xl overflow-hidden shadow-md">
                  <Media resource={image} imgClassName="w-full h-auto object-cover" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
