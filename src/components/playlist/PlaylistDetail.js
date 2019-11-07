import React from 'react'
import { Flex, Box } from '@grid'
import { useRouter } from 'next/router'
import { Fetch } from '@lib/api'
import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'
import * as PlaylistService from '@features/playlist/services'

import DetailPageHeader from '@components/_common/DetailPageHeader'
import SongList from '@common/SongList'

function PlaylistDetailPage() {
  const { query } = useRouter()

  const { token } = useMember()

  if (token === null) {
    return null
  }

  return (
    <Fetch service={() => PlaylistService.getPlaylistById(query.id, { token })}>
      {({ data }) => {
        return (
          <Flex flexWrap="wrap" css={{ padding: '60px 120px' }} key={data.id}>
            <Box width={1 / 3}>
              <DetailPageHeader data={data} />
            </Box>
            <Box width={2 / 3}>
              <SongList tracks={data.tracks} />
            </Box>
          </Flex>
        )
      }}
    </Fetch>
  )
}

export default withPage({ restricted: true })(PlaylistDetailPage)
