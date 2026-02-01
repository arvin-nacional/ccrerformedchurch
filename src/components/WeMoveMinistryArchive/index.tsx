'use client'
import { cn } from '@/utilities/ui'
import React, { useState } from 'react'

import { WeMoveMinistryCard, CardWeMoveMinistryData } from '@/components/WeMoveMinistryCard'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import type { WeMoveMinistry } from '@/payload-types'

export type Props = {
  items: CardWeMoveMinistryData[]
}

export const WeMoveMinistryArchive: React.FC<Props> = (props) => {
  const { items: initialItems } = props
  const [items] = useState<WeMoveMinistry[]>(initialItems as WeMoveMinistry[])
  const [searchQuery, setSearchQuery] = useState<string>('')

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
              placeholder="Search devotions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-none bg-gray-100 rounded-xl"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {filteredItems?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <WeMoveMinistryCard className="h-full" doc={result} />
                </div>
              )
            }

            return null
          })}
        </div>
        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No devotions found matching your search.
          </div>
        )}
      </div>
    </div>
  )
}
