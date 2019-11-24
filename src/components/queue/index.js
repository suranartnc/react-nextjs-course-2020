import React from 'react'
import { Flex, Box } from '@grid'
import { flowRight as compose } from 'lodash'
import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'
import colors from '@features/_ui/colors'

import SongList from '@common/SongList'

QueuePage.defaultProps = {
  tracks: [
    {
      name: 'ไกลแค่ไหน คือ ใกล้',
      artist: 'เก็ทสึโนว่า',
      album: 'Getsunova',
      image: 'https://i.scdn.co/image/ab67616d0000b273e76e64aa449965dd5e439c53',
      previewUrl:
        'https://p.scdn.co/mp3-preview/f0521c21357ae522872b59cf4dd082ad65880fe8?cid=e4abb1ea8fdf4926a463960abd146fcb',
      durationMs: 266146,
    },
    {
      name: 'อยู่ตรงนี้ นานกว่านี้',
      artist: 'เก็ทสึโนว่า',
      album: 'The First Album',
      image: 'https://i.scdn.co/image/ab67616d0000b2730c8ea14417dc06dccdffe01c',
      previewUrl:
        'https://p.scdn.co/mp3-preview/d107d61f0964af539e6843526e517f8c2c0fa25e?cid=e4abb1ea8fdf4926a463960abd146fcb',
      durationMs: 260320,
    },
    {
      name: 'มือลั่น',
      artist: 'แจ๊ส สปุ๊กนิค ปาปิยอง กุ๊กกุ๊ก',
      album: 'มือลั่น',
      image: 'https://i.scdn.co/image/ab67616d0000b273f188738a110aae9520d4daaf',
      previewUrl:
        'https://p.scdn.co/mp3-preview/b97d8d8d47ad52ea8ef613261d17b6fb51fa447f?cid=e4abb1ea8fdf4926a463960abd146fcb',
      durationMs: 192106,
    },
  ],
}

function QueuePage({ tracks }) {
  const { token } = useMember()

  if (token === null) {
    return null
  }

  return (
    <Flex flexWrap="wrap" css={{ padding: '60px 120px' }}>
      <Box width={1}>
        <h1
          css={{
            color: colors.link,
            fontSize: '2em',
            padding: '50px 10px 10px',
          }}>
          Queue
        </h1>
      </Box>
      <Box width={1}>
        <SongList tracks={tracks} />
      </Box>
    </Flex>
  )
}

export default compose(withPage({ restricted: true }))(QueuePage)
