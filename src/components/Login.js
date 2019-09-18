import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../firebaseConfig'

import { authenticateSocket } from '../reducers/socketReducer'

import Logo from './Logo'
import NavLinks from './NavLinks'
import Guest from './Guest'
import User from './User'

import NavBar from '../styledcomponents/NavBar'
import Layout from '../styledcomponents/Layout'
import LoginStyles from '../styledcomponents/LoginStyles'

const { LoginSection, LoginBox, NavBox } = LoginStyles

// Initializing firebase
firebase.initializeApp(firebaseConfig)

// To login users
const Login = props => {
    const { authenticateSocket } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [guest, setGuest] = useState('')

    useEffect(() => {
        setEmail('')
        setPassword('')
        setError('')
    }, [])

    const setValue1 = e => {
        setEmail(e.target.value)
    }

    const setValue2 = e => {
        setPassword(e.target.value)
    }

    const setValue3 = e => {
        setGuest(e.target.value)
    }

    const returnError = () => (error !== '' ? `* ${error}` : '')

    const errorhandler = error => {
        switch (error.code) {
            case 'auth/wrong-password':
                setError('The password is invalid')
                break
            case 'auth/user-not-found':
                setError('No user with that email exists. Please register first')
                break
            case 'auth/invalid-email':
                setError('Please enter a valid email address')
                break
            default:
                break
        }
    }

    // Login the user
    const login = e => {
        e.preventDefault()
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
                errorhandler(error)
                console.log(error)
                firebase.auth().signOut()
            })
    }

    const guestLogin = e => {
        e.preventDefault()
        // const
    }

    return (
        <>
            <Layout.BackGround2 />
            <LoginSection>
                <NavBox>
                    <NavBar.NavBar>
                        <Logo logowidth='100%' />
                        <NavBar.SubNav>
                            <NavBar.StyledUL>
                                <NavLinks.Register />
                            </NavBar.StyledUL>
                        </NavBar.SubNav>
                    </NavBar.NavBar>
                </NavBox>
                <LoginBox>
                    <User
                        login={login}
                        email={email}
                        password={password}
                        setValue1={setValue1}
                        setValue2={setValue2}
                        returnError={returnError}
                    />
                    <Guest guest={guest} setValue3={setValue3} guestLogin={guestLogin} />
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
