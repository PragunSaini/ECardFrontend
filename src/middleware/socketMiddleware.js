export const ACTIONS = Object.freeze({
    CONNECT: 'SOCKET_CONNECT',
    SUBSCRIBE: 'SOCKET_IO_SUBSCRIBE',
    UNSUBSCRIBE: 'SOCKET_IO_UNSUBSCRIBE',
    EMIT: 'SOCKET_IO_EMIT'
})

// Write your own

const socketMiddleware = store => next => action => {
    console.log('Action => ', action)

    const { socket, test } = store.getState()
    const { type, event, handle, data } = action

    switch (type) {
        // to connect and authenticate
        case ACTIONS.CONNECT: {
            socket.on('connect', () => {
                socket.emit('authentication', data)
                socket.on('authenticated', () => {
                    console.log('SUCCESFULLY CONNECTED SOCKET')
                })
                socket.on('unauthorized', error => {
                    console.log("COULDN'T AUTHENTICATE SOCKET", error)
                })
            })
            socket.open()
            socket.on('user information', user => {
                store.dispatch({
                    type: 'SET_USER_INFO',
                    user
                })
            })
            break
        }
        // Add event listener to socket.on event
        case ACTIONS.SUBSCRIBE: {
            store.dispatch({
                type: `SUBSCRIBE`,
                event,
                handle
            })

            socket.on(event, handle)
            break
        }
        // remove the event listener from the socket.on event
        case ACTIONS.UNSUBSCRIBE: {
            const eventHandler = test[event]
            console.log(eventHandler)
            socket.removeListener(event, eventHandler)

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
            socket.emit(event, data)
            break
        }
        default:
            next(action)
    }
}

export default socketMiddleware
