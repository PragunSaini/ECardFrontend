// Reducer to handle global chats
import { ACTIONS } from '../middleware/middlewareFunctions'

const chatReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GLOBAL_CHAT': {
            const chat = [...state, action.chat]
            if (chat.length > 1000) {
                return chat.slice(1)
            }
            return chat
        }
        case 'CLEAR_CHAT_HISTORY':
            return []
        default:
            return state
    }
}

export const addToGlobalChat = msg => {
    return {
        type: 'ADD_GLOBAL_CHAT',
        chat: msg
    }
}

export const clearChatStorage = () => {
    return {
        type: 'CLEAR_CHAT_HISTORY'
    }
}

export const sendChat = msg => {
    return dispatch => {
        dispatch({
            type: ACTIONS.EMIT,
            event: 'global chat message',
            data: msg
        })
        dispatch({
            type: 'ADD_GLOBAL_CHAT',
            chat: msg
        })
    }
}

export default chatReducer
