import React from 'react'
import styles from './ToDoStyles'

export default function ToDoFooter() {
  return (
    <div style={styles.footer.container}>
      <p style={styles.footer.itemsLeft}>3 items left</p>
      <ToDoFooterFilters />
      <button style={styles.footerFilters.button}>Clear completed</button>
    </div>
  )
}

function ToDoFooterFilters() {
  return (
    <div style={styles.footerFilters.container}>
      <button style={styles.footerFilters.button}>All</button>
      <button style={styles.footerFilters.button}>Active</button>
      <button style={styles.footerFilters.button}>Completed</button>
    </div>
  )
}
