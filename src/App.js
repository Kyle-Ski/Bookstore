import React, { Component } from 'react';
import './App.css';
import BookTitles from './BookTitles';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './Cart'

class App extends Component {

  state = {
    bookTitles: [],
    cart: [],
    isFilterByAuthor: false
  }

  async componentDidMount(){
    const response = await fetch('http://localhost:8082/api/books')
    const books = await response.json()
    this.setState({bookTitles: books})
  }

  filterByAuthor = (e) => {
    e.preventDefault()
    console.log('filter by author')
    this.state.isFilterByAuthor ? this.setState({isFilterByAuthor: false}) : this.setState({isFilterByAuthor: true})
  }

  addToCart = (e) => {
    e.preventDefault()
    let bookToAdd = this.state.bookTitles.filter(book => book.title === e.target.value)
    this.setState({cart: this.state.cart.concat(bookToAdd)})

  }
  getTotal = () => {
    return this.state.cart.length * 5
  }
  
  render() {

    return (
      <div className="App">
        <SearchBar filterByAuthor={this.filterByAuthor}/>
        <div className="containerr">
          <div className="books">
            <BookTitles 
              bookTitleAPI={this.state.bookTitles} 
              addToCart={this.addToCart}
            />
          </div>
          <div className="cart">
            <Cart cartItems={this.state.cart} getTotal={this.getTotal}/>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
