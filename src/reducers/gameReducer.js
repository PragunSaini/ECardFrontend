import { ACTIONS } from '../middleware/middlewareFunctions'

const gameReducer = (state = null, action) => {
    switch (action.type) {
        case 'GAME_ROOM_CREATED':
            return action.room
        case 'GAME_ROOM_JOINED':
            return action.room
        case 'GAME_INIT': {
            const room = { ...action.room }
            if (room.player1UID == action.uid) {
                room.cards = room.player1Cards
            } else {
                room.cards = room.player2Cards
            }
            return room
        }
        case 'GAME_NEXT_TURN': {
            const room = { ...action.room }
            if (room.player1UID == action.uid) {
                room.cards = room.player1Cards
            } else {
                room.cards = room.player2Cards
            }
            return room
        }
        case 'GAME_OVER': {
            const room = { ...action.room }
            if (room.player1UID == action.uid) {
                room.cards = room.player1Cards
            } else {
                room.cards = room.player2Cards
            }
            return room
        }
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

export const cardPlayed = (card, roomid) => {
    return {
        type: ACTIONS.EMIT,
        event: 'card played',
        data: { card, roomid }
    }
}

export default gameReducer
