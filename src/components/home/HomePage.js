import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => (
    <div className="jumbotron">
        <h1>Course Adminstration</h1>
        <p>React and Redux Learning</p>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
)
