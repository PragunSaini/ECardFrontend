// Create a redux store
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import socketMiddleware from './middleware/socketMiddleware'

// Import the reducers
import eventHandlerReducer from './reducers/eventHandlerReducer'
import socketReducer from './reducers/socketReducer'
import userReducer from './reducers/userReducer'

// Create a combined reducer
const reducer = combineReducers({
    eventHandlers: eventHandlerReducer,
    socket: socketReducer,
    user: userReducer
})

// Create the store and apply relevant middlewares
const store = createStore(reducer, applyMiddleware(socketMiddleware, thunk))
store.subscribe(() => console.log(store.getState()))

export default store
