'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { useMemberAuth } from '@/providers/MemberAuth'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const PROTECTED_SLUGS = ['philosophy-of-ministry']

interface PageClientProps {
  slug?: string
}

const PageClient: React.FC<PageClientProps> = ({ slug }) => {
  const { setHeaderTheme } = useHeaderTheme()
  const { member, isLoading } = useMemberAuth()
  const router = useRouter()

  const isProtectedPage = slug && PROTECTED_SLUGS.includes(slug)

  useEffect(() => {
    setHeaderTheme('light')
  }, [setHeaderTheme])

  useEffect(() => {
    if (isProtectedPage && !isLoading && !member) {
      router.push('/member-login')
    }
  }, [isProtectedPage, member, isLoading, router])

  if (isProtectedPage && isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="text-center text-gray-600">Loading...</div>
      </div>
    )
  }

  if (isProtectedPage && !member) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="text-center text-gray-600">Redirecting to login...</div>
      </div>
    )
  }

  return <React.Fragment />
}

export default PageClient
