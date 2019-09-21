import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { authenticateSocket } from '../reducers/socketReducer'
import { notify } from '../reducers/notificationReducer'

import Logo from './Logo'
import NavLinks from './NavLinks'
import Guest from './Guest'
import User from './User'

import NavBar from '../styledcomponents/NavBar'
import Layout from '../styledcomponents/Layout'
import LoginStyles from '../styledcomponents/LoginStyles'

const { LoginSection, LoginBox, NavBox } = LoginStyles

// To login users
const Login = props => {
    const { authenticateSocket, notify, firebase } = props
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
                setError('Server error. Please try again later')
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
                    authenticateSocket(firebase.auth().currentUser.uid, false, '')
                    notify('Succesfully Logged In', 3)
                    setTimeout(() => {
                        props.history.push('/')
                    }, 3000)
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
        try {
            const uid =
                Math.random()
                    .toString(36)
                    .substring(2, 15) +
                Math.random()
                    .toString(36)
                    .substring(2, 15)
            authenticateSocket(uid, true, guest)
            notify('Succesfully Logged In', 3)
            setTimeout(() => {
                props.history.push('/')
            }, 3000)
        } catch (error) {
            errorhandler(error)
        }
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

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    authenticateSocket,
    notify
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Login)
)
