'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { BookOpen, Calendar, Clock, MapPin } from 'lucide-react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import type { HeroBlock as HeroBlockType } from '@/payload-types'

type Props = {
  backgroundImage?: HeroBlockType['backgroundImage']
  description?: HeroBlockType['description']
  primaryButton?: HeroBlockType['primaryButton']
  secondaryButton?: HeroBlockType['secondaryButton']
  serviceTimes?: HeroBlockType['serviceTimes']
  title?: HeroBlockType['title']
}

export const HeroBlock: React.FC<Props> = ({
  backgroundImage,
  description,
  primaryButton,
  secondaryButton,
  serviceTimes,
  title,
}) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center">
        {backgroundImage && typeof backgroundImage === 'object' ? (
          <Media fill imgClassName="object-cover" priority resource={backgroundImage} />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1655392032622-e026b4e8ef69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMHdvcnNoaXB8ZW58MXx8fHwxNzYxNjk3NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        {title && <h1 className="mb-6 text-6xl font-bold">{title}</h1>}

        {description && (
          <div className="text-xl mb-8 max-w-2xl mx-auto">
            <RichText data={description} enableGutter={false} />
          </div>
        )}

        {/* Service Times */}
        {serviceTimes && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            {serviceTimes.day && (
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Calendar className="w-5 h-5" />
                <span>{serviceTimes.day}</span>
              </div>
            )}
            {serviceTimes.times && (
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Clock className="w-5 h-5" />
                <span>{serviceTimes.times}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButton && (
            <CMSLink
              {...primaryButton.link}
              className="inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-600 text-white hover:bg-orange-700 h-11 px-8"
            >
              <BookOpen className="ml-2" />
            </CMSLink>
          )}

          {secondaryButton && (
            <CMSLink
              {...secondaryButton.link}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-11 px-8"
            >
              <MapPin className="ml-2" />
            </CMSLink>
          )}
        </div>
      </div>
    </section>
  )
}
