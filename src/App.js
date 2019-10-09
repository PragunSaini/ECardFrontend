import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
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
    const {
        history,
        user,
        loading,
        game,
        connectToSocket,
        authenticateSocket,
        startLoading,
        finishLoading
    } = props

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

    const checkinGame = () => {
        if (game) {
            history.push(`/game/${game.roomid}`)
        }
    }

    useEffect(() => {
        startLoading()
        connectToSocket()
        checkToken()
    }, [])

    useEffect(() => {
        checkinGame()
    }, [game])

    useEffect(() => {
        console.log('JUST RENDERED BABY')
    })

    return (
        <Layout.Body>
            <Notification />

            {loading ? (
                <p style={{ color: 'black' }}>Loading</p>
            ) : (
                <Switch>
                    <Route path='/login' render={() => (user ? <Redirect to='/' /> : <Login />)} />
                    <Route
                        path='/register'
                        render={() => (user ? <Redirect to='/' /> : <Register />)}
                    />
                    <Route
                        path='/chat'
                        render={() => (user ? <Chat /> : <Redirect to='/login' />)}
                    />
                    <Route
                        path='/game/:id'
                        render={({ match }) =>
                            user ? (
                                <p style={{ color: 'black' }}>{match.params.id}</p>
                            ) : (
                                <Redirect to='/login' />
                            )
                        }
                    />
                    <Route path='/' render={() => <Home />} />
                </Switch>
            )}
        </Layout.Body>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        user: state.user,
        game: state.game
    }
}

const mapDispatchToProps = {
    connectToSocket,
    authenticateSocket,
    startLoading,
    finishLoading
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
)
