/* eslint  "eqeqeq": "off" */

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import firebase from './config/firebase'

import Loader from './components/Loader'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Chat from './components/Chat'
import Game from './components/Game'

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
        const date = Date.parse(JSON.parse(window.localStorage.getItem('loggedEcardUserTime')))
        const now = Date.now()
        if (token && date && (Math.abs(date - now) / 36e5 < 1)) { // if last login was within one hours 
            await firebase.auth().signInWithCustomToken(token)
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

    return (
        <Layout.Body>
            <Helmet>
                <meta charset='utf-8' />
                <title>E-Card</title>
                <meta
                    name='description'
                    content='E-Card is a real time multiplayer strategy card game.'
                />
                <meta name='language' content='English' />
                <meta name='author' content='Pragun Saini' />
            </Helmet>
            {loading ? (
                <Loader />
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
                        render={({ match }) => {
                            if (user) {
                                if (!game) {
                                    return <Redirect to='/' />
                                }
                                if (game.roomid != match.params.id) {
                                    return <Redirect to='/' />
                                }
                                return <Game id={match.params.id} />
                            }
                            return <Redirect to='/login' />
                        }}
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
    )(App))
