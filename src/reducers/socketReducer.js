import io from 'socket.io-client'

const socketReducer = (state = null, action) => {
    switch (action.type) {
        case 'CONNECT':
            return io('http://localhost:5000')
        default:
            return state
    }
}

export const connect = () => {
    return {
        type: 'CONNECT'
    }
}

export default socketReducer
