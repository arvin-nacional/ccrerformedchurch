import React from 'react'
import RichText from '@/components/RichText'
import type { OurStrategyBlock as OurStrategyBlockType } from '@/payload-types'
import { BookOpen, Cross, Heart, Star, Users, Target, Globe } from 'lucide-react'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & OurStrategyBlockType

const iconMap = {
  book: BookOpen,
  cross: Cross,
  heart: Heart,
  star: Star,
  users: Users,
  target: Target,
  globe: Globe,
}

export const OurStrategyBlock: React.FC<Props> = ({
  className,
  title,
  description,
  strategyCards,
}) => {
  return (
    <section className={`py-16 bg-gray-50 ${className || ''}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
          {description && (
            <div className="prose prose-base max-w-3xl mx-auto text-gray-600">
              <RichText data={description} enableGutter={false} />
            </div>
          )}
        </div>

        {/* Strategy Cards Grid */}
        {strategyCards && strategyCards.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {strategyCards.map((card, index) => {
              const IconComponent = iconMap[card.icon as keyof typeof iconMap] || BookOpen

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Heading */}
                      {card.heading && (
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{card.heading}</h3>
                      )}

                      {/* Description */}
                      {card.description && (
                        <div className="prose prose-sm max-w-none text-gray-600">
                          <RichText data={card.description} enableGutter={false} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
