import React from 'react'
import ReactPlayer from 'react-player'
import { inject } from '@lib/store'

function Player({ playerStore }) {
  return (
    <ReactPlayer
      ref={el => playerStore.setPlayerInstance(el)}
      css={{ display: 'none' }}
      url={playerStore.nowPlaying.url}
      playing={playerStore.nowPlaying.playing}
      progressInterval={50}
      volume={playerStore.volume.level}
      muted={playerStore.volume.muted}
      onProgress={data =>
        !playerStore.progress.seeking && playerStore.setProgress(data)
      }
      onEnded={() => playerStore.playNextTrackInQueue()}
    />
  )
}

export default inject('playerStore')(Player)
