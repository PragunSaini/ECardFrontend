import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

import { connect as connectToSocket } from './reducers/socketReducer'
import { socketListen, socketDontListen, emitData } from './reducers/testReducer'

const App = props => {
    const { user, connectToSocket, socketListen, socketDontListen, emitData } = props

    useEffect(() => {
        connectToSocket()
        socketListen()
    }, [])

    useEffect(() => {
        console.log('JUST RENDERED BABY')
    })

    const onClick = e => {
        e.preventDefault()
        socketListen()
    }

    const onClick0 = e => {
        e.preventDefault()
        socketDontListen()
    }

    const onClick2 = e => {
        e.preventDefault()
        emitData()
    }

    return (
        <div>
            <Router>
                <div>
                    <Route
                        exact
                        path='/'
                        render={() =>
                            Object.prototype.hasOwnProperty.call(user, 'username') ? (
                                <Home />
                            ) : (
                                <Redirect to='/login' />
                            )
                        }
                    />
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/register' render={() => <Register />} />
                </div>
            </Router>
            <button onClick={onClick} type='button'>
                Enable Listener
            </button>
            <button onClick={onClick0} type='button'>
                Disable Listener
            </button>
            <button onClick={onClick2} type='button'>
                Emit Data
            </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    socketListen,
    socketDontListen,
    emitData,
    connectToSocket
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
