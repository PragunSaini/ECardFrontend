import { ACTIONS } from '../middleware/middlewareFunctions'

const gameReducer = (state = null, action) => {
    switch (action.type) {
        case 'GAME_ROOM_CREATED':
            return action.room
        case 'GAME_ROOM_JOINED':
            return action.room
        case 'GAME_INIT':
            return action.room
        default:
            return state
    }
}

export const createNewGameRoom = () => {
    return {
        type: ACTIONS.EMIT,
        event: 'create game room'
    }
}

export const joinGameRoom = roomid => {
    return {
        type: ACTIONS.EMIT,
        event: 'join game room',
        data: roomid
    }
}

export const ready = roomid => {
    return {
        type: ACTIONS.EMIT,
        event: 'ready to play',
        data: roomid
    }
}

export default gameReducer
