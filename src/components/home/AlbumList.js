import React, { Fragment } from 'react'
import { Box } from '@grid'
import Link from '@link'

export default function AlbumList({ albums }) {
  return (
    <Fragment>
      {albums.map(album => (
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
      ))}
    </Fragment>
  )
}
