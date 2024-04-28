## How do you submit a form using React?

There are 2 ways of handling form submissions in React:

- where you access the values directly from the document (uncontrolled)
- where you access the values from state variable (controlled)

### Using the document - Uncontrolled Components

```js
export const SearchForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const searchTerm = document.getElementById("searchTerm");

    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="searchTerm" name="searchTerm" />
      <button type="submit">Search</button>
    </form>
  );
};
```

In the above code snippet you can see that the event handler of `onSubmit` prevents the default form submission and uses the document methods to target the DOM node via ID and then retrieve the value of the input field. At this stage React has no knowledge of the actual value of the form field as it is being controlled by the document. If we want React to track the value of the form field as well we need to register the values in state.

### Using state - Controlled Components

```js
export const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(searchTerm);
  };

  const handleOnChange = (event) => {
    setSearchTerm(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="searchTerm"
        name="searchTerm"
        value={searchTerm}
        onChange={handleOnChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
```

In the above code snippet React registers a state variable `searchTerm` with an empty string as the initial value. On change of the input field the on change event handle fires which takes the form field value and updates the state value in React which triggers a re-render, at which point the new value of searchTerm becomes the value of the form field.

## Controlled vs Uncontrolled Components

In a controlled component in React, state handles all the form data. In an uncontrolled component, the HTML form element data is managed by only the DOM.

## Things to remember when working with forms

- prevent the default form submission as the first thing in your form submission handler function
- always use controlled components to work with form data
- where required valid your form fields in the submit handler before performing and submission actions such as network requests
- it is good practice to sanitise your form fields where applicable; for instance if a user types " Bob Smith " as the name then you can trim the string to remove any white spaces before and after the string.
