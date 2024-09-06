const getState = ({ getStore, getActions, setStore }) => {

    // getStore = devuelve el objeto store con todos los atributos definidos en el
    // getActions = devuelve el objecto actions con todo los metodos definidos en el
    // setStore = recibe un objeto con el atributo y el valor que queremos añadir o actulizar el store

    return {
        store: {
            todos: [],
            users: [],
            name: 'Luis',
            emailMessage: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        },
        actions: {
            handleChangeContact: e => {
                const { name, value } = e.target
                const { emailMessage } = getStore()
   
                //actualizamos con el valor del input que estamos modificando el cual esta guardado en el atributo [name]
                emailMessage[name] = value
                
                setStore({
                    emailMessage: emailMessage
                })
            },
            handleSubmitContact: e => {
                e.preventDefault()
                const { emailMessage } = getStore()
                console.log(emailMessage)
            },
            saludar: () => {
                //const store = getStore()
                const {name} = getStore()
                console.log("Hola " + name)
            },
            handleClick: e => {
                const actions = getActions()
                actions.saludar()
            },
            changeName: name => {
                setStore({ name: name })
            }
        }
    }
}

export default getState