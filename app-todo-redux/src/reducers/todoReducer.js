
const initialState = {
    todos: [
        "Comprar Pan", "Aprender React", "Aprender React Redux"
    ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload]}
        case 'REMOVE_TODO':
            return { ...state, todos: state.todos.filter((task, pos) => pos !== action.payload )}
        default:
            return state;
    }
}

export default todoReducer