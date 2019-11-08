import React from 'react'
import { Flex, Box } from '@grid'

ProgressBar.defaultProps = {
  progress: 0.2,
  timeElapsed: '0:00',
  duration: '4:26',
}

export default function ProgressBar({ timeElapsed, progress, duration }) {
  return (
    <Flex
      justifyContent="space-between"
      css={{
        background: 'transparent',
        height: '20px',
        alignItems: 'center',
      }}>
      <Box css={{ fontSize: '0.7em', padding: '10px' }}>{timeElapsed}</Box>
      <Box
        css={{
          flex: 1,
          height: '4px',
        }}>
        <div css={{ position: 'relative' }}>
          <progress
            css={{
              appearance: 'none',
              position: 'absolute',
              width: '100%',
              height: '4px',
              zIndex: '-1',
              transition: 'width 0.1s ease',
              '&::-webkit-progress-bar': {
                borderRadius: '5px',
              },
              '&::-webkit-progress-value': {
                borderRadius: '5px',
              },
            }}
            value={progress}
            max={1}
          />
          <input
            css={{
              appearance: 'none',
              position: 'absolute',
              width: '100%',
              height: '4px',
              outline: 'none',
              transition: 'opacity 0.2s',
              background: 'transparent',
              '&::-webkit-slider-thumb': {
                display: 'none',
              },
            }}
            type="range"
            min={0}
            max={1}
            step="any"
            value={progress}
          />
        </div>
      </Box>
      <Box css={{ fontSize: '0.7em', padding: '10px' }}>{duration}</Box>
    </Flex>
  )
}
