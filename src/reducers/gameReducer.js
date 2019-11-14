/* eslint "eqeqeq": "off" */

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
                room.myscore = room.player1Score
                room.oppscore = room.player2Score
            } else {
                room.cards = room.player2Cards
                room.myscore = room.player2Score
                room.oppscore = room.player1Score
            }
            return room
        }
        case 'GAME_NEXT_TURN': {
            const room = { ...action.room }
            if (room.player1UID == action.uid) {
                room.cards = room.player1Cards
                room.myscore = room.player1Score
                room.oppscore = room.player2Score
            } else {
                room.cards = room.player2Cards
                room.myscore = room.player2Score
                room.oppscore = room.player1Score
            }
            return room
        }
        case 'GAME_OVER': {
            return null
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

export const gameOver = () => {
    return {
        type: 'GAME_OVER'
    }
}

export const eraseGameRoom = roomid => {
    return {
        type: ACTIONS.EMIT,
        event: 'erase game room',
        data: roomid
    }
}

export default gameReducer
