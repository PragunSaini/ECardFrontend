export const ACTIONS = Object.freeze({
    SUBSCRIBE: 'SOCKET_IO_SUBSCRIBE',
    UNSUBSCRIBE: 'SOCKET_IO_UNSUBSCRIBE',
    EMIT: 'SOCKET_IO_EMIT'
})

// Write your own

const socketMiddleware = store => next => action => {
    console.log('Action => ', action)

    const { type, event, handle, data } = action

    switch (type) {
        // Add event listener to socket.on event
        case ACTIONS.SUBSCRIBE: {
            store.dispatch({
                type: `SUBSCRIBE ${event}`,
                event,
                handle
            })

            store.getState().socket.on(event, handle)
            break
        }
        // remove the event listener from the socket.on event
        case ACTIONS.UNSUBSCRIBE: {
            const eventHandler = store.getState().test[event]
            console.log(eventHandler)
            store.getState().socket.removeListener(event, eventHandler)

            store.dispatch({
                type: `UNSUBSCRIBE ${event}`,
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
            store.getState().socket.emit(event, data)
            break
        }
        default:
            next(action)
    }
}

export default socketMiddleware
