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
    searchTerm: ''
  }

  async componentDidMount(){
    const response = await fetch('http://localhost:8082/api/books')
    const books = await response.json()
    this.setState({
      bookTitles: books
    })

  }

  refresh = () => {
    window.location.reload()
  }

  searchButton = (e) => {
    e.preventDefault()
    let search = this.state.bookTitles.filter(book => book.title === this.state.searchTerm)
    // let match = search.title.search(this.state.searchTerm)
    this.setState({bookTitles: search})
  }

  searchByTitle = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  filterThoseAuthors = (e) => {
    e.preventDefault()
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


  filterThoseTitles = (e) => {
    e.preventDefault()
    let sortedTitle = this.state.bookTitles.sort((a,b) => {
      let titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
      if(titleA < titleB){
        return -1
      }
      if(titleA > titleB){
        return 1
      }
      return 0
    })
    this.setState({bookTitles: sortedTitle})
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
        filterThoseTitles={this.filterThoseTitles}
        filterThoseAuthors={this.filterThoseAuthors}
        searchByTitle={this.searchByTitle}
        searchTerm={this.state.searchTerm}
        searchButton={this.searchButton}
        refresh={this.refresh}
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
