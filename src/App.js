import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Logo from './components/Logo'
import NavLinks from './components/NavLinks'

import Layout from './styledcomponents/Layout'
import NavBar from './styledcomponents/NavBar'

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
        <Layout.Body>
            <Layout.BackGround2 />
            <Layout.BackGround1 />
            <Router>
                <Layout.Header>
                    <NavBar.NavBar>
                        <Logo />
                        <NavBar.SubNav>
                            <NavBar.StyledUL>
                                <NavLinks.About />
                                <NavLinks.HowToPlay />
                                <NavLinks.Chat />
                                <NavLinks.Login />
                                <NavLinks.Register />
                            </NavBar.StyledUL>
                        </NavBar.SubNav>
                    </NavBar.NavBar>
                </Layout.Header>
                <div>
                    <Route exact path='/' render={() => <Home />} />
                    <Route path='/login' render={() => <Login />} />
                    <Route path='/register' render={() => <Register />} />
                </div>
            </Router>
        </Layout.Body>
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
