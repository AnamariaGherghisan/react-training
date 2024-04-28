## User Story

As a user I want to view a list of GitHub directories along with some useful information about each directory.

## Acceptance Criteria

- Application should contain a title `"GitHub Directory"` and a sub-title of `"A list of all your GitHub repositories"`.
- Application should render a message `"You have no GitHub repositories."` for an empty list of repositories
- The `GitHubDirectory` component should render a list of repositories where each repository contains the following information:
  - name of the repository
  - link to the repository on GitHub
  - owner's username
  - number of stars (default 0)
  - number of watchers (default 0)
  - description (optional)
  - topics (optional)
- Must provide some basic styling and layout
- Must be mobile responsive

## Mock Data

The mock data for the repos can be found in a file called `mockRepos.json`. Use this mock data to render multiple GitHub repositories.

## Getting Started

- Add code in the index.js file within the challenge folder
- Add tests in the index.test.js file within the challenge folder
- Do not change the name of the component as the playground is looking for a component with the mentioned name
