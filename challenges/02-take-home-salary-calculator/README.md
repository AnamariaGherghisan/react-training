# Take Home Salary Calculator

## User Story

As a user I should be able to determine my take home salary after income tax deduction for the year tax 2022/2023 and also my new income tax deduction for the year 2023/2024 taking in to account the national personal allowance of £12,500.

| Annual Salary      | 22/23 Tax % | 23/24 Tax % |
| ------------------ | ----------- | ----------- |
| £12,501 - £40,000  | 20%         | 18%         |
| £40,001 - £100,000 | 40%         | 35%         |
| above £100,000     | 45%         | 40%         |

**Example for 2022/2023**

> Annual income: £50,000

> Taxable income: £50,000 - £12,500 = £37,500

> Tax %: 40%

> Tax: 40% of £37,500 = £15,000

> Take home salary: £50,000 - £15,000 = **£35,000**

**Example for 2023/2024**

> Annual income: £50,000

> Taxable income: £50,000 - £12,500 = £37,500

> Tax %: 35%

> Tax: 35% of £37,500 = £13,125

> Take home salary: £50,000 - £13,125 = **£36,875**

## Acceptance Criteria

- User should be able to
  - **enter** their **gross salary**
  - **select** the **tax year** from a drop-down: 2021/2022 or 2022/2023
- When the user clicks on the "Calculate" button then the results are displayed in a card with the following information:
  - Annual Salary
  - Taxable Income
  - Tax Percentage
  - Tax Payable
  - Take Home Salary
- When the user clicks on the "Calculate" button without a valid gross salary then an **error message** must be **displayed** "Please complete the form!!"

## Technical Criteria

- Use function based components
- Use the react hook `useState`
- use what you learnt about **controlled components** in this workshop
- Ensure that the code follows semantic HTML structure
- Ensure that the code is well structured in to re-useable components
- Ensure the codebase follows the React files and folder structure

## How to get started?

Create a new react app using `create-react-app` and push the app to a new repository on GitLab.

You can use:

- [React Boostrap](https://react-bootstrap.github.io/) as your framework
- choose a colour palette from [coolors](https://coolors.co/)
- [Font Awesome icons](https://fontawesome.com/v5/docs/web/use-with/react) with React.

## Wireframes

**Use your imagination** when building your solution. You can use the following to help guide you how to structure your app.

### Initial Load

![initial load](./wireframe_initial_state.png)

### Valid Submission

![valid submission](./wireframe_valid_submission.png)

### Error

![error scenario](./wireframe_error.png)
