import { EventEmitter} from 'events'
import AppDispatcher from '../dispatcher/AppDispatcher'

const CHANGE_EVENT = 'change'

let todos = [
    "comprar pan",
    "ver netflix"
]

const TodoStore = {
    getTodos: () => todos
}

AppDispatcher.register((action) => {
    switch(action.actionType){
        case 'ADD_TODO':
            todos.push(action.texto)
            console.log(todos)
            break
        case 'REMOVE_TODO':
            todos = todos.filter((todo, pos) => pos !== action.pos)
            console.log(todos)
            break
    }

})

export default TodoStore