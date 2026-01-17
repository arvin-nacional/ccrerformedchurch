'use client'
import { cn } from '@/utilities/ui'
import React, { useCallback, useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { SermonCard, CardSermonData } from '@/components/SermonCard'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, Calendar, User, BookOpen } from 'lucide-react'
import type { SermonSery, Speaker } from '@/payload-types'

export type Props = {
  sermons: CardSermonData[]
  series?: SermonSery[]
  speakers?: Speaker[]
  years?: number[]
}

const SermonArchiveInner: React.FC<Props> = (props) => {
  const { sermons, series = [], speakers = [], years = [] } = props
  const router = useRouter()
  const searchParams = useSearchParams()

  const selectedSeries = searchParams.get('series') || 'all'
  const selectedSpeaker = searchParams.get('speaker') || 'all'
  const selectedYear = searchParams.get('year') || 'all'
  const searchQuery = searchParams.get('q') || ''

  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'all' || value === '') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    // Reset to page 1 when filters change
    params.delete('page')
    router.push(`/sermons?${params.toString()}`)
  }

  const [searchInput, setSearchInput] = useState(searchQuery)

  const debouncedSearch = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value === '') {
        params.delete('q')
      } else {
        params.set('q', value)
      }
      params.delete('page')
      router.push(`/sermons?${params.toString()}`)
    },
    [searchParams, router],
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== searchQuery) {
        debouncedSearch(searchInput)
      }
    }, 400)
    return () => clearTimeout(timer)
  }, [searchInput, searchQuery, debouncedSearch])

  return (
    <div className={cn('container')}>
      <div className="mb-8 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4 bg-white p-4 rounded-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search sermons..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="pl-10 border-none bg-gray-100 rounded-xl"
            />
          </div>
          <div className="flex items-center gap-2 md:w-56 bg-gray-100 rounded-xl px-4">
            <BookOpen className="text-muted-foreground h-4 w-4 flex-shrink-0" />
            <Select
              value={selectedSeries}
              onValueChange={(value) => updateSearchParams('series', value)}
            >
              <SelectTrigger className="border-none bg-transparent">
                <SelectValue placeholder="All Series" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Series</SelectItem>
                {series.map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2 md:w-56 bg-gray-100 rounded-xl px-4">
            <User className="text-muted-foreground h-4 w-4 flex-shrink-0" />
            <Select
              value={selectedSpeaker}
              onValueChange={(value) => updateSearchParams('speaker', value)}
            >
              <SelectTrigger className="border-none bg-transparent">
                <SelectValue placeholder="All Speakers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Speakers</SelectItem>
                {speakers.map((speaker) => (
                  <SelectItem key={speaker.id} value={speaker.id}>
                    {speaker.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2 md:w-44 bg-gray-100 rounded-xl px-4">
            <Calendar className="text-muted-foreground h-4 w-4 flex-shrink-0" />
            <Select
              value={selectedYear}
              onValueChange={(value) => updateSearchParams('year', value)}
            >
              <SelectTrigger className="border-none bg-transparent">
                <SelectValue placeholder="All Years" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year?.toString() || ''}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {sermons?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <SermonCard className="h-full" doc={result} showSeries />
                </div>
              )
            }

            return null
          })}
        </div>
        {sermons.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No sermons found matching your filters.
          </div>
        )}
      </div>
    </div>
  )
}

export const SermonArchive: React.FC<Props> = (props) => {
  return (
    <Suspense fallback={<div className="container">Loading...</div>}>
      <SermonArchiveInner {...props} />
    </Suspense>
  )
}
