import React from 'react'
import ReactPlayer from 'react-player'

Player.defaultProps = {
  url: 'https://p.scdn.co/mp3-preview/7c91c6dc291142a9a489eb9be0a261b489028933',
}

function Player({ url }) {
  return <ReactPlayer css={{ display: 'none' }} url={url} playing={true} />
}

export default Player
