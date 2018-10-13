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
    searchTerm: '',
    searchedBooks: []
  }

  async componentDidMount(){
    const response = await fetch('http://localhost:8082/api/books')
    const books = await response.json()
    this.setState({
      bookTitles: books,
      searchedBooks: books,
    })

  }

  refresh = () => {
    window.location.reload()
  }

  searchByTitle = (e) => {
    e.preventDefault()
    let filteredBooks = this.state.bookTitles.filter(book => {
      return book.title.toLowerCase().indexOf(this.state.searchTerm.toLocaleLowerCase()) !== -1
    })
    this.setState({searchedBooks: filteredBooks})
  
  }

  searchByAuthor = (e) => {
    e.preventDefault()
    let filteredAuthors = this.state.bookTitles.filter(book => {
      return book.author.toLowerCase().indexOf(this.state.searchTerm.toLocaleLowerCase()) !== -1
    })
    this.setState({searchedBooks: filteredAuthors})
  }

  searchInput = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  filterThoseAuthors = (e) => {
    e.preventDefault()
    let sorted = this.state.searchedBooks.sort((a,b) => {
      let authorA = a.author.toLowerCase(), authorB = b.author.toLowerCase()
      if(authorA < authorB){
        return -1
      }
      if(authorA > authorB){
        return 1
      }
      return 0
    })
    this.setState({searchedBooks: sorted})
  }


  filterThoseTitles = (e) => {
    e.preventDefault()
    let sortedTitle = this.state.searchedBooks.sort((a,b) => {
      let titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
      if(titleA < titleB){
        return -1
      }
      if(titleA > titleB){
        return 1
      }
      return 0
    })
    this.setState({searchedBooks: sortedTitle})
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
        searchInput={this.searchInput}
        searchTerm={this.state.searchTerm}
        searchByAuthor={this.searchByAuthor}
        refresh={this.refresh}
        searchByTitle={this.searchByTitle}
        />
        <div className="containerr">
          <div className="books">
            <BookTitles 
              booksToRender={this.state.searchedBooks} 
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
