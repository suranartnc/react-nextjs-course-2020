import React from 'react'
import { Flex, Box } from '@grid'

import Link from '@link'
import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'

PlaylistListPage.defaultProps = {
  items: [
    {
      id: '0773TCnunEbJ0sVNJpG5QY',
      images: [
        {
          height: 640,
          url:
            'https://mosaic.scdn.co/640/95d8651f7d1525a01ffb360052c7bb63a3331cc4ab67616d0000b2730c8ea14417dc06dccdffe01cab67616d0000b273e76e64aa449965dd5e439c53ab67616d0000b273f188738a110aae9520d4daaf',
          width: 640,
        },
      ],
      name: 'Main',
    },
  ],
}

function PlaylistListPage({ items }) {
  const { token } = useMember()

  if (token === null) {
    return null
  }

  return (
    <Flex flexWrap="wrap" css={{ padding: '60px 120px' }}>
      {items.map(playlist => (
        <Box width={1 / 6} px={10} py={10} key={playlist.id}>
          <article>
            <Link route="playlist-detail" params={{ id: playlist.id }}>
              <a>
                <img src={playlist.images[0].url} />
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
              <Link route="playlist-detail" params={{ id: playlist.id }}>
                <a>{playlist.name}</a>
              </Link>
            </h3>
          </article>
        </Box>
      ))}
    </Flex>
  )
}

export default withPage({ restricted: true })(PlaylistListPage)
