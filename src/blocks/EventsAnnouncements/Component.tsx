'use client'
import React from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'
import type { EventsAnnouncementsBlock as EventsAnnouncementsBlockType } from '@/payload-types'

type CategoryType =
  | 'weekly'
  | 'special'
  | 'retreat'
  | 'fellowship'
  | 'conference'
  | 'fortnightly'
  | 'upon-request'

const categoryStyles: Record<CategoryType, { bg: string; text: string; label: string }> = {
  weekly: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Weekly' },
  special: { bg: 'bg-pink-100', text: 'text-pink-700', label: 'Special Event' },
  retreat: { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Retreat' },
  fellowship: { bg: 'bg-green-100', text: 'text-green-700', label: 'Fellowship' },
  conference: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Conference' },
  fortnightly: { bg: 'bg-blue-200', text: 'text-blue-700', label: 'Fortnightly' },
  'upon-request': { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Upon Request' },
}

export type EventsAnnouncementsProps = {
  className?: string
  title?: EventsAnnouncementsBlockType['title']
  description?: EventsAnnouncementsBlockType['description']
  events?: EventsAnnouncementsBlockType['events']
  backgroundColor?: EventsAnnouncementsBlockType['backgroundColor']
  cardBackgroundColor?: EventsAnnouncementsBlockType['cardBackgroundColor']
}

export const EventsAnnouncementsBlock: React.FC<EventsAnnouncementsProps> = (props) => {
  const {
    className,
    title = 'Events & Announcements',
    description,
    events = [],
    backgroundColor = 'bg-white',
    cardBackgroundColor = 'bg-white',
  } = props

  return (
    <section className={`py-16 ${backgroundColor || 'bg-white'} ${className || ''}`}>
      <div className="container">
        <div className="text-center mb-12">
          {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
          {description && (
            <div className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <p className="text-gray-600 text-base">{description}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events?.map((event, index) => {
            const category = event.category as CategoryType
            const style = categoryStyles[category] || categoryStyles.weekly

            return (
              <div
                key={index}
                className={`${cardBackgroundColor} rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow shadow-lg`}
              >
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text}`}
                  >
                    {style.label}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.eventTitle}</h3>

                {event.eventDescription && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {event.eventDescription}
                  </p>
                )}

                <div className="space-y-2 mt-4">
                  {event.date && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                  )}
                  {event.time && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>

                {event.linkText && event.linkUrl && (
                  <a
                    href={event.linkUrl}
                    className="inline-block mt-4 text-sm font-medium text-[#B08D57] hover:underline"
                  >
                    {event.linkText} →
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
