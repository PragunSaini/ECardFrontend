// MIDDLEWARE TO HANDLE SOCKET EVENTS
import {
    ACTIONS,
    subscribeGlobalChat,
    unsubscribeGlobalChat,
    updateUserCount,
    gameRoomCreated,
    roomJoinError,
    gameRoomJoined,
    gameInitAndStart
} from './middlewareFunctions'

// The middleware
const socketMiddleware = store => next => action => {
    console.log('Action  => ', action)

    const { socket, eventHandlers } = store.getState()
    const { type, event, handle, data } = action

    switch (type) {
        // to connect and authenticate
        case ACTIONS.CONNECT: {
            // Attach listeners
            console.log('\n\nGONNA AUTH\n\n', data, '\n\n')
            socket.on('connect', () => {
                socket.emit('authentication', data)
                socket.on('authenticated', () => {
                    console.log('Socket authenticated')
                    subscribeGlobalChat(store)
                    updateUserCount(store)
                    gameRoomCreated(store)
                    roomJoinError(store)
                    gameRoomJoined(store)
                    gameInitAndStart(store)
                })
                socket.on('unauthorized', error => {
                    console.log('Socket authenticate error', error)
                    store.dispatch({
                        type: 'FINISHED_LOADING'
                    })
                })
            })
            // Try to connect
            socket.open()
            // Set user information received from server
            socket.on('user information', user => {
                store.dispatch({
                    type: 'FINISHED_LOADING'
                })
                store.dispatch({
                    type: 'SET_USER_INFO',
                    user
                })
            })
            break
        }

        // To disconnect with server socket upon logout
        case ACTIONS.DISCONNECT: {
            unsubscribeGlobalChat(store)
            socket.disconnect()
            // We reconnect the socket after every logout,
            // To have a new connection for each user
            store.dispatch({ type: 'CONNECT' })
            break
        }

        // Add event listener to socket.on event
        case ACTIONS.SUBSCRIBE: {
            // To remember the handle associated with an event
            store.dispatch({
                type: `SUBSCRIBE`,
                event,
                handle
            })
            // Start listening for this event
            socket.on(event, handle)
            break
        }

        // remove the event listener from the socket.on event
        case ACTIONS.UNSUBSCRIBE: {
            // Get the attached event handler
            const eventHandler = eventHandlers[event]
            // Stop listening for this event
            socket.removeListener(event, eventHandler)
            // Remove the handler
            store.dispatch({
                type: `UNSUBSCRIBE`,
                event
            })
            break
        }

        // emit an event to the server socket
        case ACTIONS.EMIT: {
            store.dispatch({
                type: `EMIT ${event}`,
                data
            })
            // Emit data to server
            socket.emit(event, data)
            break
        }

        default:
            next(action)
    }
}

export default socketMiddleware
