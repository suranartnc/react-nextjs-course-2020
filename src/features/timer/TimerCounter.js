import React from 'react'

import styles from './TimerStyles'

export default function TimerCounter({ count }) {
  return <div style={styles.counter}>{count}</div>
}
