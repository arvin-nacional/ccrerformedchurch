'use client'

import { cn } from '@/utilities/ui'
import React, { useEffect, useRef } from 'react'

import type { Props as MediaProps } from '../types'

import { getMediaUrl } from '@/utilities/getMediaUrl'

export const VideoMedia: React.FC<MediaProps> = (props) => {
  const { onClick, resource, videoClassName } = props

  const videoRef = useRef<HTMLVideoElement>(null)
  // const [showFallback] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef
    if (video) {
      video.addEventListener('suspend', () => {
        // setShowFallback(true);
        // console.warn('Video was suspended, rendering fallback image.')
      })
    }
  }, [])

  if (resource && typeof resource === 'object') {
    const { url, thumbnailURL } = resource
    const cacheTag = resource.updatedAt

    return (
      <video
        className={cn(videoClassName)}
        controls={true}
        loop
        onClick={onClick}
        playsInline
        poster={thumbnailURL || undefined}
        preload="metadata"
        ref={videoRef}
      >
        <source src={getMediaUrl(url, cacheTag)} />
      </video>
    )
  }

  return null
}
