// src/blocks/AboutSection/Component.tsx
import React from 'react'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { VideoMedia } from '@/components/Media/VideoMedia'
import type { AboutSectionBlock as AboutSectionBlockType } from '@/payload-types'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & AboutSectionBlockType

export const AboutSectionBlock: React.FC<Props> = ({
  className,
  title,
  content,
  button,
  video,
}) => {
  return (
    <section className={`py-16 bg-gray-50 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {title && (
              <h2 className="text-xl lg:text-xl font-bold text-gray-900 leading-tight">{title}</h2>
            )}

            {content && (
              <div className="prose prose-lg max-w-none text-gray-700">
                <RichText data={content} enableGutter={false} />
              </div>
            )}

            {button?.link && (
              <div className="pt-4">
                <CMSLink
                  {...button.link}
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-200"
                />
              </div>
            )}
          </div>

          {/* Right Column - Video */}
          <div className="relative">
            {video && (
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <VideoMedia resource={video} videoClassName="w-full h-auto rounded-lg" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
