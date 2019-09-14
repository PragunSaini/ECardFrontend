// Reducer to handle setting and storing user information
import { ACTIONS } from '../middleware/socketMiddleware'

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_INFO':
            return action.userInfo
        default:
            return state
    }
}

// Receive user info from backend and store in state
export const listenToUserInfo = () => {
    return dispatch => {
        // First open the listener to recieve userInfo
        dispatch({
            type: ACTIONS.SUBSCRIBE,
            event: 'user info',
            handle: userInfo => {
                // Set this userInfo as state
                dispatch({
                    type: 'SET_USER_INFO',
                    userInfo
                })
                // Stop listening to userInfo
                dispatch({
                    type: ACTIONS.UNSUBSCRIBE,
                    event: 'user info'
                })
            }
        })
    }
}

// Send username to backend
export const sendUserName = username => {
    return {
        type: ACTIONS.EMIT,
        event: 'set username',
        data: username
    }
}

export default userReducer
