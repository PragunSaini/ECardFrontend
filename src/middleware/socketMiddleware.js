// Used from : https://github.com/Digital-Logic/simple-chat/blob/front-end/src/Store/SocketMiddleware.js
import io from 'socket.io-client'

export const ACTIONS = Object.freeze({
    SUBSCRIBE: 'SOCKET_IO_SUBSCRIBE',
    UNSUBSCRIBE: 'SOCKET_IO_UNSUBSCRIBE',
    EMIT: 'SOCKET_IO_EMIT',
    EMIT_EVENT: 'SOCKET_IO_EMIT_EVENT',
    EVENT_RECEIVED: 'SOCKET_IO_EVENT_RECEIVED'
})

// Write your own

const socketMiddleware = store => next => action => {
    console.log('Action => ', action)
    const socket = io('http://localhost:5000')

    if (typeof action === 'function') next(action)

    next(action)
}

export default socketMiddleware

// export default function socketMiddleware() {
//     const socket = io('http://localhost:5000')
//     console.log('Called Middleware', socket)

//     return store => next => action => {
//         next(action)
//         if (typeof action === 'function') return next(action)
//         if (typeof action !== 'function') return next(action)
//         const { dispatch } = store
//         const { type, event, handle, data } = action

//         function defaultHandle() {
//             return () => dispatch({ type: event, data })
//         }
//         const eventHandler = typeof handle === 'function' ? handle : defaultHandle()

//         switch (type) {
//             case ACTIONS.SUBSCRIBE:
//                 dispatch({
//                     type: `SUBSCRIBE ${event}`,
//                     event,
//                     handle: typeof handle === 'function' ? `function: ${handle.name}` : handle
//                 })
//                 // All events captured by socket.io will be dispatched through redux
//                 socket.on(event, dadta => {
//                     console.log('Evente generated')
//                     eventHandler(dadta)
//                 })
//                 // return the event handler, so the caller can unsubscribe from the event.
//                 return eventHandler

//             case ACTIONS.UNSUBSCRIBE:
//                 dispatch({ type: `UNSUBSCRIBE ${event}`, event })

//                 if (typeof handle !== 'function')
//                     throw new Error(
//                         `Unable to unsubscribe to ${event}, without a function reference.`
//                     )
//                 // the handle must resolve to the same function that was used to register the event.
//                 socket.removeListener(event, handle)
//                 break

//             case ACTIONS.EMIT:
//                 dispatch({ type: event, data })
//                 return socket.emit(event, data)

//             default:
//                 return next(action)
//         }

//         return next(action)
//     }
// }

// export { socketMiddleware, ACTIONS as SOCKET_ACTIONS }
