# GitHub Explorer Challenge

## User Story

As a user I should be able to search for information using the GitHub API.

## Acceptance Criteria

- User is presented with a Banner on the top of the page with a title of "GitHub Explorer" and a sub-title of "Search for public repositories on GitHub"

- User is presented with a form that has 2 buttons: `Search by organisation` and `Search by username`

- User is present with a text input to enter an organisation name or a username depending on which button they have clicked on

- When the user clicks on the `Submit` button the user is presented with a list of repositories

- When the user submits an empty form the user is presented with an error message "Please enter valid organisation" if the user has selected `Search by organisation`

- When the user submits an empty form the user is presented with an error message "Please enter valid username" if the user has selected `Search by username`

- Use the link `https://api.github.com/orgs/{organisationName}/repos` for a search by organisation name

- Use the link `https://api.github.com/users/{username}/repos` for a search by username name

- If user selects `Search by organisation` then the placeholder label should read "Enter organisation"

- If user selects `Search by username` then the placeholder label should read "Enter username"

- Repositories should be presented with repository cards keeping in mind responsive layout

- Each repository must be presented as a card with the following information: Repo name, Repo url, Description, User avatar

- If the number of repositories returned from the API is 0 then the user should be presented with an alert `"No repositories found."`
