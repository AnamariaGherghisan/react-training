## User Story

As a user I want to be increase a counter value, decrease a counter value up to 0, and reset a counter value to 0.

## Acceptance Criteria

- Must use useState hook
- Must contain a banner on the top of the page with a title of "React Counter" and a sub-title of "Please use the buttons to interact with your counter".
- The counter value must be displayed as `Counter: 0` on initial load in the counter section.
- The counter value must increase the current count value by 1 when the user clicks on the "Increment" button.
- The counter value must decrease the current count value by 1 when the user clicks on the "Decrement" button.
- The counter value must reset the current count value to 0 when the user clicks on the "Reset" button.
- The counter value must not decrement the current value below `0` (no negative values for the counter).
