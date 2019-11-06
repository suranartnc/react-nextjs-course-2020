import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Flex, Box } from '@grid'

import { breakpoints } from '@lib/styles'
import Notifications from './Notifications'
import Navigation from './Navigation'

const theme = {
  breakpoints: Object.keys(breakpoints).map(key => breakpoints[key]),
}

export default function MainLayout({ children, breadcrumb }) {
  return (
    <ThemeProvider theme={theme}>
      <Flex flexWrap="wrap">
        <Box width={3 / 24}>
          <Navigation />
        </Box>
        <Box width={21 / 24}>
          <main>{children}</main>
        </Box>
      </Flex>
      <Notifications />
    </ThemeProvider>
  )
}
