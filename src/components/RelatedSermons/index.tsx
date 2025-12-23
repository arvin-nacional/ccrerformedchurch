'use client'
import React, { useEffect, useState } from 'react'
import { SermonCard } from '@/components/SermonCard'
import type { Sermon } from '@/payload-types'

type Props = {
  currentSermonId: number | string
  currentSermonDate: string
}

export const RelatedSermons: React.FC<Props> = ({ currentSermonId, currentSermonDate }) => {
  const [sermons, setSermons] = useState<Sermon[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRelatedSermons = async () => {
      try {
        const latestResponse = await fetch(`/api/sermons?limit=1&sort=-sermonDate&depth=1`)
        const latestData = await latestResponse.json()
        const latestSermon = latestData.docs?.[0]

        const isLatest = latestSermon?.id === currentSermonId

        let relatedSermons: Sermon[] = []

        if (isLatest) {
          const response = await fetch(
            `/api/sermons?limit=4&sort=-sermonDate&depth=1&where[id][not_equals]=${currentSermonId}`,
          )
          const data = await response.json()
          relatedSermons = (data.docs || []).slice(0, 3)
        } else {
          const [newerResponse, olderResponse] = await Promise.all([
            fetch(
              `/api/sermons?limit=2&sort=sermonDate&depth=1&where[sermonDate][greater_than]=${currentSermonDate}&where[id][not_equals]=${currentSermonId}`,
            ),
            fetch(
              `/api/sermons?limit=2&sort=-sermonDate&depth=1&where[sermonDate][less_than]=${currentSermonDate}&where[id][not_equals]=${currentSermonId}`,
            ),
          ])

          const newerData = await newerResponse.json()
          const olderData = await olderResponse.json()

          const newerSermons: Sermon[] = newerData.docs || []
          const olderSermons: Sermon[] = olderData.docs || []

          const combined = [...newerSermons.reverse(), ...olderSermons]
          relatedSermons = combined.slice(0, 3)
        }

        setSermons(relatedSermons)
      } catch (error) {
        console.error('Error fetching related sermons:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRelatedSermons()
  }, [currentSermonId, currentSermonDate])

  if (loading) {
    return (
      <section className="border-t border-border">
        <div className="container py-16">
          <div className="text-center text-muted-foreground">Loading related sermons...</div>
        </div>
      </section>
    )
  }

  if (sermons.length === 0) {
    return null
  }

  return (
    <section className="bg-gray-50">
      <div className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Other Sermons</h2>
          {/* <p className="text-muted-foreground">Continue exploring God&apos;s Word</p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermons.map((sermon) => (
            <SermonCard key={sermon.id} doc={sermon} showSeries />
          ))}
        </div>
      </div>
    </section>
  )
}
