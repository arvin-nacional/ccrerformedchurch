'use client'
import React, { useState } from 'react'
import { Share2, Check, Copy, Facebook, Twitter } from 'lucide-react'

type Props = {
  title: string
  url?: string
}

export const ShareButton: React.FC<Props> = ({ title, url }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: shareUrl,
        })
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setIsOpen(!isOpen)
        }
      }
    } else {
      setIsOpen(!isOpen)
    }
  }

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'width=600,height=400',
    )
  }

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
      '_blank',
      'width=600,height=400',
    )
  }

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-xl hover:bg-muted transition-colors"
      >
        <Share2 className="w-4 h-4" />
        Share
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 bg-white border border-border rounded-xl shadow-lg z-50 overflow-hidden">
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-muted transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            <button
              onClick={shareToFacebook}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-muted transition-colors"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </button>
            <button
              onClick={shareToTwitter}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-muted transition-colors"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </button>
          </div>
        </>
      )}
    </div>
  )
}
