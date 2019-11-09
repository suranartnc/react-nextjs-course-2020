import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { Flex, Box } from '@grid'
import colors from '@features/_ui/colors'
import { inject } from '@lib/store'

export default inject('playerStore')(SongListItem)

function SongListItem({ track, playerStore }) {
  return (
    <Box width={1}>
      <Flex
        flexWrap="wrap"
        css={{
          padding: '8px 20px',
        }}>
        <Box css={{ padding: '5px', alignSelf: 'center' }}>
          <button
            css={{
              backgroundColor: 'transparent',
              border: 'none',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
            }}
            onClick={() =>
              playerStore.setNowPlaying({
                url: track.previewUrl,
                title: track.name,
                subTitle: track.artist,
                image: track.image,
              })
            }>
            <Icon
              icon="play"
              css={{
                color: colors.link,
              }}
            />
          </button>
        </Box>
        <Box
          css={{
            flex: 1,
            padding: '5px',
          }}>
          <Flex
            flexWrap="wrap"
            css={{
              padding: '0px 20px 0px 0px',
            }}>
            <Box width={1} css={{ color: colors.link }}>
              {track.name}
            </Box>
            <Box width={1} css={{ fontSize: '0.9em', paddingTop: '10px' }}>
              {track.artist} • {track.album}
            </Box>
          </Flex>
        </Box>
        <Box
          css={{
            paddingTop: '5px',
            fontSize: '0.85em',
            color: '#888',
          }}>
          {transformDuration(track.durationMs)}
        </Box>
      </Flex>
    </Box>
  )
}

function transformDuration(ms) {
  ms /= 1000
  ms = Math.round(ms)
  const m = Math.round(ms / 60)
  const s = ms % 60
  return `${m <= 9 ? '0' : ''}${m}:${s <= 9 ? '0' : ''}${s}`
}
