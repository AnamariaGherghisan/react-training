## What are props?

Props are the information that you pass to a React component. They are similar to attributes in a HTML element.

## Things to note

1. In function-based components props are accepted as the function params

   ```js
   const Banner = (props) => {
     return <div>I am a banner.</div>;
   };
   ```

2. Props is always an object where each key is the prop name and the value in the object is the value of the individual prop.

   ```js
   {
      fullName: "Bob Smith",
      age: 30,
      isLoggedIn: true,
      onLogout: () => {
        console.log("Goodbye!")
      },
      friends: ["Alice Smith", "Dave Smith"],
      address: {
        houseNumber: 1,
        street: "2nd street",
        city: "London"
        postcode: "LON 123"
      }
   }
   ```

## How to prep for props

1. Identify the props your component are going to receive when you plan your work. For instance, my **Greeting** component is going to accept _firstName_ and _lastName_ as props so that I can use them to construct a greeting message.

2. Pass the props when you want to render a component

   ```js
   <Greeting firstName="Bob" lastName="Smith" />
   ```

3. Prep your function-based component to accept the props object so that you can retrieve the individual values from the props object

   ```js
   const Greeting = (props) => {
     return (
       <div>
         Welcome, {props.firstName} {props.lastName}
       </div>
     );
   };
   ```

4. When you pass a prop value in the component call that is not a string remember to wrap the value in JSX brackets

   ❌

   ```js
   <Greeting firstName="Bob" lastName="Smith" age=30 />
   ```

   ✅

   ```js
   <Greeting firstName="Bob" lastName="Smith" age={30} />
   ```

## What is prop drilling?

Prop drilling is the process of passing down data or state through multiple layers of a component hierarchy. By the way, it refers to the practice of passing data from a parent component to its children and then from the children to their own children and so on, until the data reaches the desired component that needs it.

```js
const Component3 = (props) => {
  return <div>Welcome, {props.name}!!</div>;
};

const Component2 = (props) => {
  return <Component3 name={props.name} />;
};

const Component1 = (props) => {
  return <Component2 name={props.name} />;
};

const App = () => {
  return <Component1 name="Bob Smith" />;
};
```
