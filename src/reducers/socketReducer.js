import io from 'socket.io-client'
import { ACTIONS } from '../middleware/socketMiddleware'

const socketReducer = (state = null, action) => {
    switch (action.type) {
        case 'CONNECT':
            return io('http://localhost:5000', {
                autoConnect: false
            })
        default:
            return state
    }
}

export const connect = () => {
    return {
        type: 'CONNECT'
    }
}

export const authSocket = email => {
    return {
        type: ACTIONS.CONNECT,
        event: 'authenticate',
        data: { email }
    }
}

export default socketReducer
