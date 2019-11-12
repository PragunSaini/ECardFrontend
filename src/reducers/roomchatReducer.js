import { ACTIONS } from '../middleware/middlewareFunctions'

const roomchatReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ROOM_CHAT': {
            const chat = [...state, action.chat]
            if (chat.length > 1000) {
                return chat.slice(1)
            }
            return chat
        }
        case 'CLEAR_ROOM_CHAT_HISTORY':
            return []
        default:
            return state
    }
}

export const addToRoomChat = msg => {
    return {
        type: 'ADD_ROOM_CHAT',
        chat: msg
    }
}

export const clearRoomChatStorage = () => {
    return {
        type: 'CLEAR_ROOM_CHAT_HISTORY'
    }
}

export const sendRoomChat = msg => {
    return dispatch => {
        dispatch({
            type: ACTIONS.EMIT,
            event: 'room chat message',
            data: msg
        })
        // dispatch({
        //     type: 'ADD_ROOM_GLOBAL_CHAT',
        //     chat: msg
        // })
    }
}

export default roomchatReducer
