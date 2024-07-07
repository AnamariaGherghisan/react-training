## What is the useContext hook?

The `useContext` hook in React is a powerful tool that allows you to access and utilize the context API in a functional component. The context API is used for passing data through the component tree without having to pass props down manually at every level. This is especially useful for global data that many components need to access, such as themes, user information, or settings.

## Usage

1. Create the context using the `createContext` function from React. This will create a Context object that comes with a Provider and a Consumer.

   ```js
   import { createContext } from "react";

   const AppContext = createContext();
   ```

2. Wrap your component tree (or part of it) with the Provider component of the context created above. Allow this component to accept the props and destructure the `children` and wrap it between the Provider component.

   ```js
   import { createContext } from "react";

   const AppContext = createContext();

   export const AppProvider = ({ children }) => {
     return <AppContext.Provider>{children}</AppContext.Provider>;
   };
   ```

3. Pass a `value` prop to the `Provider` component which will contain any global data that you want to expose to all the child components within the Provider.

   ```js
   import { createContext } from "react";

   const AppContext = createContext();

   export const AppProvider = ({ children }) => {
     const [isActive, setIsInactive] = useState(false);

     const value = { isActive, setIsInactive };

     return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
   };
   ```
