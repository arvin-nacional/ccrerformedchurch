import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { MemberAuthProvider } from './MemberAuth'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <MemberAuthProvider>{children}</MemberAuthProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
