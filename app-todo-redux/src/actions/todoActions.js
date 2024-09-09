export const addTodo = (texto) => ({
    type: 'ADD_TODO',
    payload: texto
})

export const removeTodo = (pos) => ({
    type: 'REMOVE_TODO',
    payload: pos
})