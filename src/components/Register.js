import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import registerService from '../services/registerService'

// To register new users
const Register = props => {
    const [show, setShow] = useState(false)
    const [msg, setMSG] = useState('')

    // Send data to server for registration
    const register = async e => {
        e.preventDefault()
        const username = e.target.username.value
        const email = e.target.email.value
        const password = e.target.password.value
        try {
            const user = await registerService.userRegister(username, email, password)
            console.log(`NEW USER REGISTERED`, user)
            props.history.push('/login')
        } catch (error) {
            setShow(true)
            setMSG('Error while registering, please check console for error info')
            setInterval(() => {
                setShow(false)
            }, 5000)
        }
    }

    return (
        <>
            {show && <Notification msg={msg} />}
            <form onSubmit={register}>
                <label htmlFor='username'>
                    Username :
                    <input type='text' name='username' id='username' />
                </label>
                <label htmlFor='email'>
                    Email :
                    <input type='email' name='email' id='email' />
                </label>
                <label htmlFor='password'>
                    Password :
                    <input type='password' id='password' name='password' />
                </label>
                <button type='submit'>Register</button>
            </form>
        </>
    )
}

const Notification = ({ msg }) => (
    <div>
        <p>{msg}</p>
    </div>
)

export default withRouter(Register)
