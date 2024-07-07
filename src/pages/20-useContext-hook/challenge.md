## User Story

As a user I want display account information for a logged in user.

## Acceptance Criteria

- Must use useContext hook
- Must contain an AppBar on the top of the page with a `Login` button
- Must contain a Banner component with a title "Account Manager" and subtitle "My personal account manager"
- Click on the login button should render a login form in a modal
- On successful login with the credentials "alice.smith@email.com" and "Password123!" the AppBar should display a `Logout` button
- On successful login you must display a user card component with the users details
  ```json
  {
    "firstName": "Alice",
    "lastName": "Smith",
    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt tellus nisl, nec euismod urna posuere sit amet. Maecenas hendrerit, odio a sollicitudin semper, felis nibh semper purus, a laoreet purus mauris nec nibh. Nam eget lobortis tortor. Fusce non massa quis lacus feugiat sollicitudin. Aliquam et pharetra mi. Phasellus vitae lacus pulvinar, feugiat elit at, faucibus ex. Sed ut sagittis elit, molestie aliquet libero. Sed sed diam ante. Pellentesque lacinia quam diam, id luctus metus elementum at.",
    "profileImageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  ```
- On successful login you must display an error message "Failed to login, please try again." for incorrect credentials or any missing form values
- On click of the `Logout` button the AppBar should render the `Login` button and the App should not display the user card component and the welcome banner should be rendered
