import React from 'react'

import styles from './TimerStyles'

export default function TimerButton({ icon, onClick }) {
  return (
    <button style={styles.button} onClick={onClick}>
      <i className={`fa fa-${icon}`} />
    </button>
  )
}
