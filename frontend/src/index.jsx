import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import App from './components/App.jsx';
import store from './store'


const app  = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(app, document.getElementById('app'))