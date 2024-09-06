import React, { useContext, useEffect } from 'react'
import { Context } from '../context/TodoContext'

const TodoForm = () => {

    const { addTask } = useContext(Context)

    const handleEnter = e => {
        if(e.key === 'Enter' && e.target.value.trim()){
            addTask(e.target.value)
            e.target.value = ''
        }
    }

    return (
        <input type="text" placeholder='Add Task' className='form-control w-50 my-3 mx-auto' onKeyUp={handleEnter} />
    )
}

export default TodoForm