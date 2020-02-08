// Root Reducer
import { combineReducers } from 'redux'
import courses from './courseReducer'

const rootReducer = combineReducers({
    // each property set to corresponding reducer
    // since it is object we can omit the right hand side
    courses: courses
})

export default rootReducer