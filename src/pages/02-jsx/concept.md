## What is JSX?

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

## Rules of JSX

- **Return a single root element**

  ❌

  ```html
  <h1>Some Title</h1>
  <p>Some paragraph...</p>

  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

  ✅

  ```html
  <div>
    <h1>Some Title</h1>
    <p>Some paragraph...</p>

    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
  ```

  **Note**: You can also use a Fragment as this is an empty tag that allows you group things without leaving any trace in the browser HTML tree.

  ```html
  <>
  <h1>Some Title</h1>
  <p>Some paragraph...</p>

  <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
  </ul>
  </>
  ```

- **Close all the tags**

  ❌

  ```
  <img src="...">
  ```

  ✅

  ```html
  <img src="..." />
  ```

- **Use the JSX syntax when you want to inject JavaScript**

  ```
  <div>{fullName}</div>
  ```

- **Only allowed to execute single JavaScript expressions**

  ```
  <div>{fullName}</div>
  ```

  ```
  <div>{2+5}</div>
  ```

  ```
  <div>{createFullName("Bob", "Smith")}</div>
  ```
