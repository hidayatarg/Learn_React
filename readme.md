## Ways to Create React Component
-   createClass
-   ES class
-   Function
-   Arrow function

## createClass
```javascript
var helloWorld = React.createClass ({
    render: function(){
        return (
            <h1>Hello</h1>
        );
    }
});
```

## ES Class 
working with modern Javascript. which is most popular.
```javascript
class HelloWorld extends React.Component {
    
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1>Hello</h1>
        );
    }
}
```

## Function 
another way to declare a function component 
```javascript
function HelloWorld(props){
    return (
            <h1>Hello</h1>
    );
}
```
You can also use `arrow function` style 
```javascript
const HelloWorld = (props) => <h1>HelloWorld</h1>
```
the upper style is used for single line

if you have multiple lines cover the right side with paranthesis.
```javascript
const HelloWorld = (props) => (<h1>HelloWorld</h1>)
```
`var` keyworkd should be avoided use `const`.

## Recommend to use `Functional Component`
- Easy to Understan
- Avoid this keyword
- Avoid class easy to keep away binding
- Less Tranpiled Code for better performance
- Enhanced code completion
- Easy to Test
- Increase performance

## Container and Presentation Components
Presentation Component contains all markup. Recive data and actions via props. Doesn't know about redux. Often no state

Container Component contains => "Backend" for the frontend.

Container Component are Concerned with passing data to child component and actions. They are typically statefull. using the redux connect function at the bottom of the file. 

### Note
Here the small paranthesis is used because of the single expression.

We export this component directly but you can also write
`export default AboutPage` at the end.
```javascript
import React from 'react'
// here the small paranthesis is used because of the single expression
export const AboutPage = () => (
    <div>
        <h2>About</h2>
        <p>
            This app uses react and redux
        </p>
    </div>
)
```

## Switch
Switch in route make sure only one route can be active in a time.

## Why Redux
React context => Global data to the lowlevel components. Toplevel component behave as context

Redux Store => store data when ever component action dispacted the redux store is updated and any component can get this data. 

# Redux 3 Principles
Store cannot be changed directly only way is to emit action. 

Every action like submit form will emit an action. for example user may click the button to submit Contact Form that will hit the SUBMIT_CONTACT_FORM action. 

State changes and handled by pure functions called reducers. Reducers update the state.
Reducer is a function accept the current state in an action, and it returns a new state. 
Each action/Operation is handled by one or more reducers which update the single store. reducer recive current state and action, it contains if switch to check the action type and it return new state. after the new state is returned by reducer the store is update. React re render the component that utlizese the data.

React connect to the store via library react-redux.


### Action
must have a type property
```javascript
rateCourse(rating) {
    return { type: RATE_COURSE, rating: rating}
}

```
You can pass thing that are seralizeable to JSON. You shouldnot pass functions. rateCourse is an action creator. Used to create action

### Store
creating store 

```javascript
let store = createStore(reducer);
```
redux obey the Single Responsibility Pricipal  Store store the data and Reducer concern with change of states.
#### Store can
- store.dispatch(action)
- store.subscribe(action)
- store.getState()
- replaceReducer(nextReducer)

`The only way to change a store by dispatching an action.`

`Store cannot be changed directly.`

`Actions are handled by reducers.`

## Immutability
in place of changing state object, you need to return a new object that represent application new state.

Simply when you change {Number, string, boolean, undefined, null} these types a new copy is created.

Redux depened on immutable state to improve performance.

As example in Js 
- Object.assign
- {...myObj} - Spread Operator
- .map (Immutable friendly array methods)


Deep cloning is expensive 

## Array to avoid that mutate
Push, Pop, Reverse => Must clone array first

Map, Filter, Reduce, Concat, Spread => Prefer to Use 



