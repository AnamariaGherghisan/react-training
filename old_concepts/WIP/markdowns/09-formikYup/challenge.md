# Formik Yup Challenge

## User Story

As a user I should be able to submit a form.

## Acceptance Criteria

- Use formik and yup
- Component should render a title "Registration Form"
- Component should have the following form fields:
  - Title as a dropdown as required (error message "Please select a title.")
  - First Name as required (error message "Please enter a first name.")
  - Last Name as required (error message "Please enter a last name.")
  - Age as required (error message "Please enter an age.") with min 18 ("Please enter an age between 18 to 100") and max 100 ("Please enter an age between 18 to 100")
  - Email Address as required (error message "Please enter an email address") as email ("Please enter a valid email address")
  - Subscribe as an optional checkbox
- On submit of the form the values of the form is rendered in a banner displaying the form values
- The banner is not displayed if there is a form error and the corresponding form element's error is displayed
