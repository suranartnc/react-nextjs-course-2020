import React from 'react'
import styles from './ToDoStyles'

function ToDoItem({todo, removeTodo, completeTodo}) {
  return (
    <li style={styles.todoItem}>
      <input type="checkbox" style={styles.todoItemCheckBox} checked={todo.completed} onChange={() => completeTodo(todo.id)} />
      <span>{todo.name}</span>
      <button style={styles.todoItemDelete} onClick={() => removeTodo(todo.id)}>X</button>
    </li>
  )
}

export default function ToDoList({todos, removeTodo, completeTodo, filter}) {
  return (
    <ul>
      {todos.filter(todo => {
        if (filter === 'completed') {
          return todo.completed
        } else if (filter === 'active') {
          return !todo.completed
        }

        return true
      }).map(function(todo) {
        return <ToDoItem key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
      })}
    </ul>
  )
}
