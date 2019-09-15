import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/auth'

import { authenticateSocket } from '../reducers/socketReducer'

const firebaseConfig = {
    apiKey: 'AIzaSyCDkzBfv1mFN1oFQn2o-0qDBx69lIQiaIg',
    authDomain: 'e-card-9955f.firebaseapp.com',
    databaseURL: 'https://e-card-9955f.firebaseio.com',
    projectId: 'e-card-9955f',
    storageBucket: '',
    messagingSenderId: '630126434744',
    appId: '1:630126434744:web:e74d7cf1d5ba7ac7c5d74d'
}
firebase.initializeApp(firebaseConfig)

// To login users
const Login = props => {
    const { authenticateSocket } = props

    // Login the user
    const login = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
                console.log(error, 'COULDNT SIGN IN TRY AGAIN')
            })
        if (firebase.auth().currentUser) {
            // User has logged in so send thumbs up to server
            authenticateSocket(firebase.auth().currentUser.uid)
            setInterval(() => {
                props.history.push('/')
            }, 2000)
        }
    }

    return (
        <>
            <h1>Welcome To E-Card</h1>
            <p>Please play as a guest (user system work in progress)</p>
            <form onSubmit={login}>
                <label htmlFor='email'>
                    Enter Email :
                    <input type='email' name='email' id='email' />
                </label>
                <label htmlFor='password'>
                    Enter Password :
                    <input type='password' name='password' id='password' />
                </label>
                <button type='submit'>Guest Login</button>
            </form>

            <p>
                Not registered, go <Link to='/register'>here</Link>
            </p>
        </>
    )
}

const mapDispatchToProps = {
    authenticateSocket
}

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(Login)
)
