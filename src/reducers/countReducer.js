const countReducer = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_USER_COUNT':
            return action.count
        default:
            return state
    }
}

export default countReducer
