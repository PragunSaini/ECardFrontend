import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import registerService from '../services/registerService'

const Register = props => {
    const [show, setShow] = useState(false)

    const register = async e => {
        e.preventDefault()
        const username = e.target.username.value
        const email = e.target.email.value
        const password = e.target.password.value
        const user = await registerService.userRegister(username, email, password)
        if (user === null) {
            setShow(true)
            setInterval(() => {
                setShow(!show)
            }, 3000)
        } else {
            console.log(user)
            props.history.push('/login')
        }
    }

    return (
        <>
            {show && <Notification msg='Please check details, error occured' />}
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
