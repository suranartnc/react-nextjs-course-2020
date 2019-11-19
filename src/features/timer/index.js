import React, { useState, useEffect } from 'react'

import TimerCounter from './TimerCounter'
import TimerPanel from './TimerPanel'
import TimerLaps from './TimerLaps'
import styles from './TimerStyles'

export default function TimerApp() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount(count + 1)
    }, 1000)

    // To cancel the timer,
    // use clearTimeout(timeoutId)
  })

  function stop() {
    // Write some code here...
  }

  function recordLap() {
    // Write some code here...
  }

  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
        <TimerCounter count={count} />
        <TimerPanel />
        <TimerLaps />
      </div>
    </div>
  )
}
