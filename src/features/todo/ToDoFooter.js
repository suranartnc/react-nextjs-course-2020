import React from 'react'
import styles from './ToDoStyles'

export default function ToDoFooter({ todos, updateFilter, clearCompleted }) {
  return (
    <div style={styles.footer.container}>
      <p style={styles.footer.itemsLeft}>{todos.length} items left</p>
      <ToDoFooterFilters updateFilter={updateFilter} />
      <button style={styles.footerFilters.button} onClick={clearCompleted}>Clear completed</button>
    </div>
  )
}

function ToDoFooterFilters({updateFilter}) {
  return (
    <div style={styles.footerFilters.container}>
      <button style={styles.footerFilters.button} onClick={() => updateFilter('all')}>All</button>
      <button style={styles.footerFilters.button} onClick={() => updateFilter('active')}>Active</button>
      <button style={styles.footerFilters.button} onClick={() => updateFilter('completed')}>Completed</button>
    </div>
  )
}
