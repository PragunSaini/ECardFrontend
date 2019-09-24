// Constants to identify dispatches
export const ACTIONS = Object.freeze({
    CONNECT: 'SOCKET_CONNECT',
    DISCONNECT: 'SOCKET_DSCONNECT',
    SUBSCRIBE: 'SOCKET_IO_SUBSCRIBE',
    UNSUBSCRIBE: 'SOCKET_IO_UNSUBSCRIBE',
    EMIT: 'SOCKET_IO_EMIT'
})

// to subscribe to global chat
export const subscribeGlobalChat = store => {
    store.dispatch({
        type: ACTIONS.SUBSCRIBE,
        event: 'global chat',
        handle: msg => {
            store.dispatch({
                type: 'ADD_GLOBAL_CHAT',
                chat: msg
            })
        }
    })
}

// to unsubscribe to global chat
export const unsubscribeGlobalChat = store => {
    store.dispatch({
        type: ACTIONS.UNSUBSCRIBE,
        event: 'global chat'
    })
    store.dispatch({
        type: 'CLEAR_CHAT_HISTORY'
    })
}
