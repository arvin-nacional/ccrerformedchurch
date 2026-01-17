'use client'
import { cn } from '@/utilities/ui'
import React, { useState } from 'react'

import { SermonCard, CardSermonData } from '@/components/SermonCard'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, Filter, Calendar, User, BookOpen } from 'lucide-react'
import type { SermonSery, Speaker } from '@/payload-types'

export type Props = {
  sermons: CardSermonData[]
  series?: SermonSery[]
  speakers?: Speaker[]
}

export const SermonArchive: React.FC<Props> = (props) => {
  const { sermons, series = [], speakers = [] } = props
  const [selectedSeries, setSelectedSeries] = useState<string>('all')
  const [selectedSpeaker, setSelectedSpeaker] = useState<string>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const years = Array.from(
    new Set(
      sermons
        .map((sermon) => sermon.sermonDate && new Date(sermon.sermonDate).getFullYear())
        .filter(Boolean),
    ),
  ).sort((a, b) => (b as number) - (a as number))

  const filteredSermons = sermons.filter((sermon) => {
    const seriesMatch =
      selectedSeries === 'all' ||
      (typeof sermon.series === 'object' && sermon.series?.id === selectedSeries)
    const speakerMatch =
      selectedSpeaker === 'all' ||
      (typeof sermon.speaker === 'object' && sermon.speaker?.id === selectedSpeaker)
    const yearMatch =
      selectedYear === 'all' ||
      (sermon.sermonDate && new Date(sermon.sermonDate).getFullYear().toString() === selectedYear)
    const searchMatch =
      searchQuery === '' ||
      sermon.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof sermon.speaker === 'object' &&
        sermon.speaker?.name?.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof sermon.series === 'object' &&
        sermon.series?.title?.toLowerCase().includes(searchQuery.toLowerCase()))

    return seriesMatch && speakerMatch && yearMatch && searchMatch
  })

  return (
    <div className={cn('container')}>
      <div className="mb-8 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4 bg-white p-4 rounded-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search sermons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-none bg-gray-100 rounded-xl"
            />
          </div>
          <div className="flex items-center gap-2 md:w-56 bg-gray-100 rounded-xl px-4">
            <BookOpen className="text-muted-foreground h-4 w-4 flex-shrink-0" />
            <Select value={selectedSeries} onValueChange={setSelectedSeries}>
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
            <Select value={selectedSpeaker} onValueChange={setSelectedSpeaker}>
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
            <Select value={selectedYear} onValueChange={setSelectedYear}>
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
          {filteredSermons?.map((result, index) => {
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
        {filteredSermons.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No sermons found matching your filters.
          </div>
        )}
      </div>
    </div>
  )
}
