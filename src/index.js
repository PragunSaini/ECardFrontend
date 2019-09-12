// Main entry point of app
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import store from './store'
import App from './App'

// Renders the components to webpage
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App store={store} />
        </Provider>,
        document.getElementById('root')
    )
}

// Render once at beginning and then at every store (state) change
render()
store.subscribe(render)
