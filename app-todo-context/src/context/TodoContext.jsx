import React, { createContext, useCallback, useState } from 'react'

export const Context = createContext(null)

const TodoContext = ({ children }) => {

  const [todos, setTodos] = useState([])

  const addTask = useCallback((task) => {
    setTodos(todos => todos.concat(task))
  })

  const deleteTask = useCallback((pos) => {
    setTodos(todos => todos.filter((_, index) => index !== pos))
  })


  return (
    <Context.Provider value={{ todos, addTask, deleteTask }}>
      {children}
    </Context.Provider>
  )
}

export default TodoContext