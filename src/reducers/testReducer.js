// A test reducer to check socket interaction

import { ACTIONS } from '../middleware/socketMiddleware'

const testReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SUBSCRIBE': {
            // console.log('Listening to messages')
            const newState = { ...state }
            newState[action.event] = action.handle
            return newState
        }
        case 'UNSUBSCRIBE': {
            // console.log('NOT LISTENING TO MESSAGES')
            const newState = { ...state }
            newState[action.event] = null
            return newState
        }
        default:
            return state
    }
}

export const socketListen = () => {
    return {
        type: ACTIONS.SUBSCRIBE,
        event: 'msg',
        handle: data => {
            console.log(data, 'FROM HANDLE')
        }
        // Everytime you fire this, a new handle is made so fire this only once
        // otherwise multiple functions will be associated with the same socket.on event
    }
}

export const socketDontListen = () => {
    return {
        type: ACTIONS.UNSUBSCRIBE,
        event: 'msg'
    }
}

export const emitData = () => {
    return {
        type: ACTIONS.EMIT,
        event: 'send back',
        data: { name: 'Pragun' }
    }
}

export default testReducer
