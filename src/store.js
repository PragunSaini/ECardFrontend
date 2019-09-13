// Create a redux store
import { createStore, combineReducers, applyMiddleware } from 'redux'
import socketMiddleware from './middleware/socketMiddleware'

// Import the reducers
import testReducer from './reducers/testReducer'
import socketReducer from './reducers/socketReducer'

// Create a combined reducer
const reducer = combineReducers({
    test: testReducer,
    socket: socketReducer
})

// Create the store and apply relevant middlewares
const store = createStore(reducer, applyMiddleware(socketMiddleware))
store.subscribe(() => console.log(store.getState()))

export default store
