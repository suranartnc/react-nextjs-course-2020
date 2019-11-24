import React from 'react'
import { Flex, Box } from '@grid'
import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'

import DetailPageHeader from '@components/_common/DetailPageHeader'
import SongList from '@common/SongList'

PlaylistDetailPage.defaultProps = {
  data: {
    title: 'Main',
    subTitle: 'Suranart Niamcome',
    bottomLine: '24 Tracks',
    image:
      'https://mosaic.scdn.co/640/95d8651f7d1525a01ffb360052c7bb63a3331cc4ab67616d0000b2730c8ea14417dc06dccdffe01cab67616d0000b273e76e64aa449965dd5e439c53ab67616d0000b273f188738a110aae9520d4daaf',
    tracks: [
      {
        name: 'ไกลแค่ไหน คือ ใกล้',
        artist: 'เก็ทสึโนว่า',
        album: 'Getsunova',
        image:
          'https://i.scdn.co/image/ab67616d0000b273e76e64aa449965dd5e439c53',
        previewUrl:
          'https://p.scdn.co/mp3-preview/f0521c21357ae522872b59cf4dd082ad65880fe8?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 266146,
      },
      {
        name: 'อยู่ตรงนี้ นานกว่านี้',
        artist: 'เก็ทสึโนว่า',
        album: 'The First Album',
        image:
          'https://i.scdn.co/image/ab67616d0000b2730c8ea14417dc06dccdffe01c',
        previewUrl:
          'https://p.scdn.co/mp3-preview/d107d61f0964af539e6843526e517f8c2c0fa25e?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 260320,
      },
      {
        name: 'มือลั่น',
        artist: 'แจ๊ส สปุ๊กนิค ปาปิยอง กุ๊กกุ๊ก',
        album: 'มือลั่น',
        image:
          'https://i.scdn.co/image/ab67616d0000b273f188738a110aae9520d4daaf',
        previewUrl:
          'https://p.scdn.co/mp3-preview/b97d8d8d47ad52ea8ef613261d17b6fb51fa447f?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 192106,
      },
    ],
  },
}

function PlaylistDetailPage({ data }) {
  const { token } = useMember()

  if (token === null) {
    return null
  }

  return (
    <Flex flexWrap="wrap" css={{ padding: '60px 120px' }}>
      <Box width={1 / 3}>
        <DetailPageHeader data={data} />
      </Box>
      <Box width={2 / 3}>
        <SongList tracks={data.tracks} />
      </Box>
    </Flex>
  )
}

export default withPage({ restricted: true })(PlaylistDetailPage)
