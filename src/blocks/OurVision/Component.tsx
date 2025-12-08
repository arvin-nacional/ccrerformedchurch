import React from 'react'
import RichText from '@/components/RichText'
import type { OurVisionBlock as OurVisionBlockType } from '@/payload-types'
import { BookOpen, Cross, Heart, Star, Users } from 'lucide-react'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & OurVisionBlockType

const iconMap = {
  book: BookOpen,
  cross: Cross,
  heart: Heart,
  star: Star,
  users: Users,
}

export const OurVisionBlock: React.FC<Props> = ({ className, title, subtitle, visionCards }) => {
  return (
    <section className={`py-16 ${className || ''}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
          {subtitle && (
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
          )}
        </div>

        {/* Vision Cards Grid */}
        {visionCards && visionCards.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visionCards.map((card, index) => {
              const IconComponent = iconMap[card.icon as keyof typeof iconMap] || BookOpen

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-orange-600" />
                    </div>
                  </div>

                  {/* Heading */}
                  {card.heading && (
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-4">
                      {card.heading}
                    </h3>
                  )}

                  {/* Description */}
                  {card.description && (
                    <div className="prose prose-sm max-w-none text-gray-600 text-center mb-4">
                      <RichText data={card.description} enableGutter={false} />
                    </div>
                  )}

                  {/* Bible Reference */}
                  {card.bibleReference && (
                    <p className="text-sm font-medium text-gray-900 text-center mt-6">
                      {card.bibleReference}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
