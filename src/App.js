import React, { useEffect } from 'react'

import { connect } from './reducers/socketReducer'
import { socketListen, socketDontListen, emitData } from './reducers/testReducer'

const App = props => {
    const { store } = props

    useEffect(() => {
        store.dispatch(connect())
        store.dispatch(socketListen())
    }, [store])

    useEffect(() => {
        console.log('JUST RENDERED BABY')
    })

    const onClick = e => {
        e.preventDefault()
        store.dispatch(socketListen())
    }

    const onClick0 = e => {
        e.preventDefault()
        store.dispatch(socketDontListen())
    }

    const onClick2 = e => {
        e.preventDefault()
        store.dispatch(emitData())
    }

    return (
        <div>
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

// const mapStateToProps = state => {
//     return {
//         test: state.test
//     }
// }

// const mapDispatchToProps = {
//     initTest,
//     addTest
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App)

export default App
