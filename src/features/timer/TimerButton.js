import React from 'react'

import styles from './TimerStyles'

export default function TimerButton({ icon }) {
  return (
    <button style={styles.button}>
      <i className={`fa fa-${icon}`} />
    </button>
  )
}
