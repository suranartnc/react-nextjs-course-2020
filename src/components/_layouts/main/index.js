import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { breakpoints } from '@lib/styles'

const theme = {
  breakpoints: Object.keys(breakpoints).map(key => breakpoints[key]),
}

export default function MainLayout({ children, breadcrumb }) {
  return (
    <ThemeProvider theme={theme}>
      <div css={{ maxWidth: 960, margin: '0 auto' }}>
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}
