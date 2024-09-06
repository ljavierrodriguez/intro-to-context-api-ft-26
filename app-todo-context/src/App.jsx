import React from 'react'
import TodoContext from './context/TodoContext'
import injectContext from './store/AppContext'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'

const App = () => {
    return (
        <TodoContext>
            <BrowserRouter>
                <Routes>
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </TodoContext>
    )
}

export default injectContext(App)