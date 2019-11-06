import React from 'react'
import { Flex, Box } from '@grid'
import { useRouter } from 'next/router'
import { Fetch } from '@lib/api'
import { useMember } from '@lib/auth'
import withPage from '@lib/page/withPage'
import * as PlaylistService from '@features/playlist/services'

function PlaylistDetailPage() {
  const { query } = useRouter()

  const { token } = useMember()

  if (token === null) {
    return null
  }

  return (
    <Flex flexWrap="wrap" css={{ padding: '60px 120px' }}>
      <Fetch
        service={() => PlaylistService.getPlaylistById(query.id, { token })}>
        {({ data }) => {
          console.log('data', data)
          return (
            <div>
              <DetailPageHeader data={data} />
              <br />
              <SongList tracks={data.tracks.items} />
            </div>
          )
        }}
      </Fetch>
    </Flex>
  )
}

function DetailPageHeader({ data }) {
  return (
    <Flex
      flexWrap="wrap"
      width={1}
      css={{ backgroundColor: '#111', borderRadius: '5px' }}>
      <Box width={1 / 3} px={10}>
        <article css={{ margin: '35px' }}>
          <img src={data.images[0].url} />
        </article>
      </Box>
      <Box width={1 / 2} px={10}>
        <article css={{ margin: '35px' }}>
          <div>
            <b>{data.name}</b>
          </div>
          <br />
          <div>{data.description}</div>
          <br />
          <div>{data.tracks.total} tracks</div>
        </article>
      </Box>
    </Flex>
  )
}

function SongList({ tracks }) {
  return (
    <Flex
      flexWrap="wrap"
      width={1}
      css={{ backgroundColor: '#111', padding: '10px 0', borderRadius: '5px' }}>
      {tracks.map((track, i) => {
        return <SongListItem key={i} track={track.track} />
      })}
    </Flex>
  )
}

function SongListItem({ track }) {
  return (
    <div
      css={{
        padding: '5px 20px',
        display: 'flex',
        minWidth: '95%',
        color: '#bbb',
      }}>
      <span
        css={{
          width: '5%',
        }}></span>

      <span
        css={{
          width: '80%',
          alignSelf: 'center',
        }}>
        {track.name}
      </span>
      <span
        css={{
          width: '10%',
          alignSelf: 'center',
          fontSize: '0.8em',
          color: '#888',
        }}>
        {transformDuration(track.duration_ms)}
      </span>
      <span
        css={{
          width: '5%',
          alignSelf: 'center',
        }}>
        +
      </span>
    </div>
  )
}

function transformDuration(ms) {
  ms /= 1000
  ms = Math.round(ms)
  const m = Math.round(ms / 60)
  const s = ms % 60
  return `${m <= 9 ? '0' : ''}${m}:${s <= 9 ? '0' : ''}${s}`
}

export default withPage({ restricted: true })(PlaylistDetailPage)
