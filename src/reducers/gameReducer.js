import { ACTIONS } from '../middleware/middlewareFunctions'

const gameReducer = (state = null, action) => {
    switch (action.type) {
        case 'GAME_ROOM_CREATED':
            return action.room
        case 'GAME_ROOM_JOINED':
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

export const joinGameRoom = id => {
    return {
        type: ACTIONS.EMIT,
        event: 'join game room',
        data: id
    }
}

export default gameReducer
