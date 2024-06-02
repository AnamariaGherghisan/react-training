## What is state?

State in React is an object which React manages to store information about the component. Unlike props React state can be manipulated which triggers the component to re-render.

## React State Lifecycle

- In a class-based component the initial state is always defined in the constructor function of the class.
- The state value can be used to drive the first render of the component.
- Event handler usually change the state value from one value to another using the built-in `setState` method inherited from the parent Component class from React.
- A change in the state value triggers an underlying component lifecycle method which determines if the React component should trigger the render method at which point the new state value is available for the render.

### Component Lifecycle Order

- `constructor` is the first function which is executed
- `render` method is then responsible for mounting the component in the DOM (initial render)
- `componentDidMount` method is then invoked after the initial render
- if the state value is changed then the `shouldComponentUpdate` lifecycle method is invoked and if this function returns true then the render method is executed after which another lifecycle method called `componentDidUpdate` is invoked.
