# useEffect

## What is the useEffect hook?

useEffect is a React Hook that lets you synchronize a component with an external system. The useEffect hook allows React to execute a function after the initial render of the component. For instance, if you want to request data from an API endpoint, the useEffect hook can be used to execute a function to retrieve data from an API and set the states in the React app which inturn triggers a new render.

## Syntax

```js
useEffect(
  () => {
    // this is the function to execute after the initial render or when any of the dependency values change
  },
  [
    // list of dependencies, if empty the function runs only once after the component successfully mounts
  ]
);
```

## Basic Usage

```js
const Products = () => {
  useEffect(() => {
    const fetchData = async () => {
      // async function that is responsible to get data from an API
      // set states when data comes back
      // set error state if API call fails
    };
  }, []);

  return <div>Your products go here when available</div>;
};
```
