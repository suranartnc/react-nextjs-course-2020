import ReactPlayer from 'react-player'
import React from 'react'
import { inject } from '@lib/store'

function Player({ playerStore }) {
  const { url } = playerStore.nowPlaying
  return (
    <ReactPlayer
      css={{ display: 'none' }}
      url={url}
      playing
      progressInterval={50}
      onProgress={data => playerStore.setProgress(data)}
    />
  )
}

export default inject('playerStore')(Player)
