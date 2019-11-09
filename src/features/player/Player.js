import ReactPlayer from 'react-player'
import React from 'react'

Player.defaultProps = {
  url:
    'https://p.scdn.co/mp3-preview/f0521c21357ae522872b59cf4dd082ad65880fe8?cid=e4abb1ea8fdf4926a463960abd146fcb',
}

export default function Player({ url }) {
  return <ReactPlayer css={{ display: 'none' }} url={url} playing />
}
