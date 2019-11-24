import React from 'react'
import ReactPlayer from 'react-player'

import PlayerStore from '@features/player/store'

function Player() {
  const playerStore = new PlayerStore()
  const { url, playing } = playerStore.nowPlaying

  return <ReactPlayer css={{ display: 'none' }} playing={playing} url={url} />
}

export default Player
