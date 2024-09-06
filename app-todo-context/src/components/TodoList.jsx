import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { Context } from '../context/TodoContext'

const TodoList = () => {

    const { todos } = useContext(Context)

    return (
        <ul className='list-group w-50 mx-auto'>
            {
                Array.isArray(todos) &&
                todos.map((todo, pos) => <TodoItem todo={todo} pos={pos} key={pos} />)
            }
            {/* <TodoItem todo={"comprar pan"} pos={0} />
            <TodoItem todo={"tender la cama"} pos={1} /> */}
        </ul>
    )
}

export default TodoList