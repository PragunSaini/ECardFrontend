// Reducer to handle setting and storing user information
import { ACTIONS } from '../middleware/middlewareFunctions'

const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_USER_INFO':
            // Save the JWT in localstorage only for registered users
            if (!action.user.guest)
                window.localStorage.setItem('loggedEcardUser', action.user.token)
                window.localStorage.setItem('loggedEcardUserTime', JSON.stringify(new Date()))
            return { ...action.user, token: '' }
        case 'REMOVE_USER_INFO':
            window.localStorage.clear()
            return null
        default:
            return state
    }
}

// export const setTempUser = ({ uid, displayName }) => {
//     return {
//         type: 'SET_USER_INFO',
//         user: { uid, displayName }
//     }
// }

export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type: 'REMOVE_USER_INFO'
        })
        dispatch({
            type: ACTIONS.DISCONNECT
        })
    }
}

export default userReducer
