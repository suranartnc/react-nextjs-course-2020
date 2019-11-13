import React, { Fragment } from 'react'
import { Flex, Box } from '@grid'
import Link from '@link'
import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'

import colors from '@features/_ui/colors'

SearchPage.defaultProps = {
  data: {
    albums: [
      {
        id: '2Pz8VAMiGc9UW1rrbBRDuO',
        name: 'KILL THIS LOVE',
        images: [
          {
            url:
              'https://i.scdn.co/image/ab67616d0000b273adf560d7d93b65c10b58ccda',
          },
        ],
      },
    ],
    playlists: [
      {
        id: '37i9dQZF1DX8kP0ioXjxIA',
        name: 'This Is BLACKPINK',
        images: [
          {
            url:
              'https://pl.scdn.co/images/pl/default/af1eb22fbb48deecfde3b244ffd683a81696a18d',
          },
        ],
      },
    ],
  },
}

function SearchPage({ data }) {
  const { token } = useMember()

  if (token === null) {
    return null
  }

  return (
    <Flex flexWrap="wrap" css={{ padding: '60px 120px' }}>
      <Box width={1}>
        <input
          type="text"
          value="blackpink"
          placeholder="Search for artists, albums or playlists..."
          css={{
            padding: '15px 20px',
            borderRadius: '40px',
            border: 'none',
            width: '500px',
          }}
          onChange={() => {}}
        />
      </Box>

      <ResultRow title="Albums" data={data.albums} route="album-detail" />
      <ResultRow
        title="Playlists"
        data={data.playlists}
        route="playlist-detail"
      />
    </Flex>
  )
}

function ResultRow({ title, data, route }) {
  return (
    <Fragment>
      <Box width={1}>
        <h1
          css={{
            color: colors.link,
            fontSize: '1.8em',
            padding: '50px 10px 0px',
          }}>
          {title}
        </h1>
      </Box>
      <Box width={1}>
        <Flex flexWrap="wrap">
          {data.map(item => (
            <Box width={1 / 6} px={10} py={20} key={item.id}>
              <article>
                <Link route={route} params={{ id: item.id }}>
                  <a>
                    <img src={item.images[0].url} />
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
                  <Link route={route} params={{ id: item.id }}>
                    <a>{item.name}</a>
                  </Link>
                </h3>
              </article>
            </Box>
          ))}
        </Flex>
      </Box>
    </Fragment>
  )
}

export default withPage({ restricted: true })(SearchPage)
