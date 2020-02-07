import React, { Component } from 'react'

class CoursesPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            course: {
                title: ''
            }
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

    render() {
        return (
            <form>
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
            </form>
        )
    }
}

export default CoursesPage
