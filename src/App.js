import React, { Component } from 'react';
import './App.css';
import BookTitles from './BookTitles';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './Cart'

class App extends Component {

  state = {
    bookTitles: []
  }

  async componentDidMount(){
    const response = await fetch('http://localhost:8082/api/books')
    const books = await response.json()
    this.setState({bookTitles: books})
  }
  
  render() {


    return (
      <div className="App">
       
        <SearchBar />
        <div className="containerr">
        <div className="books">
          <BookTitles bookTitleAPI={this.state.bookTitles}/>
        </div>
        <div className="cart">
          <Cart />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
