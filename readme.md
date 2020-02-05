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

