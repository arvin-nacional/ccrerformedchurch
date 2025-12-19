// src/blocks/StatementOfFaith/Component.tsx
import React from 'react'
import RichText from '@/components/RichText'
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
}) => {
  return (
    <section className={`py-16 bg-white ${className || ''}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
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
                  <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
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
      </div>
    </section>
  )
}
