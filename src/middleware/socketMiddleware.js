// MIDDLEWARE TO HANDLE SOCKET EVENTS

// Constants to identify dispatches
export const ACTIONS = Object.freeze({
    CONNECT: 'SOCKET_CONNECT',
    DISCONNECT: 'SOCKET_DSCONNECT',
    SUBSCRIBE: 'SOCKET_IO_SUBSCRIBE',
    UNSUBSCRIBE: 'SOCKET_IO_UNSUBSCRIBE',
    EMIT: 'SOCKET_IO_EMIT'
})

// The middleware
const socketMiddleware = store => next => action => {
    console.log('Action  => ', action)

    const { socket, eventHandlers } = store.getState()
    const { type, event, handle, data } = action

    switch (type) {
        // to connect and authenticate
        case ACTIONS.CONNECT: {
            // Attach listeners
            socket.on('connect', () => {
                socket.emit('authentication', data)
                socket.on('authenticated', () => {
                    console.log('Socket authenticated')
                })
                socket.on('unauthorized', error => {
                    console.log('Socket authenticate error', error)
                })
            })
            // Try to connect
            socket.open()
            // Set user information received from server
            socket.on('user information', user => {
                store.dispatch({
                    type: 'SET_USER_INFO',
                    user
                })
            })
            break
        }

        // To disconnect with server socket upon logout
        case ACTIONS.DISCONNECT: {
            socket.disconnect()
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
