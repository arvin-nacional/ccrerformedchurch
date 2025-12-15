'use client'
import { cn } from '@/utilities/ui'
import React, { useState } from 'react'

import { SermonCard, CardSermonData } from '@/components/SermonCard'
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

    return seriesMatch && speakerMatch && yearMatch
  })

  return (
    <div className={cn('container')}>
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Series</label>
            <select
              className="w-full px-4 py-2 border border-border rounded-lg bg-background"
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
            >
              <option value="all">All Series</option>
              {series.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Speakers</label>
            <select
              className="w-full px-4 py-2 border border-border rounded-lg bg-background"
              value={selectedSpeaker}
              onChange={(e) => setSelectedSpeaker(e.target.value)}
            >
              <option value="all">All Speakers</option>
              {speakers.map((speaker) => (
                <option key={speaker.id} value={speaker.id}>
                  {speaker.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Years</label>
            <select
              className="w-full px-4 py-2 border border-border rounded-lg bg-background"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="all">All Years</option>
              {years.map((year) => (
                <option key={year} value={year?.toString()}>
                  {year}
                </option>
              ))}
            </select>
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
