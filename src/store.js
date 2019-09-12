// Create a redux store
import { createStore, combineReducers, applyMiddleware } from 'redux'
import socketMiddleware from './middleware/socketMiddleware'

// Import the reducers
import testReducer from './reducers/testReducer'

// Create a combined reducer
const reducer = combineReducers({
    test: testReducer
})

// Create the store and apply relevant middlewares
const store = createStore(reducer, applyMiddleware(socketMiddleware))
store.subscribe(() => console.log(store.getState()))

export default store
