import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invarent'

export default function configureStore(initalState) {
    // add support for redux dev tools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
    return createStore(rootReducer, initalState, composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())))
}