import React from 'react'
import { Flex, Box } from '@grid'
import colors from '@features/_ui/colors'

import ControlPanel from './ControlPanel'
import NowPlaying from './NowPlaying'
import ProgressBar from './ProgressBar'
import SoundBar from './SoundBar'
import { Player } from '@features/player'

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
      <Box css={{ width: '300px', alignSelf: 'center' }}>
        <NowPlaying />
      </Box>
      <Box css={{ width: '700px' }}>
        <Flex
          css={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Box>
            <ControlPanel />
          </Box>
          <Box css={{ width: '100%' }}>
            <ProgressBar />
          </Box>
        </Flex>
      </Box>
      <Box css={{ width: '300px', alignSelf: 'center' }}>
        <SoundBar />
      </Box>
      <Player />
    </Flex>
  )
}
