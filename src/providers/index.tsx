import React from 'react'

import { MemberAuthProvider } from './MemberAuth'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <MemberAuthProvider>{children}</MemberAuthProvider>
}
