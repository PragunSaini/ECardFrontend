// A test reducer

import { ACTIONS as Actions } from '../middleware/socketMiddleware'

const testReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT':
            return ['Pragun']
        case 'APPEND':
            return [...state, action.data]
        case 'say hello':
            console.log(action.data)
            return []
        default:
            return state
    }
}

export const initTest = () => {
    return {
        type: 'INIT'
    }
}

export const addTest = i => {
    return {
        type: 'APPEND',
        data: i
    }
}

export const socketListen = () => {
    return {
        type: Actions.SUBSCRIBE,
        event: 'msg',
        handle: data => {
            console.log(data)
        }
    }
}

export const joinRoom = () => {
    return {
        type: Actions.EMIT,
        event: 'join room',
        data: 'abc'
    }
}

export const hello = () => {
    return {
        type: Actions.EMIT,
        event: 'say hello',
        data: 'Hello Backend'
    }
}

export default testReducer
