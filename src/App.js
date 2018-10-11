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
    isFilterByAuthor: true,
  }

  async componentDidMount(){
    const response = await fetch('http://localhost:8082/api/books')
    const books = await response.json()
    this.setState({
      bookTitles: books
    })

  }


  filterThoseBooks = () => {

    let sorted = this.state.bookTitles.sort((a,b) => {
      let authorA = a.author.toLowerCase(), authorB = b.author.toLowerCase()
      if(authorA < authorB){
        return -1
      }
      if(authorA > authorB){
        return 1
      }
      return 0
    })
    this.setState({bookTitles: sorted})
  }

  filterByAuthor = (e) => {
    e.preventDefault()
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
        <SearchBar 
        filterByAuthor={this.filterByAuthor}
        filterThoseBooks={this.filterThoseBooks}
        />
        <div className="containerr">
          <div className="books">
            <BookTitles 
              bookTitleAPI={this.state.bookTitles} 
              addToCart={this.addToCart}
              isFilterByAuthor={this.state.isFilterByAuthor}
              sortedBookTitles={this.state.sortedBookTitles}
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
