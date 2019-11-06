import React from 'react'
import { Flex, Box } from '@rebass/grid/emotion'

import { Fetch } from '@lib/api'
import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'
import * as AlbumService from '@features/album/services'

function HomePage() {
  const { token } = useMember()

  return (
    <Flex flexWrap="wrap">
      <Box width={[1, 2 / 3]} pr={[0, 20]}>
        <Fetch service={() => AlbumService.getNewReleases({ token })}>
          {({ data }) =>
            data.albums.items.map(album => (
              <Box width={1 / 5} px={10} py={10} key={album.id}>
                <article>
                  <img src={album.images[0].url} />
                  <h3 css={{ fontSize: '1rem', marginTop: '5px' }}>
                    {album.name}
                  </h3>
                </article>
              </Box>
            ))
          }
        </Fetch>
      </Box>

      <Box width={[1, 1 / 3]} pl={[0, 20]}>
        <div>Sidebar</div>
      </Box>
    </Flex>
  )
}

export default withPage({ restricted: true })(HomePage)
