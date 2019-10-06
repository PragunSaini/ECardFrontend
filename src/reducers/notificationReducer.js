const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'NOTIFY':
            return action.message
        case 'TIMEOUT':
            return null
        default:
            return state
    }
}

// Notification action creater
export const notify = (msg, timeout) => {
    return dispatch => {
        dispatch({
            type: 'NOTIFY',
            message: msg
        })

        setTimeout(() => {
            dispatch({
                type: 'TIMEOUT'
            })
        }, timeout * 500)
    }
}

export default notificationReducer
