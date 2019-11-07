import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { Flex, Box } from '@grid'
import withPage from '@lib/page/withPage'
import { Fetch } from '@lib/api'
import { useMember } from '@lib/auth'
import * as AlbumService from '@features/album/services'

import DetailPageHeader from '@components/_common/DetailPageHeader'
import SongList from '@common/SongList'

function AlbumDetailPage({ articleDetail }) {
  const { query } = useRouter()

  const { token } = useMember()

  if (token === null) {
    return null
  }

  return (
    <Flex flexWrap="wrap" css={{ padding: '60px 120px' }}>
      <Fetch service={() => AlbumService.getAlbumById(query.id, { token })}>
        {({ data }) => {
          return (
            <Fragment key={data.id}>
              <Box width={1 / 3}>
                <DetailPageHeader data={data} />
              </Box>
              <Box width={2 / 3}>
                <SongList tracks={data.tracks} />
              </Box>
            </Fragment>
          )
        }}
      </Fetch>
    </Flex>
  )
}

export default withPage()(AlbumDetailPage)
