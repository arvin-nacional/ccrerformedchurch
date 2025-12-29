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
    const { url, videoThumbnail } = resource
    const cacheTag = resource.updatedAt

    // Get poster URL from videoThumbnail relation
    const posterUrl =
      videoThumbnail && typeof videoThumbnail === 'object'
        ? getMediaUrl(videoThumbnail.url, videoThumbnail.updatedAt)
        : undefined

    return (
      <video
        className={cn(videoClassName)}
        controls={true}
        loop
        onClick={onClick}
        playsInline
        poster={posterUrl}
        preload="metadata"
        ref={videoRef}
      >
        <source src={getMediaUrl(url, cacheTag)} />
      </video>
    )
  }

  return null
}
