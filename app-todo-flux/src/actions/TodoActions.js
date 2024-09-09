import AppDispatcher from "../dispatcher/AppDispatcher";

const TodoActions = {
    addTodo: (texto) => {
        AppDispatcher.dispatch({
            actionType: 'ADD_TODO',
            texto
        })
    },
    removeTodo: (pos) => {
        AppDispatcher.dispatch({
            actionType: 'REMOVE_TODO',
            pos
        })
    }
}

export default TodoActions