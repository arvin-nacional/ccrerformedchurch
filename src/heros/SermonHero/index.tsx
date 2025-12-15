import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Sermon } from '@/payload-types'

import { Media } from '@/components/Media'

export const SermonHero: React.FC<{
  sermon: Sermon
}> = ({ sermon }) => {
  const { heroImage, populatedSpeaker, sermonDate, title, series, scriptureReference } = sermon

  return (
    <div className="relative -mt-[10.4rem] flex items-end">
      <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8">
        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
          {series && typeof series === 'object' && (
            <div className="uppercase text-sm mb-6">{series.title || 'Expository Series'}</div>
          )}

          <div className="">
            <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl">{title}</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-16">
            {populatedSpeaker?.name && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm">Speaker</p>
                  <p>{populatedSpeaker.name}</p>
                  {populatedSpeaker.title && (
                    <p className="text-sm opacity-80">{populatedSpeaker.title}</p>
                  )}
                </div>
              </div>
            )}
            {sermonDate && (
              <div className="flex flex-col gap-1">
                <p className="text-sm">Date</p>
                <time dateTime={sermonDate}>{formatDateTime(sermonDate)}</time>
              </div>
            )}
            {scriptureReference && (
              <div className="flex flex-col gap-1">
                <p className="text-sm">Scripture</p>
                <p>{scriptureReference}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {heroImage && typeof heroImage !== 'string' && (
          <Media fill priority imgClassName="-z-10 object-cover" resource={heroImage} />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  )
}
