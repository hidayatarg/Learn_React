import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import PropTypes from 'prop-types'

class CoursesPage extends Component {
     state = {
        course: {
            title: ''
        }
    }
    // Update to ES6 or else bind it
    handleChange = (event) => {
        // create copy of existing state
        // update the title with event 
        // you edit any object in the data new state
        const course = {...this.state.course, title: event.target.value}
        this.setState({
            course: course
        })
    }

    handleSubmit = (event) => {
        // it will stop reload the App
        event.preventDefault();
        // create course action
        this.props.dispatch(courseActions.createCourse(this.state.course))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input 
                    type="text" 
                    onChange={this.handleChange} 
                    value={this.state.course.title} 
                />
                <input 
                    type="submit" 
                    value="Save" 
                />
                {this.props.courses.map(course => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
        )
    }
}
CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
}



// determines what part of the state we expose to component
// this func determines what state is passed to our component via props
function mapStateToProps(state) {
    // now it has only an array of course which we will return out of state here
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(CoursesPage)
