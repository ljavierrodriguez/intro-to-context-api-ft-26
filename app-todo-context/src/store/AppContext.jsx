import React, { createContext, useState } from 'react'
import getState from './flux'

export const AppContext = createContext(null)

const injectContext = PassedComponent => {
    const StoreWrapper = () => {

        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updateStore) => setState({
                store: Object.assign(state.store, updateStore),
                actions: {...state.actions}
            })
        }))

        return (
            <AppContext.Provider value={state}>
                <PassedComponent />
            </AppContext.Provider>
        )
    }

    return StoreWrapper
}

export default injectContext


/* 
const a = {
    name: 'Luis'
}

const b = {
    name: 'Jane',
    lastname: 'Rodriguez'
}

const c = Object.assign(a, b) 
*/

/* 
c = {
    name: 'Jane',
    lastname: 'Rodriguez'
}
*/