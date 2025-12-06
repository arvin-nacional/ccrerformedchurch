'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

interface HeaderNavProps {
  data: HeaderType
  isScrolled?: boolean
  pathname?: string
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  data,
  isScrolled = false,
  pathname = '/',
}) => {
  const navItems = data?.navItems || []

  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (pathname === '/') {
      // Home page: white when not scrolled, black when scrolled
      return isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
    } else {
      // Other pages: always black
      return 'text-gray-900 hover:text-blue-600'
    }
  }

  return (
    <nav className="flex gap-6 items-center">
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            className={`transition-colors duration-300 font-medium ${getTextColor()}`}
          />
        )
      })}
      {/* <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon 
          className={`w-5 transition-colors duration-300 ${getTextColor()}`} 
        />
      </Link> */}
    </nav>
  )
}
