import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'
// Add the Firebase products that you want to use
import 'firebase/auth'
import firebaseConfig from '../firebaseConfig'

import { authenticateSocket } from '../reducers/socketReducer'
import Navigation from './Navigation'

import Layout from '../styledcomponents/Layout'
import LoginStyles from '../styledcomponents/LoginStyles'

const { LoginSection, LoginBox, NavBox, GuestBox, UserBox, Heading } = LoginStyles

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
            .then(() => {
                if (firebase.auth().currentUser) {
                    // User has logged in so send thumbs up to server
                    authenticateSocket(firebase.auth().currentUser.uid)
                    setInterval(() => {
                        props.history.push('/')
                    }, 2000)
                }
            })
            .catch(error => {
                console.log("Can't LOG IN => ", error)
                firebase.auth().signOut()
            })
    }

    return (
        <>
            {/* <h1>Welcome To E-Card</h1>
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
            </p> */}
            <Layout.BackGround2 />

            <LoginSection>
                <NavBox>
                    <Navigation />
                </NavBox>
                <LoginBox>
                    <UserBox>
                        <Heading>Already registered? Login here</Heading>
                    </UserBox>
                    <GuestBox>
                        <Heading>Play as Guest</Heading>
                    </GuestBox>
                </LoginBox>
            </LoginSection>
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
