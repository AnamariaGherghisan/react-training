## What is the useReducer hook?

The useReducer hook in React is a useful tool that allows you to add a reducer in a functional component. The reducer behaves in a similar manner to Redux, thereby allowing us to manage complex states in a React application.

## What is a reducer?

A reducer is a plain JavaScript function that accepts a current state and returns a new state. The name reducer is used because it reduced the current state to a new state thereby creating immutable state objects.

## Usage

```js
const reducer = (state, action) => {
  return state;
};

const [state, dispatch] = useReducer(reducer, {});
```

## Reducer Concepts

### What are actions?

Actions are objects that are passed in to a reducer function that contain the type of action performed and an optional payload which contains any values the reducer might need to perform an action.

```js
const addAction = {
  type: "ADD",
  payload: "Bob Smith",
};
```

In the above example we have an action object which is going to perform some sort of `ADD` operation in the reducer and uses the data `"Bob Smith"` to perform the action.

### What is dispatch?

Dispatch is a function provided by the `useReducer` hook that allows us to dispatch certain actions that reduce the state from one object to another.

### What is state?

State is the object that contains the state variables. The current state object is always passed in to the reducer function and the new returned state object from the reducer replaces the state thereby triggering a state change.
