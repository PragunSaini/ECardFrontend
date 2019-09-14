import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Login from './components/Login'

import { connect as connectToSocket } from './reducers/socketReducer'
import { socketListen, socketDontListen, emitData } from './reducers/testReducer'

const App = props => {
    const { connectToSocket, socketListen, socketDontListen, emitData } = props

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
            <Login />
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

const mapDispatchToProps = {
    socketListen,
    socketDontListen,
    emitData,
    connectToSocket
}

export default connect(
    null,
    mapDispatchToProps
)(App)
