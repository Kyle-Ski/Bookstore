This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A deployed version of this project can be found at this [link](http://g99-shoppingcart.surge.sh/)
# Welcome to the g[99] Bookstore App!
This React application was my first time implementing API calls into an app.
To access the API I used, fork and clone this [repo](https://github.com/Kyle-Ski/collective-api)
'''cd collective-api
npm install
node server.js'''
* instead of running '''node server.js''' run '''npm start'''
* the correct API endpoint you need to have running on a local host is: [http://localhost:8082/api/books](http://localhost:8082/api/books)
# The application was to meet the following user stories:

* As a customer, when I arrive to the homepage, I see a list of all of the books, a search bar on top,  and a checkout/cart area to the right.
* As a customer, I am able to filter the list of books by title or author.
* As a customer, I am able to add a book to the cart by clicking the "Add to cart"/"book" button.
* As a customer, when I add a book to the cart, I should see the total dollar amount be updated to reflect all of the books in the cart

# Stretch Goals accomplished:
* Filter by author and by title buttons both still work after a search has been performed
* Re-searching will re-render the page with the desired search
* Clicking on a shopping cart item will remove it from the cart

