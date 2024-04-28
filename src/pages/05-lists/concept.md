## How to render many from a list?

Internally React is configured to accept a list of children components that belong to a single top-level parent. So we can pass an array of components to be rendered within a top-level component.

```js
const Movies = () => {
  return <div>{[<MovieCard />, <MovieCard />]}</div>;
};
```

## How to programmatically render many from a list?

This is more common in React application where we can use the _map_ method on the Array to map over and return a component. Since the _map_ method returns a new Array the new array becomes the list of components that React renders within the top-level parent.

```js
const movies = [
  { id: "1", title: "Movie 1", year: "2020" },
  { id: "2", title: "Movie 2", year: "2021" },
  { id: "3", title: "Movie 3", year: "2022" },
];

const Movies = () => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};
```

**NOTE**: Remember to pass in a unique _key_ value as a prop to the component you return from the map function. The key value helps React internally identify the items as unique items during re-renders.

## How to conditionally render something in a component?

This is usually driven by prop or state values where for a given condition the component renders a part of the component or not.

```js
const Movie = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.year}</h2>
      {props.isNew && <h6>New release</h6>}
      {props.isNew ? <h6>New release</h6> : <h6>Old release</h6>}
    </div>
  );
};
```

## How to conditionally render a component?

This is usually driven by prop or state values where for a given condition the component renders a part of the component or not.

```js
const Movie = (props) => {
  if (props.title) {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.year}</h2>
        {props.isNew && <h6>New release</h6>}
        {props.isNew ? <h6>New release</h6> : <h6>Old release</h6>}
      </div>
    );
  }

  return <div>No movie to render!!</div>;
};
```

## What is the key prop when rendering a list of components?

Keys tell React which array item each component corresponds to, so that it can match them up later. A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.

- Keys must be unique among siblings
- Keys must not change
