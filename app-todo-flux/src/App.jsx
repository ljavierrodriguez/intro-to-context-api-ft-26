import React, { useEffect, useState } from 'react'
import TodoStore from './stores/TodoStore'
import TodoForm from './components/TodoForm'
import TodoActions from './actions/TodoActions'
import TodoList from './components/TodoList'

const App = () => {

    const [todos, setTodos] = useState(TodoStore.getTodos())

    useEffect(() => {

    }, [])

    const handleAddTodo = e => {
        if(e.key === 'Enter' && e.target.value.trim()){
            console.log(e.target.value)
            TodoActions.addTodo(e.target.value)

            //e.target.value = ''
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