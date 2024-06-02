## What is the useState hook?

The useState hook allows us to add state variables to your React components.

## Usage

The useState hook can be used as a function call where you can pass a single optional argument which is the initial value of the state variable. It returns an array of two items; the first item is the state variable which contains the value and the second item is the setter function which can be used to set the state variable to any other value.

```js
const [stateVariable, setterFunction] = useState(defaultValue);
```

## Things to note

- useState is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
- The set function only updates the state variable for the next render. If you read the state variable after calling the set function, you will still get the old value that was on the screen before your call.
- If the new value you provide is identical to the current state, React will skip re-rendering the component and its children. This is an optimization.
- React batches state updates. It updates the screen after all the event handlers have run and have called their set functions. This prevents multiple re-renders during a single event.

## Updating state based on the previous state

```js
const [age, setAge] = useState(42);

function handleClick() {
  setAge(age + 1);
  setAge(age + 1);
  setAge(age + 1);
}
```

However, after one click, age will only be 43 rather than 45! This is because calling the set function does not update the age state variable in the already running code. So each setAge(age + 1) call becomes setAge(43).

To solve this problem, you may pass an updater function to setAge instead of the next state:

```js
const [age, setAge] = useState(42);

function handleClick() {
  setAge((prevAge) => prevAge + 1);
  setAge((prevAge) => prevAge + 1);
  setAge((prevAge) => prevAge + 1);
}
```

React puts your updater functions in a queue. Then, during the next render, it will call them in the same order:

- a => a + 1 will receive 42 as the pending state and return 43 as the next state.
- a => a + 1 will receive 43 as the pending state and return 44 as the next state.
- a => a + 1 will receive 44 as the pending state and return 45 as the next state.

There are no other queued updates, so React will store 45 as the current state in the end.
