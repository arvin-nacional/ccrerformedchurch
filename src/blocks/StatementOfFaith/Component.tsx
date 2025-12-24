// src/blocks/StatementOfFaith/Component.tsx
import React from 'react'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import type { StatementOfFaithBlock as StatementOfFaithBlockType } from '@/payload-types'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & StatementOfFaithBlockType

export const StatementOfFaithBlock: React.FC<Props> = ({
  className,
  title,
  introduction,
  sections,
  ctaTitle,
  ctaDescription,
  ctaLink,
  ctaFooterText,
}) => {
  return (
    <section className={`py-16 bg-white ${className || ''}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 ">{title}</h2>
            {introduction && (
              <div className="prose prose-lg max-w-none text-gray-700 mx-auto text-sm ">
                <RichText data={introduction} enableGutter={false} className="text-sm" />
              </div>
            )}
          </div>
        )}

        {/* Sections */}
        {sections && sections.length > 0 && (
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className=" px-[42px] py-[29px] shadow-xl rounded-3xl bg-white">
                {section.sectionTitle && (
                  <h2 className="text-xl font-bold mb-4 uppercase tracking-wide text-[#B08D57]">
                    {section.sectionTitle}
                  </h2>
                )}
                {section.content && (
                  <div className="prose prose-base max-w-none text-gray-700 leading-relaxed">
                    <RichText data={section.content} enableGutter={false} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Call to Action Section */}
        {(ctaTitle || ctaDescription || ctaLink) && (
          <div className="mt-16 bg-[#074081] text-white rounded-2xl px-8 py-10 text-center">
            {ctaTitle && <h3 className="text-2xl font-bold mb-4">{ctaTitle}</h3>}
            {ctaDescription && (
              <p className="text-sm text-gray-200 max-w-2xl mx-auto mb-6">{ctaDescription}</p>
            )}
            {ctaLink && (
              <CMSLink
                {...ctaLink}
                className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
              />
            )}
            {ctaFooterText && (
              <p className="text-xs text-gray-300 max-w-xl mx-auto mt-6">{ctaFooterText}</p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
