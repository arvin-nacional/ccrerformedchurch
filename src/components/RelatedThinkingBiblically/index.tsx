'use client'
import React, { useEffect, useState } from 'react'
import { ThinkingBiblicallyCard } from '@/components/ThinkingBiblicallyCard'
import type { ThinkingBiblically } from '@/payload-types'

type Props = {
  currentItemId: number | string
  currentPublishedDate: string
  contentType: 'video' | 'article'
}

export const RelatedThinkingBiblically: React.FC<Props> = ({
  currentItemId,
  currentPublishedDate,
  contentType,
}) => {
  const [items, setItems] = useState<ThinkingBiblically[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRelatedItems = async () => {
      try {
        const latestResponse = await fetch(
          `/api/thinking-biblically?limit=1&sort=-publishedDate&depth=1&where[contentType][equals]=${contentType}`,
        )
        const latestData = await latestResponse.json()
        const latestItem = latestData.docs?.[0]

        const isLatest = latestItem?.id === currentItemId

        let relatedItems: ThinkingBiblically[] = []

        if (isLatest) {
          const response = await fetch(
            `/api/thinking-biblically?limit=4&sort=-publishedDate&depth=1&where[id][not_equals]=${currentItemId}&where[contentType][equals]=${contentType}`,
          )
          const data = await response.json()
          relatedItems = (data.docs || []).slice(0, 3)
        } else {
          const [newerResponse, olderResponse] = await Promise.all([
            fetch(
              `/api/thinking-biblically?limit=2&sort=publishedDate&depth=1&where[publishedDate][greater_than]=${currentPublishedDate}&where[id][not_equals]=${currentItemId}&where[contentType][equals]=${contentType}`,
            ),
            fetch(
              `/api/thinking-biblically?limit=2&sort=-publishedDate&depth=1&where[publishedDate][less_than]=${currentPublishedDate}&where[id][not_equals]=${currentItemId}&where[contentType][equals]=${contentType}`,
            ),
          ])

          const newerData = await newerResponse.json()
          const olderData = await olderResponse.json()

          const newerItems: ThinkingBiblically[] = newerData.docs || []
          const olderItems: ThinkingBiblically[] = olderData.docs || []

          const combined = [...newerItems.reverse(), ...olderItems]
          relatedItems = combined.slice(0, 3)
        }

        setItems(relatedItems)
      } catch (error) {
        console.error('Error fetching related items:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRelatedItems()
  }, [currentItemId, currentPublishedDate, contentType])

  if (loading) {
    return (
      <section className="bg-gray-50">
        <div className="container py-16">
          <div className="text-center text-muted-foreground">Loading related content...</div>
        </div>
      </section>
    )
  }

  if (items.length === 0) {
    return null
  }

  return (
    <section className="bg-gray-50">
      <div className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {contentType === 'video' ? 'Other Videos' : 'Other Articles'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ThinkingBiblicallyCard key={item.id} doc={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
