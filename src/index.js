import React from 'react'
import { Render } from 'react-dom'
import { render } from 'react-testing-library'

function Test() {
    return (
        <p>Hi.</p>
    )
}


render(<Test />, document.getElementById('app'))