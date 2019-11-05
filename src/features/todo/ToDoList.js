import React from 'react'
import styles from './ToDoStyles'

function ToDoItem() {
  return (
    <li style={styles.todoItem}>
      <input type="checkbox" style={styles.todoItemCheckBox} />
      <span>Task Name</span>
      <button style={styles.todoItemDelete}>X</button>
    </li>
  )
}

export default function ToDoList() {
  return (
    <ul>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </ul>
  )
}
