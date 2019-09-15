// Reducer to store handlers associated to socket events
// import { ACTIONS } from '../middleware/socketMiddleware'

const eventHandlerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SUBSCRIBE': {
            const newState = { ...state }
            newState[action.event] = action.handle
            return newState
        }
        case 'UNSUBSCRIBE': {
            const newState = { ...state }
            newState[action.event] = null
            return newState
        }
        default:
            return state
    }
}

// FOR TESTING BELOW
// export const socketListen = () => {
//     return {
//         type: ACTIONS.SUBSCRIBE,
//         event: 'msg',
//         handle: data => {
//             console.log(data, 'FROM HANDLE')
//         }
//         // Everytime you fire this, a new handle is made so fire this only once
//         // otherwise multiple functions will be associated with the same socket.on event
//     }
// }

// export const socketDontListen = () => {
//     return {
//         type: ACTIONS.UNSUBSCRIBE,
//         event: 'msg'
//     }
// }

// export const emitData = () => {
//     return {
//         type: ACTIONS.EMIT,
//         event: 'send back',
//         data: { name: 'Pragun' }
//     }
// }

export default eventHandlerReducer
