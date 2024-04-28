# useState

## What is the useState hook?

useState is a React Hook that lets you add a state variable to your component. This hook returns an array of 2 items where the first item is the state value and the second variable is a function that can be used to set the value of the state variable.

## Syntax

```js
const [stateVariableName, stateSetterFunction] = useState(optionalDefaultValue);
```

## Basic Usage

If you app has a counter value which is tracked in state then we can use the useState hook as follows. When we click on a button the current value of the counter state is changed to an incremented value by 1.

```js
const Counter = () => {
  // use the useState hook to record the count variable in state with a default value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Counter Value: {count}</div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};
```

## Async Version

If you next state value depends on the previous state value then pass a function instead of a value to set the value in state. This ensures that when the current value of count is incremented to a new value depending on the previous value.

```js
const Counter = () => {
  // use the useState hook to record the count variable in state with a default value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Counter Value: {count}</div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};
```

If we don't execute it as a function then React batches all the set state actions in to one and updates the state only.

```js
const Counter = () => {
  // use the useState hook to record the count variable in state with a default value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Counter Value: {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};
```
