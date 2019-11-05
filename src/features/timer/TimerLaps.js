import React from 'react'

import styles from './TimerStyles'

export default function TimerLaps() {
  return (
    <div style={styles.laps}>
      <ul>
        <li>0:11</li>
        <li>0:45</li>
        <li>1:35</li>
      </ul>
    </div>
  )
}
