import React from 'react'

import TimerButton from './TimerButton'
import styles from './TimerStyles'

export default function Panel() {
  return (
    <div style={styles.panel}>
      <TimerButton
        icon="play"
        onClick={() => {
          console.log('toggle play/pause')
        }}
      />
      <TimerButton
        icon="stop"
        onClick={() => {
          console.log('stop')
        }}
      />
      <TimerButton
        icon="clock-o"
        onClick={() => {
          console.log('lap')
        }}
      />
    </div>
  )
}
