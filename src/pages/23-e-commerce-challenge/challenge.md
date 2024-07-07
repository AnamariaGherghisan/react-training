## User Story

As a user I should be able to checkout books via the e-commerce platform.

## Acceptance Criteria

- As a user I should be able to search for books using the search form and entering a title of the book
- As a user when I enter a valid search term then I should be presented with a list of books
- As a user when I click on the add to basket on the book card then the item should be added to my basket and the items in the basket count should be displayed
- As a user when I click on the basket icon then I should be presented with the books in the basket
- The basket should also display the total price of the basket items
- As a user when I click on remove item from the basket then the item is removed from the basket and the total price is recalculated
- As a user when I click on the add to wishlist button then the item is added to local storage
- As a user when I click on the wishlist icon then I am presented with items in my wishlist
- When I click remove from wishlist then the item should be removed from wishlist
- When I add a duplicate item to wishlist it should not be added to the wishlist
- When I view my wishlist I should also be presented with a button "Clear wishlist" which will remove all items from my wishlist.
- Each book card should contain the following information:
  - title
  - authors
  - page count
  - average rating
  - thumbnail image
  - retail price
  - preview link

## API

GET request to `https://www.googleapis.com/books/v1/volumes?q=harry+potter&filter=paid-ebooks`

## DOCS

Link to the google books documentation [here](https://developers.google.com/books/docs/v1/using#PerformingSearch)

## Wireframes

**Use your imagination** when building your solution keeping in mind mobile responsiveness and good user experience.
