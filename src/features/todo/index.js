import React from 'react'

import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import ToDoFooter from './ToDoFooter'

import styles from './ToDoStyles'

export default function ToDoApp() {
  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>
        <div style={styles.app}>
          <ToDoForm />
          <ToDoList />
          <ToDoFooter />
        </div>
      </div>
    </div>
  )
}
