import React from 'react'
import { Flex, Box } from '@grid'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import colors from '@features/_ui/colors'
import { inject } from '@lib/store'

function ButtonControl({ icon, circle = false, active = false, onClick }) {
  let css = {
    background: 'transparent',
    padding: '7px 8px 11px 10px',
    margin: '0 10px',
    width: '34px',
    height: '34px',
    cursor: 'pointer',
    ...(circle === true
      ? { border: `1px solid ${colors.link}`, borderRadius: '50%' }
      : { border: 'none' }),
  }

  return (
    <button onClick={onClick} css={css}>
      <Icon
        icon={icon}
        css={{
          color: active ? 'green' : colors.link,
          width: '10px',
        }}
      />
    </button>
  )
}

function ControlPanel({ playerStore }) {
  return (
    <Flex>
      <Box>
        <ButtonControl
          icon="random"
          active={playerStore.options.shuffle}
          onClick={() => {
            playerStore.toggleShuffle()
          }}
        />
      </Box>
      <Box>
        <ButtonControl
          icon="step-backward"
          onClick={() => playerStore.playPreviousTrackInQueue()}
        />
      </Box>
      <Box>
        <ButtonControl
          icon={playerStore.nowPlaying.playing ? 'pause' : 'play'}
          circle={true}
          onClick={() => {
            playerStore.nowPlaying.playing
              ? playerStore.pause()
              : playerStore.resume()
          }}
        />
      </Box>
      <Box>
        <ButtonControl
          icon="step-forward"
          onClick={() => playerStore.playNextTrackInQueue()}
        />
      </Box>
      <Box>
        <ButtonControl
          icon="redo-alt"
          active={playerStore.options.repeat}
          onClick={() => {
            playerStore.toggleRepeat()
          }}
        />
      </Box>
    </Flex>
  )
}

export default inject('playerStore')(ControlPanel)
