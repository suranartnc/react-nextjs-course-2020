import React, { useState, useEffect } from 'react'

import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import ToDoFooter from './ToDoFooter'

import styles from './ToDoStyles'

export default function ToDoApp() {
  const [todo, setTodo] = useState('') 
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  function addTodo(e) {
    e.preventDefault()

    setTodos([{
      id: new Date().getTime(),
      name:todo,
      completed: false
    }].concat(todos))
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function completeTodo(id) {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function completeAllTodos() {
    const isAnyActive = todos.some(todo => !todo.completed)

    setTodos(todos.map(todo => {
      todo.completed = isAnyActive
      return todo
    }))
  }

  function updateFilter(filter) {
    setFilter(filter)
  }

  function clearCompleted() {
    setTodos(todos.filter(todo => !todo.completed))
  }

  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>
        <div style={styles.app}>
          <ToDoForm todo={todo} setTodo={setTodo} addTodo={addTodo} completeAllTodos={completeAllTodos} />
          <ToDoList todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} filter={filter} />
          <ToDoFooter todos={todos} updateFilter={updateFilter} clearCompleted={clearCompleted} />
        </div>
      </div>
    </div>
  )
}
