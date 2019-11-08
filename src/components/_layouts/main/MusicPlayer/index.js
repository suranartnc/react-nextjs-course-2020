import React from 'react'
import colors from '@features/_ui/colors'

export default function MusicPlayer() {
  return (
    <div
      css={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '90px',
        backgroundColor: colors.background.light,
        borderTop: `1px solid ${colors.background.dark}`,
      }}>
      Player
    </div>
  )
}
