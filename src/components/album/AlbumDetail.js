import React from 'react'
import { Flex, Box } from '@grid'
import withPage from '@lib/page/withPage'
import { useMember } from '@lib/auth'

import DetailPageHeader from '@components/_common/DetailPageHeader'
import SongList from '@common/SongList'

AlbumDetailPage.defaultProps = {
  data: {
    title: 'KILL THIS LOVE',
    subTitle: 'BLACKPINK',
    bottomLine: '2019 • 5 Tracks',
    image: 'https://i.scdn.co/image/ab67616d0000b273adf560d7d93b65c10b58ccda',
    tracks: [
      {
        name: 'Kill This Love',
        artist: 'BLACKPINK',
        album: 'KILL THIS LOVE',
        image:
          'https://i.scdn.co/image/ab67616d0000b273adf560d7d93b65c10b58ccda',
        previewUrl:
          'https://p.scdn.co/mp3-preview/554bf24c1e0cccc09000c6fce75f08d30dc91967?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 189052,
      },
      {
        name: "Don't Know What To Do",
        artist: 'BLACKPINK',
        album: 'KILL THIS LOVE',
        image:
          'https://i.scdn.co/image/ab67616d0000b273adf560d7d93b65c10b58ccda',
        previewUrl:
          'https://p.scdn.co/mp3-preview/9303f5daa53b082b9b09a78925fcbde3ad6668dc?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 201081,
      },
      {
        name: 'Kick It',
        artist: 'BLACKPINK',
        album: 'KILL THIS LOVE',
        image:
          'https://i.scdn.co/image/ab67616d0000b273adf560d7d93b65c10b58ccda',
        previewUrl:
          'https://p.scdn.co/mp3-preview/10481d1e6205abaa77b1d0c9f59a86eb755213dc?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 191225,
      },
      {
        name: 'Hope Not',
        artist: 'BLACKPINK',
        album: 'KILL THIS LOVE',
        image:
          'https://i.scdn.co/image/ab67616d0000b273adf560d7d93b65c10b58ccda',
        previewUrl:
          'https://p.scdn.co/mp3-preview/078ceb2c43440308489ed4b16752a5813f8f7a22?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 191030,
      },
      {
        name: 'DDU-DU DDU-DU (Remix)',
        artist: 'BLACKPINK',
        album: 'KILL THIS LOVE',
        image:
          'https://i.scdn.co/image/ab67616d0000b273adf560d7d93b65c10b58ccda',
        previewUrl:
          'https://p.scdn.co/mp3-preview/05cc17469ea45e8d928251e472e85c22226d60da?cid=e4abb1ea8fdf4926a463960abd146fcb',
        durationMs: 201225,
      },
    ],
  },
}

function AlbumDetailPage({ data }) {
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

export default withPage()(AlbumDetailPage)
