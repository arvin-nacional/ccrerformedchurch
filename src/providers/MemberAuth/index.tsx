'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

interface Member {
  id: string
  name: string
  email: string
  isActive: boolean
}

interface MemberAuthContextType {
  member: Member | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => Promise<void>
  refreshMember: () => Promise<void>
}

const MemberAuthContext = createContext<MemberAuthContextType | undefined>(undefined)

export const MemberAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [member, setMember] = useState<Member | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const refreshMember = useCallback(async () => {
    try {
      const response = await fetch('/api/members/me', {
        credentials: 'include',
      })
      if (response.ok) {
        const data = await response.json()
        if (data.user && data.user.isActive) {
          setMember(data.user)
        } else {
          setMember(null)
        }
      } else {
        setMember(null)
      }
    } catch (error) {
      console.error('Error fetching member:', error)
      setMember(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    refreshMember()
  }, [refreshMember])

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/members/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok && data.user) {
        if (!data.user.isActive) {
          return {
            success: false,
            error: 'Your account is inactive. Please contact an administrator.',
          }
        }
        setMember(data.user)
        return { success: true }
      } else {
        return { success: false, error: data.errors?.[0]?.message || 'Invalid email or password' }
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: 'An error occurred during login' }
    }
  }

  const logout = async () => {
    try {
      await fetch('/api/members/logout', {
        method: 'POST',
        credentials: 'include',
      })
      setMember(null)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <MemberAuthContext.Provider value={{ member, isLoading, login, logout, refreshMember }}>
      {children}
    </MemberAuthContext.Provider>
  )
}

export const useMemberAuth = () => {
  const context = useContext(MemberAuthContext)
  if (context === undefined) {
    throw new Error('useMemberAuth must be used within a MemberAuthProvider')
  }
  return context
}
