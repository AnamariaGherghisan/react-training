## How to handle events in React?

React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

We generally pass these event handler functions down as props to the child components that consume these props and assign them to the corresponding DOM events.

```js
// Button.js

export const Button = ({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
};
```

```js
// App.js
import { Button } from "./Button";

const handleClick = () => {
  console.log("I was clicked!");
};

export const App = () => {
  return (
    <div>
      <Button onClick={handleClick} />
    </div>
  );
};
```

## Event Propagation

Event handlers will also catch events from any children your component might have. We say that an event “bubbles” or “propagates” up the tree: it starts with where the event happened, and then goes up the tree.

This <div> contains two buttons. Both the <div> and each button have their own onClick handlers. Which handlers do you think will fire when you click a button?

```js
export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <button onClick={() => alert("Playing!")}>Play Movie</button>
      <button
        onClick={(event) => {
          alert("Uploading!");
          event.stopPropagation();
        }}
      >
        Upload Image
      </button>
    </div>
  );
}
```
