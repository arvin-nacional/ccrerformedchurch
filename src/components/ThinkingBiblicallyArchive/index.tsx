'use client'
import { cn } from '@/utilities/ui'
import React, { useState, useEffect, useCallback } from 'react'

import {
  ThinkingBiblicallyCard,
  CardThinkingBiblicallyData,
} from '@/components/ThinkingBiblicallyCard'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, Filter } from 'lucide-react'
import type { ThinkingBiblically } from '@/payload-types'

export type Props = {
  items: CardThinkingBiblicallyData[]
}

export const ThinkingBiblicallyArchive: React.FC<Props> = (props) => {
  const { items: initialItems } = props
  const [items, setItems] = useState<ThinkingBiblically[]>(initialItems as ThinkingBiblically[])
  const [loading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [hasFilterApplied, setHasFilterApplied] = useState(false)

  const fetchItems = useCallback(async (contentType: string) => {
    setLoading(true)
    try {
      const url = `/api/thinking-biblically?limit=100&sort=-publishedDate&depth=1&where[contentType][equals]=${contentType}`
      const response = await fetch(url)
      const data = await response.json()
      setItems(data.docs || [])
    } catch (error) {
      console.error('Error fetching items:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const contentType =
      categoryFilter !== 'all' ? categoryFilter : selectedType !== 'all' ? selectedType : null

    if (contentType) {
      setHasFilterApplied(true)
      fetchItems(contentType)
    } else if (hasFilterApplied) {
      setItems(initialItems as ThinkingBiblically[])
      setHasFilterApplied(false)
    }
  }, [categoryFilter, selectedType, fetchItems, initialItems, hasFilterApplied])

  const filteredItems = items.filter((item) => {
    const searchMatch =
      searchQuery === '' ||
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meta?.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author?.toLowerCase().includes(searchQuery.toLowerCase())

    return searchMatch
  })

  return (
    <div className={cn('container')}>
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search videos and articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10  border-none bg-gray-100 rounded-xl"
            />
          </div>
          {/* <div className="flex items-center gap-2 md:w-64 bg-gray-100 rounded-xl px-4">
            <Filter className="text-muted-foreground h-4 w-4" />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="border-none bg-transparent">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="article">Articles</SelectItem>
                <SelectItem value="video">Videos</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
        </div>

        <div className="flex justify-center">
          <Tabs value={selectedType} onValueChange={setSelectedType} className="w-auto">
            <TabsList className="grid w-full grid-cols-3 border-none">
              <TabsTrigger value="all" className="px-6">
                All
              </TabsTrigger>
              <TabsTrigger value="video" className="px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Videos
              </TabsTrigger>
              <TabsTrigger value="article" className="px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
                Articles
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div>
        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Loading...</div>
        ) : (
          <>
            <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
              {filteredItems?.map((result, index) => {
                if (typeof result === 'object' && result !== null) {
                  return (
                    <div className="col-span-4" key={index}>
                      <ThinkingBiblicallyCard className="h-full" doc={result} />
                    </div>
                  )
                }

                return null
              })}
            </div>
            {filteredItems.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No items found matching your search or filter.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
