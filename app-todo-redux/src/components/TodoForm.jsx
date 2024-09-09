import React from 'react'

const TodoForm = ({ handleAddTodo }) => {

    return (
        <input type="text" placeholder='Add Task' className='form-control w-50 my-3 mx-auto' onKeyUp={handleAddTodo} />
    )
}

export default TodoForm