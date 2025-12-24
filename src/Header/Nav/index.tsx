'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { useMemberAuth } from '@/providers/MemberAuth'

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
  const memberNavItems = data?.memberNavItems || []
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { member, logout, isLoading } = useMemberAuth()

  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (pathname === '/') {
      // Home page: white when not scrolled, white when scrolled (black background)
      return isScrolled ? 'text-white' : 'text-white'
    } else {
      // Other pages: always white (black background)
      return 'text-white'
    }
  }

  const getMobileTextColor = () => {
    // Mobile menu always uses dark text on white background
    return 'text-gray-900'
  }

  const getHamburgerColor = () => {
    if (pathname === '/') {
      return isScrolled ? 'text-white' : 'text-white'
    } else {
      return 'text-white'
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden xl:flex gap-6 items-center">
        {navItems.map(({ link }, i) => {
          return (
            <div
              key={i}
              className="group relative overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CMSLink
                {...link}
                appearance="inline"
                className={`
                  transition-all duration-300 font-medium relative z-10
                  transform hover:scale-105 hover:-translate-y-0.5
                  ${getTextColor()}
                `}
              />
              {/* Hover underline animation */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full" />
            </div>
          )
        })}
        {/* Member-Only Nav Items */}
        {member &&
          memberNavItems.map(({ link }, i) => {
            return (
              <div key={`member-${i}`} className="group relative overflow-hidden">
                <CMSLink
                  {...link}
                  appearance="inline"
                  className={`
                  transition-all duration-300 font-medium relative z-10
                  transform hover:scale-105 hover:-translate-y-0.5
                  ${getTextColor()}
                `}
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B08D57] transition-all duration-300 group-hover:w-full" />
              </div>
            )
          })}
        {/* Sign In / Sign Out Button */}
        {!isLoading &&
          (member ? (
            <button
              onClick={() => logout()}
              className="ml-4 px-4 py-2 border border-white text-white rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black"
            >
              Sign Out
            </button>
          ) : (
            <Link
              href="/member-login"
              className="ml-4 px-4 py-2 border border-white text-white rounded-2xl text-sm font-medium transition-all duration-300 hover:bg-white hover:text-black"
            >
              Sign In
            </Link>
          ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={`
          xl:hidden p-2 transition-all duration-300 transform hover:scale-110 active:scale-95
          ${getHamburgerColor()}
        `}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <div className="relative w-6 h-6">
          <Menu
            className={`
              w-6 h-6 absolute inset-0 transition-all duration-300 transform
              ${isMobileMenuOpen ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}
            `}
          />
          <X
            className={`
              w-6 h-6 absolute inset-0 transition-all duration-300 transform
              ${isMobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-0'}
            `}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] xl:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 animate-in fade-in duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 w-64 h-full bg-white border-l border-gray-200 shadow-xl animate-in slide-in-from-right duration-300 will-change-transform">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-900 transition-all duration-200 hover:bg-gray-100 rounded-lg transform hover:scale-110 active:scale-95"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map(({ link }, i) => (
                  <div
                    key={i}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="cursor-pointer group"
                    style={{
                      animation: `slideInLeft 0.3s ease-out ${i * 100}ms both`,
                    }}
                  >
                    <CMSLink
                      {...link}
                      appearance="inline"
                      className={`
                        transition-all duration-300 font-medium py-2 block
                        transform group-hover:translate-x-2 group-hover:text-blue-600
                        ${getMobileTextColor()}
                      `}
                    />
                  </div>
                ))}
                {/* Member-Only Nav Items (Mobile) */}
                {member && memberNavItems.length > 0 && (
                  <div className="pt-4 border-t border-gray-200 mt-4">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Member Area
                    </div>
                    {memberNavItems.map(({ link }, i) => (
                      <div
                        key={`member-mobile-${i}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="cursor-pointer group"
                        style={{
                          animation: `slideInLeft 0.3s ease-out ${(navItems.length + i) * 100}ms both`,
                        }}
                      >
                        <CMSLink
                          {...link}
                          appearance="inline"
                          className={`
                            transition-all duration-300 font-medium py-2 block
                            transform group-hover:translate-x-2 text-[#B08D57]
                          `}
                        />
                      </div>
                    ))}
                  </div>
                )}
                {/* Sign In / Sign Out Button (Mobile) */}
                {!isLoading && (
                  <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="pt-4 border-t border-gray-200 mt-4"
                    style={{
                      animation: `slideInLeft 0.3s ease-out ${(navItems.length + (member ? memberNavItems.length : 0)) * 100}ms both`,
                    }}
                  >
                    {member ? (
                      <button
                        onClick={() => logout()}
                        className="w-full block text-center px-4 py-2 border border-[#B08D57] text-[#B08D57] rounded-lg text-sm font-medium transition-all duration-300 hover:bg-[#B08D57] hover:text-black"
                      >
                        Sign Out
                      </button>
                    ) : (
                      <Link
                        href="/member-login"
                        className="block text-center px-4 py-2 border border-[#B08D57] text-[#B08D57] rounded-lg text-sm font-medium transition-all duration-300 hover:bg-[#B08D57] hover:text-black"
                      >
                        Sign In
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Custom CSS for staggered animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
