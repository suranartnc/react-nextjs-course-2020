import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Flex, Box } from '@grid'

import { breakpoints } from '@lib/styles'
import Notifications from './Notifications'
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
      <Notifications />
    </ThemeProvider>
  )
}
