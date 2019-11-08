import React from 'react'
import { Flex, Box } from '@grid'
import colors from '@features/_ui/colors'

import ControlPanel from './ControlPanel'
import NowPlaying from './NowPlaying'
import ProgressBar from './ProgressBar'
import SoundBar from './SoundBar'

export default function MusicPlayer() {
  return (
    <Flex
      justifyContent="space-between"
      css={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '90px',
        backgroundColor: colors.background.light,
        borderTop: `1px solid ${colors.background.dark}`,
      }}>
      <Box css={{ alignSelf: 'center' }}>
        <NowPlaying />
      </Box>
      <Box>
        <Flex
          css={{
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
          }}>
          <Box>
            <ControlPanel />
          </Box>
          <Box>
            <ProgressBar />
          </Box>
        </Flex>
      </Box>
      <Box css={{ alignSelf: 'center' }}>
        <SoundBar />
      </Box>
    </Flex>
  )
}
