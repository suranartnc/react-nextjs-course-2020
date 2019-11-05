import React from 'react'

import TimerButton from './TimerButton'
import styles from './TimerStyles'

export default function Panel() {
  return (
    <div style={styles.panel}>
      <TimerButton icon="play" />
      <TimerButton icon="stop" />
      <TimerButton icon="clock-o" />
    </div>
  )
}
