import React, { Component } from 'react';
import './App.css';
import BookTitles from './BookTitles';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <header className="App-header">
        hi
        </header>
        <SearchBar />
        <BookTitles bookTitleAPI={this.state.bookTitles}/>
      </div>
    );
  }
}

export default App;
