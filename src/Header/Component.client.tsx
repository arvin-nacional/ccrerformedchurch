'use client'
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
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

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
      className={`transition-all duration-300 fixed top-0 left-0 right-0 ${isMobileMenuOpen ? 'z-[1000]' : 'z-50'} ${
        pathname === '/'
          ? isScrolled && !isMobileMenuOpen
            ? 'bg-black/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
          : 'bg-black shadow-lg'
      }`}
      style={
        pathname === '/' && (isMobileMenuOpen || isScrolled)
          ? { backgroundColor: 'rgba(0,0,0,0.95)' }
          : undefined
      }
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
          <HeaderNav
            data={data}
            isScrolled={isScrolled}
            pathname={pathname}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      </div>
    </header>
  )
}
