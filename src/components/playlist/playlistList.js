import React from 'react'
import { Flex, Box } from '@rebass/grid/emotion'

import { Fetch } from '@lib/api'
import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'
import * as PlaylistService from '@features/playlist/services'

function PlaylistListPage() {
  const { token } = useMember()

  if (token === null) {
    return null
  }

  return (
    <Flex flexWrap="wrap" css={{ padding: '60px 120px' }}>
      <Fetch service={() => PlaylistService.getMyPlaylist({ token })}>
        {({ data }) =>
          data.items.map(album => (
            <Box width={1 / 6} px={10} py={10} key={album.id}>
              <article>
                <img src={album.images[0].url} />
                <h3
                  css={{
                    fontSize: '0.8em',
                    fontWeight: 'bold',
                    lineHeight: '1.5',
                    marginTop: '10px',
                    textAlign: 'center',
                  }}>
                  <a>{album.name}</a>
                </h3>
              </article>
            </Box>
          ))
        }
      </Fetch>
    </Flex>
  )
}

export default withPage({ restricted: true })(PlaylistListPage)
