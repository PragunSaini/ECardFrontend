const loginReducer = (state = true, action) => {
    switch (action.type) {
        case 'LOADING':
            return true
        case 'FINISHED_LOADING':
            return false
        default:
            return state
    }
}

export const startLoading = () => {
    return {
        type: 'LOADING'
    }
}

export const finishLoading = () => {
    return {
        type: 'FINISHED_LOADING'
    }
}

export default loginReducer
