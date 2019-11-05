import React from 'react'
import styles from './ToDoStyles'

export default function ToDoForm() {
  return (
    <div>
      <form>
        <input
          style={styles.todoInput}
          type="text"
          placeholder="Enter your task here..."
        />
      </form>
      <button style={styles.footerFilters.button}>Check all</button>
    </div>
  )
}
