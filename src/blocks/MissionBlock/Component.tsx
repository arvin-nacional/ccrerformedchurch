// c:\Users\Arvin\Desktop\windsurf\ccrc\src\blocks\OurMission\Component.tsx
import React from 'react'
import RichText from '@/components/RichText'
import type { OurMissionBlock as OurMissionBlockType } from '@/payload-types'
import { BookOpen, Heart, MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & OurMissionBlockType

const iconMap = {
  book: BookOpen,
  heart: Heart,
  message: MessageSquare,
}

export const OurMissionBlock: React.FC<Props> = ({ className, title, subtitle, missionCards }) => {
  return (
    <section className={`py-16 bg-white ${className || ''}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
          {subtitle && (
            <div className="text-gray-600 max-w-2xl mx-auto">
              <RichText data={subtitle} enableGutter={false} />
            </div>
          )}
        </div>

        {/* Mission Cards Grid */}
        {missionCards && missionCards.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {missionCards.map((card, index) => {
              const IconComponent = iconMap[card.icon as keyof typeof iconMap] || BookOpen
              const isDarkCard = card.cardStyle === 'dark'

              return (
                <div
                  key={index}
                  className={`rounded-xl p-8 border transition-all duration-300 hover:shadow-lg flex flex-col ${
                    isDarkCard
                      ? 'bg-gray-900 border-gray-800 text-white'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center ${
                        isDarkCard ? 'bg-orange-500/10' : 'bg-orange-50'
                      }`}
                    >
                      <IconComponent
                        className={`w-7 h-7 ${isDarkCard ? 'text-orange-400' : 'text-orange-600'}`}
                      />
                    </div>
                  </div>

                  {/* Heading */}
                  {card.heading && (
                    <h3
                      className={`text-lg font-bold text-center mb-4 ${
                        isDarkCard ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {card.heading}
                    </h3>
                  )}

                  {/* Bible Reference */}
                  {card.bibleReference && (
                    <p
                      className={`text-sm text-center mb-4 ${
                        isDarkCard ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {card.bibleReference}
                    </p>
                  )}

                  {/* Description */}
                  {card.description && (
                    <div
                      className={`prose prose-sm max-w-none text-center mb-6 ${
                        isDarkCard ? 'prose-invert text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      <RichText data={card.description} enableGutter={false} />
                    </div>
                  )}

                  {/* Learn More Button */}
                  {card.linkUrl && (
                    <div className="flex justify-center mt-auto">
                      <Link
                        href={card.linkUrl}
                        className={`inline-flex items-center gap-2 px-6 py-2 rounded-lg text-sm transition-colors ${
                          isDarkCard
                            ? 'bg-white text-gray-900 hover:bg-gray-100'
                            : 'bg-primary text-white hover:bg-primary/90 transition-colors rounded-xl'
                        }`}
                      >
                        {card.linkText || 'Learn more'}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
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
