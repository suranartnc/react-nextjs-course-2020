import React from 'react'
import { Flex, Box } from '@grid'
import Link from '@link'
import { Fetch } from '@lib/api'
import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'
import * as AlbumService from '@features/album/services'
import colors from '@features/_ui/colors'

function HomePage() {
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
          New Releases
        </h1>
      </Box>
      <Fetch service={() => AlbumService.getNewReleases({ token })}>
        {({ data }) =>
          data.albums.items.map(album => (
            <Box width={1 / 6} px={10} py={10} key={album.id}>
              <article>
                <Link route="album-detail" params={{ id: album.id }}>
                  <a>
                    <img src={album.images[0].url} />
                  </a>
                </Link>
                <h3
                  css={{
                    fontSize: '0.8em',
                    fontWeight: 'bold',
                    lineHeight: '1.5',
                    marginTop: '10px',
                    textAlign: 'center',
                  }}>
                  <Link route="album-detail" params={{ id: album.id }}>
                    <a>{album.name}</a>
                  </Link>
                </h3>
              </article>
            </Box>
          ))
        }
      </Fetch>
    </Flex>
  )
}

export default withPage({ restricted: true })(HomePage)
