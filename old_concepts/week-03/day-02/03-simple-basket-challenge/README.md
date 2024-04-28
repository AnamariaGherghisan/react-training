# Simple Basket Challenge

## User Story

As a user I should be able to add and remove items from my shopping basket.

## Acceptance Criteria

- User is presented with a Banner on the top of the page with a title of "Shopping Basket" and a sub-title of "Manage your shopping basket"

- User is presented with a list of shopping items on load where each product contains the following keys:

```javascript
const sampleProduct = {
  id: "bcfe82fc-b32b-4cf8-beb4-708be6d329f8", // use uuid library
  label: "Football", // use fakerJS commerce product
  description: "The Football Is Good For Training And Recreati...", // use fakerJS commerce productDescription
  price: "$114", // use fakerJS commerce price
};
```

[fakerJS](https://fakerjs.dev/api/commerce.html)

[uuid](https://www.npmjs.com/package/uuid?activeTab=readme)

- Each product card will contain an "Add to cart" button which when clicked on will add the item to the shopping basket

- The shopping basket will list all the items added to the basket with the following data: label, item price, quantity and total price of all items

- If multiple items exist in the basket then increment the quantity and item total price

- Each shopping list item should also contain an add and remove item button such that when the user clicks on the add or remove button the quantity and item total prices are changed

- If there is only one item left and the use clicks on remove item then the item is removed from the shopping basket

- The shopping basket will also display the grand total which is the aggregation of all items in the basket
