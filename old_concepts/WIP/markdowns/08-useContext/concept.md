# useContext

## What is the useContext hook?

useContext is a React Hook that lets you read and subscribe to context from your component. If you ever want to share state between multiple components encapsulated by a parent component then the parent component is wrapped by a Provider component which is connected to a context where global state that can be shared by all components resides. The use of this hook prevents prop-drilling where state from higher components are passed down several levels to child components as props.

## Syntax

```js
const AppContext = React.createContext();

// this function call accepts the context you want to access and returns the value stored in the context to be used

const value = useContext(AppContext);
```

## Basic Usage

```js
const AppContext = React.createContext();

const AppProvider = () => {
  const [counter, setCounter] = useState(0);

  // create the value object to determine what you want to add in the context so that it can be retrieved by other child components
  const value = { counter, setCounter };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;

  // create a custom hook to access the context
  const useApp = () => useContext(AppContext);
};
```

## Usage of custom hook in components

```js
const Counter = () => {
  // access the values stored in the context via the custom hook
  const { counter } = useApp();

  return <div>Counter: {counter}</div>;
};
```
