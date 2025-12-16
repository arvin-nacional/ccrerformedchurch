'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // Change background after 50px scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`transition-all duration-300 z-50 ${
        pathname === '/'
          ? `fixed top-0 left-0 right-0 ${
              isScrolled ? 'bg-black/95 md:backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`
          : 'fixed top-0 left-0 right-0 bg-black shadow-lg'
      }`}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="container mx-auto">
        <div className="py-4 flex justify-between items-center">
          <Link href="/">
            <Logo
              loading="eager"
              priority="high"
              className={`transition-all duration-300 ${
                pathname === '/' && !isScrolled
                  ? 'h-10' // Same size when not scrolled on homepage
                  : 'h-10' // Same size everywhere else
              }`}
            />
          </Link>
          <HeaderNav data={data} isScrolled={isScrolled} pathname={pathname} />
        </div>
      </div>
    </header>
  )
}
