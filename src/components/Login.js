import React from 'react'
import { connect } from 'react-redux'

import { sendUserName, listenToUserInfo } from '../reducers/userReducer'

const Login = props => {
    const { sendUserName, listenToUserInfo } = props

    const login = e => {
        e.preventDefault()
        listenToUserInfo()
        sendUserName(e.target.username.value)
    }

    return (
        <>
            <h1>Welcome To E-Card</h1>
            <p>Please play as a guest (user system work in progress)</p>
            <form onSubmit={login}>
                <label htmlFor='username'>Enter Username : </label>
                <input type='text' name='username' id='username' />
                <button type='submit'>Guest Login</button>
            </form>
        </>
    )
}

const mapDispatchToProps = {
    sendUserName,
    listenToUserInfo
}

export default connect(
    null,
    mapDispatchToProps
)(Login)
