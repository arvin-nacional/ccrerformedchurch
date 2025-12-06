import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Youtube } from 'lucide-react'

import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { FooterLogo } from '@/components/FooterLogo/FooterLogo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const { description, socialLinks, contactInfo, copyright } = footerData || {}

  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <FooterLogo className="h-20 w-auto" />
            </Link>

            {description && (
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{description}</p>
            )}

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {socialLinks?.facebook && (
                <Link
                  href={socialLinks.facebook}
                  className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
              )}
              {socialLinks?.instagram && (
                <Link
                  href={socialLinks.instagram}
                  className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
              )}
              {socialLinks?.youtube && (
                <Link
                  href={socialLinks.youtube}
                  className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>

          {/* Center Section - Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Links</h3>
            <nav className="space-y-2">
              {navItems.map(({ link }, i) => (
                <CMSLink
                  key={i}
                  {...link}
                  className="block text-sm text-gray-600 hover:text-gray-800 transition-colors"
                />
              ))}
            </nav>
          </div>

          {/* Right Section - Contact Us */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-600">
              {contactInfo?.phone && <div>{contactInfo.phone}</div>}

              {contactInfo?.address && (
                <div className="leading-relaxed">
                  {contactInfo.address.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}

              {contactInfo?.email && (
                <div>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    {contactInfo.email}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        {copyright && (
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">{copyright}</p>
          </div>
        )}
      </div>
    </footer>
  )
}
