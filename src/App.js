import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import firebase from './config/firebase'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Notification from './components/Notification'

import Layout from './styledcomponents/Layout'

import { connect as connectToSocket, authenticateSocket } from './reducers/socketReducer'

const App = props => {
    const { connectToSocket, authenticateSocket } = props

    const checkToken = async () => {
        const token = window.localStorage.getItem('loggedEcardUser')
        if (token) {
            await firebase.auth().signInWithCustomToken(token)
            authenticateSocket(firebase.auth().currentUser.uid, false, '')
        }
    }

    useEffect(() => {
        connectToSocket()
        checkToken()
    }, [])

    useEffect(() => {
        console.log('JUST RENDERED BABY')
    })

    return (
        <Layout.Body>
            <Notification />
            <Router>
                <Switch>
                    <Route exact path='/' render={() => <Home />} />
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/register' render={() => <Register />} />
                </Switch>
            </Router>
        </Layout.Body>
    )
}

const mapDispatchToProps = {
    connectToSocket,
    authenticateSocket
}

export default connect(
    null,
    mapDispatchToProps
)(App)
