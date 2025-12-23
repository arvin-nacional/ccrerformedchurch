'use client'
import React, { useEffect, useState } from 'react'
import { ThinkingBiblicallyCard } from '@/components/ThinkingBiblicallyCard'
import type {
  RecentThinkingBiblicallyBlock as RecentThinkingBiblicallyBlockType,
  ThinkingBiblically,
} from '@/payload-types'
import Link from 'next/link'

export type RecentThinkingBiblicallyProps = {
  className?: string
  title?: RecentThinkingBiblicallyBlockType['title']
  description?: RecentThinkingBiblicallyBlockType['description']
  limit?: RecentThinkingBiblicallyBlockType['limit']
  showButton?: RecentThinkingBiblicallyBlockType['showButton']
  backgroundColor?: RecentThinkingBiblicallyBlockType['backgroundColor']
}

export const RecentThinkingBiblicallyBlock: React.FC<RecentThinkingBiblicallyProps> = (props) => {
  const {
    className,
    title,
    description,
    limit = 3,
    showButton = true,
    backgroundColor = 'bg-white',
  } = props
  const [items, setItems] = useState<ThinkingBiblically[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `/api/thinking-biblically?limit=${limit}&sort=-publishedDate&depth=1`,
        )
        const data = await response.json()
        setItems(data.docs || [])
      } catch (error) {
        console.error('Error fetching thinking biblically items:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [limit])

  return (
    <section className={`py-16 ${backgroundColor || 'bg-white'} ${className || ''}`}>
      <div className="container">
        <div className="text-center mb-12">
          {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
          {description && (
            <div className="text-lg text-muted-foreground max-w-5xl mx-auto">
              <p className="text-gray-600 text-base">{description}</p>
            </div>
          )}
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground mb-4">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {items.map((item) => (
              <ThinkingBiblicallyCard key={item.id} doc={item} />
            ))}
          </div>
        )}

        {showButton && (
          <div className="text-center">
            <Link
              href="/thinking-biblically"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors text-sm"
            >
              View All
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
