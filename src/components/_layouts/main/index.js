import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import { breakpoints } from '@lib/styles'
import Navigation from './Navigation'
import MusicPlayer from './MusicPlayer'

const theme = {
  breakpoints: Object.keys(breakpoints).map(key => breakpoints[key]),
}

export default function MainLayout({ children, breadcrumb }) {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <main css={{ marginLeft: '230px', paddingBottom: '80px' }}>
        {children}
      </main>
      <MusicPlayer />
    </ThemeProvider>
  )
}
