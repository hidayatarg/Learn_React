import React from 'react'
import { render } from 'react-testing-library'
import { BrowserRouter as Router } from 'react-router-dom'
// for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'
import './index.css'

function Test() {
    return (
        <p>Hi.</p>
    )
}


render(
    <Router>
        <Test />
    </Router>,
    document.getElementById('app')
)