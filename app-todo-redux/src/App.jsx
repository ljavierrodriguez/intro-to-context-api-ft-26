import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './actions/todoActions'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const handleAddTodo = e => {
        if(e.key === 'Enter' && e.target.value.trim()){
            console.log(e.target.value)
            dispatch(addTodo(e.target.value))
            e.target.value = ''
        }
    }

    return (
        <>
            <TodoForm handleAddTodo={handleAddTodo} />
            <TodoList todos={todos} />
        </>
    )
}

export default App