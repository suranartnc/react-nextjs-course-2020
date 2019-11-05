import React from 'react'
import styles from './DictStyles'

export default function DictApp() {
  return (
    <div style={styles.app}>
      <div style={styles.wrapper}>
        <div style={styles.form}>
          <input style={styles.keyword} placeholder="keywords..." />
          <button style={styles.button}>Search</button>
        </div>
        <ul style={styles.results}>
          <li>คำแปล 1</li>
          <li>คำแปล 2 (ถ้ามี)</li>
        </ul>
      </div>
    </div>
  )
}
