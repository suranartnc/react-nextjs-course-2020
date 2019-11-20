import React from 'react'
import styles from './ToDoStyles'

export default function ToDoForm({ todo, setTodo, addTodo, completeAllTodos }) {
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          style={styles.todoInput}
          type="text"
          placeholder="Enter your task here..."
          value={todo}
          onChange={(e)=> {
            setTodo(e.target.value)
          }}
        />
      </form>
      <button style={styles.footerFilters.button} onClick={completeAllTodos}>Check all</button>
    </div>
  )
}
