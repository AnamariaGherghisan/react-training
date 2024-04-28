## What is a component?

A component is a basic building block in a React application. A component can be composed of other components. Essentially a React app is a single component, usually called the App component which is a composition of several nested components that make up a component tree.

## Types of components

- Class-based components
- Function-based components

## Example

A function based component is a regular function expressions that always return some JSX (HTML-like syntax).

```js
const Banner = () => {
  return <div>This is a banner.</div>;
};
```

## Things to consider about components

- Components are usually placed in a folder called **components**
- Components always begin with an uppercase character
- Components should be viewed as functional blocks that are connected together to complete the app
- Reusability of components is always encouraged
