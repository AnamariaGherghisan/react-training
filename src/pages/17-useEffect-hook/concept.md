## What is the useEffect hook?

The useEffect hook allows us to perform side effects in your React components and lets us synchronise with external components.

## Usage

Call the useEffect hook at the top of your function based component by passing in a callback function called as the setup function, along with an optional array of dependencies.

```js
useState(
  () => {
    // body of your setup function

    return () => {
      // only return a function if you want your hook to clean up on componentDidUnmount lifecycle event
    };
  },
  [
    /* dependencies go here */
  ]
);
```

## Things to note

- useEffect is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
- the setup function in the useEffect will run once after the initial render
- if you provide a list of dependencies, usually state variables, then the setup function will re-run whenever any dependency in the list changes, similar to the lifecycle event of shouldComponentUpdate
- it is good practice to return a clean up function in your hook when working with timers or database connections

## Example of a Timer

```js
const TimerExample = () => {
  const [title, setTitle] = useState("Hello");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitle("Goodbye");
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <h1>{title}</h1>;
};
```
