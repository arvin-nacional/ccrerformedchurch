import React from 'react'
import RichText from '@/components/RichText'
import type { TheologicalSchoolBlock as TheologicalSchoolBlockType } from '@/payload-types'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & TheologicalSchoolBlockType

export const TheologicalSchoolBlock: React.FC<Props> = ({
  className,
  title,
  subtitle,
  content,
}) => {
  return (
    <section className={`py-16 bg-gray-50 ${className || ''}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
          {subtitle && (
            <div className="text-gray-600 max-w-3xl mx-auto text-sm">
              <RichText data={subtitle} enableGutter={false} />
            </div>
          )}
        </div>

        {/* Main Content */}
        {content && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="prose prose-sm max-w-none text-gray-700">
              <RichText data={content} enableGutter={false} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
