# useEffect Challenge

## User Story

As a user I should be presented by the GitHub repositories for Booking.com

## Acceptance Criteria

- Must use [MUI](https://mui.com/material-ui/getting-started/) components to render the app

- Must render a title for the organisation "Booking.com"

- On load the application should request for organisation info from this [link](https://api.github.com/orgs/bookingcom) and render the following information

  - Name
  - Location
  - URL to GitHub
  - Number of public repos
  - Number of followers

- Must render a title for the repositories of the organisation "Booking.com Repositories"

- On load the application should request for a list of repos from this [link](https://api.github.com/orgs/bookingcom/repos) and the render the following information in the repository card

  - Name
  - Description
  - URL to GitHub
  - Number of open issues
  - Number of watchers

- If any of the API calls fail then render an error alert with the following info:

  - org fail should render the message "Failed to load organisation information, please try again."
  - repos fail should render the message "Failed to load the repositories, please try again."

- If the repos API call returns an empty list of repos then render the following message "No repositories available."

## Getting Started

- Open the folder useEffect challenge in the challenges folder.
- Complete the tests in the _index.test.js_ file
- Complete the code in the _index.js_ file
