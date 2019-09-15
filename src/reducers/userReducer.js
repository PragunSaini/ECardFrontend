// Reducer to handle setting and storing user information
// import { ACTIONS } from '../middleware/socketMiddleware'

const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_USER_INFO':
            return action.user
        default:
            return state
    }
}

export default userReducer
