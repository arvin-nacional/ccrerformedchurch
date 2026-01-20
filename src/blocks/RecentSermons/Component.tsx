'use client'
import React, { useEffect, useState } from 'react'
import RichText from '@/components/RichText'
import { SermonCard } from '@/components/SermonCard'
import type { RecentSermonsBlock as RecentSermonsBlockType, Sermon } from '@/payload-types'
import Link from 'next/link'

export type RecentSermonsProps = {
  className?: string
  title?: RecentSermonsBlockType['title']
  description?: RecentSermonsBlockType['description']
  limit?: RecentSermonsBlockType['limit']
  showButton?: RecentSermonsBlockType['showButton']
}

export const RecentSermonsBlock: React.FC<RecentSermonsProps> = (props) => {
  const { className, title, description, limit = 3, showButton = true } = props
  const [sermons, setSermons] = useState<Sermon[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const response = await fetch(`/api/sermons?limit=${limit}&sort=-sermonDate&depth=1`)
        const data = await response.json()
        setSermons(data.docs || [])
      } catch (error) {
        console.error('Error fetching sermons:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSermons()
  }, [limit])

  return (
    <section className={className}>
      <div className="container py-16">
        {/* Header */}
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">{title}</h2>
          )}
          {description && (
            <div className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <p className="text-gray-600 dark:text-gray-100 text-base">{description}</p>
            </div>
          )}
        </div>

        {/* Sermons Grid */}
        {loading ? (
          <div className="text-center text-muted-foreground mb-4">Loading sermons...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sermons.map((sermon) => (
              <SermonCard key={sermon.id} doc={sermon} showSeries />
            ))}
          </div>
        )}

        {/* View All Button */}
        {showButton && (
          <div className="text-center">
            <Link
              href="/sermons"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors text-sm"
            >
              View All Sermons
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
