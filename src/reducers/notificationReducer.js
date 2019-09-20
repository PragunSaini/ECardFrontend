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

        setInterval(() => {
            dispatch({
                type: 'TIMEOUT'
            })
        }, timeout * 1000)
    }
}

export default notificationReducer
