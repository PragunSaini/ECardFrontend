import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Notification from './components/Notification'

import Layout from './styledcomponents/Layout'

import { connect as connectToSocket } from './reducers/socketReducer'

const App = props => {
    const { connectToSocket } = props

    useEffect(() => {
        connectToSocket()
    }, [])

    useEffect(() => {
        console.log('JUST RENDERED BABY')
    })

    return (
        <Layout.Body>
            <Notification />
            <Router>
                <div>
                    <Route exact path='/' render={() => <Home />} />
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/register' render={() => <Register />} />
                </div>
            </Router>
        </Layout.Body>
    )
}

// const mapStateToProps = state => {
//     return {
//         user: state.user
//     }
// }

const mapDispatchToProps = {
    connectToSocket
}

export default connect(
    null,
    mapDispatchToProps
)(App)
