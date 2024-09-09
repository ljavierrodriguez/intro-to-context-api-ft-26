import React from 'react'
import { removeTodo } from '../actions/todoActions'
import { useDispatch } from 'react-redux'

const TodoItem = ({ todo, pos }) => {

  const dispatch = useDispatch()
  const deleteTask = (pos) => {
      dispatch(removeTodo(pos))
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