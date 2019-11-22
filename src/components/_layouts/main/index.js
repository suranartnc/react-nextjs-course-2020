import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { breakpoints } from '@lib/styles'

import Navigation from './Navigation'

const theme = {
  breakpoints: Object.keys(breakpoints).map(key => breakpoints[key]),
}

export default function MainLayout({ children, breadcrumb }) {
  return (
    <ThemeProvider theme={theme}>
      <div css={{ maxWidth: 960, margin: '0 auto' }}>
        <Navigation />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}
