// Create a redux store
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import socketMiddleware from './middleware/socketMiddleware'

// Import the reducers
import eventHandlerReducer from './reducers/eventHandlerReducer'
import socketReducer from './reducers/socketReducer'
import userReducer from './reducers/userReducer'
import loadingReducer from './reducers/loadingReducer'
import notificationReducer from './reducers/notificationReducer'
import chatReducer from './reducers/chatReducer'
import countReducer from './reducers/countReducer'
import gameReducer from './reducers/gameReducer'

// Create a combined reducer
const reducer = combineReducers({
    eventHandlers: eventHandlerReducer,
    socket: socketReducer,
    user: userReducer,
    notification: notificationReducer,
    chat: chatReducer,
    loading: loadingReducer,
    count: countReducer,
    game: gameReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Create the store and apply relevant middlewares
const store = createStore(reducer, composeEnhancers(applyMiddleware(socketMiddleware, thunk)))
store.subscribe(() => console.log(store.getState()))

export default store
