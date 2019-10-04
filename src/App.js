import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import firebase from './config/firebase'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Notification from './components/Notification'
import Chat from './components/Chat'

import Layout from './styledcomponents/Layout'

import { connect as connectToSocket, authenticateSocket } from './reducers/socketReducer'
import { startLoading, finishLoading } from './reducers/loadingReducer'

const App = props => {
    const { loading, connectToSocket, authenticateSocket, startLoading, finishLoading } = props

    const checkToken = async () => {
        const token = window.localStorage.getItem('loggedEcardUser')
        if (token) {
            await firebase.auth().signInWithCustomToken(token)
            console.log(firebase.auth().currentUser)
            authenticateSocket(firebase.auth().currentUser.uid, false, '')
        } else {
            finishLoading()
        }
    }

    useEffect(() => {
        startLoading()
        connectToSocket()
        checkToken()
    }, [])

    useEffect(() => {
        console.log('JUST RENDERED BABY')
    })

    return (
        <Layout.Body>
            <Notification />

            {loading ? (
                <p style={{ color: 'black' }}>Loading</p>
            ) : (
                <Router>
                    <Switch>
                        <Route exact path='/' render={() => <Home />} />
                        <Route path='/login' render={() => <Login />} />
                        <Route path='/register' render={() => <Register />} />
                        <Route path='/chat' render={() => <Chat />} />
                    </Switch>
                </Router>
            )}
        </Layout.Body>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.loading
    }
}

const mapDispatchToProps = {
    connectToSocket,
    authenticateSocket,
    startLoading,
    finishLoading
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
