'use client'
import React, { useEffect, useState } from 'react'
import { ThinkingBiblicallyCard } from '@/components/ThinkingBiblicallyCard'
import type {
  ThinkingBiblicallyBlock as ThinkingBiblicallyBlockType,
  ThinkingBiblically,
} from '@/payload-types'
import Link from 'next/link'

export type ThinkingBiblicallyProps = {
  className?: string
  title?: ThinkingBiblicallyBlockType['title']
  description?: ThinkingBiblicallyBlockType['description']
  limit?: ThinkingBiblicallyBlockType['limit']
  showButton?: ThinkingBiblicallyBlockType['showButton']
}

export const ThinkingBiblicallyBlock: React.FC<ThinkingBiblicallyProps> = (props) => {
  const { className, title, description, limit = 6, showButton = true } = props
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
    <section className={className}>
      <div className="container py-16">
        {title && <h2 className="text-4xl font-bold mb-4 text-center">{title}</h2>}
        {description && (
          <div className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-600 text-base">{description}</p>
          </div>
        )}

        {loading ? (
          <div className="text-center text-muted-foreground">Loading...</div>
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
