import React from 'react'
import { render } from 'react-testing-library'
import { BrowserRouter as Router } from 'react-router-dom'
// for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'
import './index.css'

// Redux
import configureStore from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux'

// intial state into store here if you are server rendering or initlizing redux store from local storage
const store = configureStore();
render(
    <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>,
    document.getElementById('app')
)