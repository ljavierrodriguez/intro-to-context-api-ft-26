import React, { useContext } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { AppContext } from '../store/AppContext'


const Home = () => {
    const state = useContext(AppContext)
    return (
        <>
            <h1>Todo</h1>
            <TodoForm />
            <TodoList />

            <h3>Name: {state?.store?.name}</h3>
            <button className="btn btn-info btn-sm" onClick={state.actions.handleClick}>Saludar</button>
            <button className='btn btn-warning btn-sm' onClick={() => state.actions.changeName("Jane Doe")}>Cambiar Nombre</button>
        </>
    )
}

export default Home