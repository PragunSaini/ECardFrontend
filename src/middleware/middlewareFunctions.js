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
        event: 'global chat broadcast',
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
        event: 'global chat broadcast'
    })
    store.dispatch({
        type: 'CLEAR_CHAT_HISTORY'
    })
}

// Update connected count when someone logs in or out
export const updateUserCount = store => {
    store.dispatch({
        type: ACTIONS.SUBSCRIBE,
        event: 'connected count',
        handle: count => {
            store.dispatch({
                type: 'UPDATE_USER_COUNT',
                count
            })
        }
    })
}

export const subscribeRoomChat = store => {
    store.dispatch({
        type: ACTIONS.SUBSCRIBE,
        event: 'room chat msg gotten',
        handle: msg => {
            store.dispatch({
                type: 'ADD_ROOM_CHAT',
                chat: msg
            })
        }
    })
}

export const unsubscribeRoomChat = store => {
    store.dispatch({
        type: ACTIONS.UNSUBSCRIBE,
        event: 'room chat msg gotten'
    })
    store.dispatch({
        type: 'CLEAR_ROOM_CHAT_HISTORY'
    })
}

// Subscribe game room created event
export const gameRoomCreated = store => {
    store.dispatch({
        type: ACTIONS.SUBSCRIBE,
        event: 'game room created',
        handle: room => {
            store.dispatch({
                type: 'GAME_ROOM_CREATED',
                room
            })
            subscribeRoomChat(store)
        }
    })
}

// subscribe to game room joined
export const gameRoomJoined = store => {
    store.dispatch({
        type: ACTIONS.SUBSCRIBE,
        event: 'game room joined',
        handle: room => {
            store.dispatch({
                type: 'GAME_ROOM_JOINED',
                room
            })
            if (!store.getState().eventHandlers['room chat msg gotten']) {
                subscribeRoomChat(store)
            }
        }
    })
}

// Subscribe to room joining errors
export const roomJoinError = store => {
    store.dispatch({
        type: ACTIONS.SUBSCRIBE,
        event: 'no such room',
        handle: () => {
            store.dispatch({
                type: 'NOTIFY',
                message: 'No room with this ID exists'
            })

            setTimeout(() => {
                store.dispatch({
                    type: 'TIMEOUT'
                })
            }, 2 * 500)
        }
    })

    store.dispatch({
        type: ACTIONS.SUBSCRIBE,
        event: 'room full',
        handle: () => {
            store.dispatch({
                type: 'NOTIFY',
                message: 'The room you are trying to join is already full'
            })

            setTimeout(() => {
                store.dispatch({
                    type: 'TIMEOUT'
                })
            }, 2 * 500)
        }
    })

    store.dispatch({
        type: ACTIONS.SUBSCRIBE,
        event: 'cannot join own room',
        handle: () => {
            store.dispatch({
                type: 'NOTIFY',
                message: 'You have already joined your own room'
            })

            setTimeout(() => {
                store.dispatch({
                    type: 'TIMEOUT'
                })
            }, 2 * 500)
        }
    })
}

export const gameInitAndStart = store => {
    store.dispatch({
        type: ACTIONS.SUBSCRIBE,
        event: 'game init and start',
        handle: room => {
            store.dispatch({
                type: 'GAME_INIT',
                room,
                uid: store.getState().user.uid
            })
        }
    })
}

export const listenForNextTurn = store => {
    store.dispatch({
        type: ACTIONS.SUBSCRIBE,
        event: 'next turn',
        handle: room => {
            store.dispatch({
                type: 'GAME_NEXT_TURN',
                room,
                uid: store.getState().user.uid
            })
        }
    })
}

export const listenForGameOver = store => {
    store.dispatch({
        type: ACTIONS.SUBSCRIBE,
        event: 'game over',
        handle: room => {
            store.dispatch({
                type: 'GAME_OVER',
                room,
                uid: store.getState().user.uid
            })
        }
    })
}
