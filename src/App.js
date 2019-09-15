import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

import { connect as connectToSocket } from './reducers/socketReducer'

const App = props => {
    const { user, connectToSocket } = props

    useEffect(() => {
        connectToSocket()
    }, [])

    useEffect(() => {
        console.log('JUST RENDERED BABY')
    })

    return (
        <div>
            <Router>
                <div>
                    <Route
                        exact
                        path='/'
                        render={() => (user !== null ? <Home /> : <Redirect to='/login' />)}
                    />
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/register' render={() => <Register />} />
                </div>
            </Router>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    connectToSocket
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
