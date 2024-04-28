# Custom Hook Challenge

## User Story

As a user I should be able to see a random cat fact and I should be able to get another fact when I click reload button

## Acceptance Criteria

- Must use [MUI](https://mui.com/material-ui/getting-started/) components to render the app

- On load the application should request for a cat fact from [link](https://catfact.ninja/fact) and render the fact with a reload button

- While the fact is loading show the text "Loading" instead of the fact

- The reload button should fetch another fact

- If the API call fails show the message "Failed to load fact" and still show the reload button

## Notes

The CatFact component in the customHook challenges folder should only handle the rendering logic, create a custom hook to fetch the cat fact. The hook should return the following states

- isFetching: boolean, true if fetching is not yet complete and false otherwise
- isError: boolean, true if there was an error while fetching the data and false otherwise (we don't need to surface the actual error for this)
- data: string, the data (fact) returned from api
- refetch: a function, calling this should refetch the data

## Getting Started

- Open the folder customHook challenge in the challenges folder.
- Complete the tests in the _index.test.js_ file
- Complete the code in the _index.js_ file
