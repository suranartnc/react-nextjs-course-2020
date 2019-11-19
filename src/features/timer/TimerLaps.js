import React from 'react'

import styles from './TimerStyles'

export default function TimerLaps({ laps = [] }) {
  return (
    <div style={styles.laps}>
      <ul>
        {laps.map(function(lap) {
          return <li key={lap}>{lap}</li>
        })}
      </ul>
    </div>
  )
}
