'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useMemberAuth } from '@/providers/MemberAuth'

interface ProtectedPageWrapperProps {
  children: React.ReactNode
}

export const ProtectedPageWrapper: React.FC<ProtectedPageWrapperProps> = ({ children }) => {
  const { member, isLoading } = useMemberAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !member) {
      router.push('/member-login')
    }
  }, [member, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center text-gray-600">Loading...</div>
      </div>
    )
  }

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center text-gray-600">Redirecting to login...</div>
      </div>
    )
  }

  return <>{children}</>
}
