// Main entry point of app
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactNotification from 'react-notifications-component'

import './index.css'
import 'react-notifications-component/dist/theme.css'

import store from './store'
import App from './App'

// Renders the components to webpage
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <ReactNotification />
                <App store={store} />
            </Router>
        </Provider>,
        document.getElementById('root')
    )
}

// Render once at beginning and then at every store (state) change
render()
store.subscribe(render)
