## What is a class based component?

A class based component uses a JavaScript class to render a component. The class based component is a sub-class which extends the parent Component class from React. Like any class in JavaScript the class based component contains a constructor function which accepts the props. This is also where we would initialise state if you component is a stateful component. Every class based component should override the render method in the parent Component class to return the JSX which you intend to render from the component. Most importantly class-based components have access to the underlying component life-cycle events.

## Example

This is an example of a simple presentational component that uses JavaScript classes to render the component.

```js
class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>This is a banner.</div>;
  }
}
```

## Things to consider about class-based components

- Should follow the same rules of JavaScript classes
- Components always begin with an uppercase character
- Class should override the render method
- Usually not the preferred way to render components and should us function based components to render components and if you need access to the component lifecycle events then you should use the React hook APIs
