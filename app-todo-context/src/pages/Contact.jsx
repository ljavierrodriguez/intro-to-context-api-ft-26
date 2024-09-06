import React, { useContext, useReducer } from 'react'
import { AppContext } from '../store/AppContext'

const initialValue = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME': return { ...state, name: action.value }
        case 'SET_EMAIL': return { ...state, email: action.value }
        case 'SET_SUBJECT': return { ...state, subject: action.value }
        case 'SET_MESSAGE': return { ...state, message: action.value }
        default: return state
    }
}

const Contact = () => {

    const state = useContext(AppContext)

    const [emailMessage, dispatch] = useReducer(reducer, initialValue)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(emailMessage)
    }
    return (
        <>
            <h1>Contact Page</h1>
            <h4 className='text-center'>Form Using Reducer Hooks</h4>
            <form onSubmit={handleSubmit} className="w-50 mx-auto my-5">
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control mb-3" placeholder='Insert name' value={emailMessage.name} onChange={(e) => dispatch({ type: 'SET_NAME', value: e.target.value })} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="name" className="form-label">Email</label>
                        <input type="email" className="form-control mb-3" placeholder='Insert Email' value={emailMessage.email} onChange={(e) => dispatch({ type: 'SET_EMAIL', value: e.target.value })} />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="name" className="form-label">Subject</label>
                        <input type="text" className="form-control mb-3" placeholder='Insert Subject' value={emailMessage.subject} onChange={(e) => dispatch({ type: 'SET_SUBJECT', value: e.target.value })} />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="name" className="form-label">Message</label>
                        <textarea rows={5} className="form-control mb-3" placeholder='Insert Message' value={emailMessage.message} onChange={(e) => dispatch({ type: 'SET_MESSAGE', value: e.target.value })} />
                    </div>
                </div>
                <button className="btn btn-primary btn-sm w-100">
                    Send Message
                </button>
            </form>


            <h4 className='text-center'>Form Using Context API</h4>

            <form onSubmit={state.actions.handleSubmitContact} className="w-50 mx-auto my-5">
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control mb-3" placeholder='Insert name' name="name" value={state?.store?.emailMessage?.name} onChange={state?.actions?.handleChangeContact} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="name" className="form-label">Email</label>
                        <input type="email" className="form-control mb-3" placeholder='Insert Email' name="email" value={state?.store?.emailMessage?.email} onChange={state?.actions?.handleChangeContact}  />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="name" className="form-label">Subject</label>
                        <input type="text" className="form-control mb-3" placeholder='Insert Subject' name="subject" value={state?.store?.emailMessage?.subject} onChange={state?.actions?.handleChangeContact} />
                    </div>
                    <div className="form-group col-md-12">
                        <label htmlFor="name" className="form-label">Message</label>
                        <textarea rows={5} className="form-control mb-3" placeholder='Insert Message' name="message" value={state?.store?.emailMessage?.message} onChange={state?.actions?.handleChangeContact} />
                    </div>
                </div>
                <button className="btn btn-primary btn-sm w-100">
                    Send Message
                </button>
            </form>

        </>
    )
}

export default Contact