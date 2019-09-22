// To manage the client side socket state and establish connection

import io from 'socket.io-client'
import { ACTIONS } from '../middleware/socketMiddleware'

const socketReducer = (state = null, action) => {
    switch (action.type) {
        case 'CONNECT':
            return io('https://e-card-game.herokuapp.com', {
                autoConnect: false
            })
        default:
            return state
    }
}

// Run at first loading of app to initialize socket
export const connect = () => {
    return {
        type: 'CONNECT'
    }
}

// Run after login to authenticate socket
export const authenticateSocket = (uid, guest, displayName) => {
    return {
        type: ACTIONS.CONNECT,
        event: 'authenticate',
        data: { uid, guest, displayName }
    }
}

export default socketReducer
