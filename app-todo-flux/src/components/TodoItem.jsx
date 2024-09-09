import React from 'react'
import TodoActions from '../actions/TodoActions'

const TodoItem = ({ todo, pos }) => {
  const deleteTask = (pos) => {
    TodoActions.removeTodo(pos)
  }
  return (
    <li className='list-group-item list-group-item-action d-flex justify-content-between'>
      <span>{todo}</span>
      <button className="btn btn-danger btn-sm" onClick={() => deleteTask(pos)}>
        <i className="bi bi-trash"></i>
      </button>
    </li>
  )
}

export default TodoItem