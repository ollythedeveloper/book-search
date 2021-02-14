import React, { Component } from 'react';
import './App.css';
import Filters from './Filters/Filters';
import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      printType: 'All',
      filter: 'full',
      books: []
    }
  }

  setSearchTerm(searchTerm) {
    this.setState({
      searchTerm
    })

  }

  setPrint(printType) {
    this.setState({
      printType
    })
  }

  setFilter(filter) {
    this.setState({
      filter
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleSearch();
  }

  handleSearch() {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?';
    const options = {
      searchTerm: 'q=' + this.state.searchTerm,
      printType: '&printType=' + this.state.printType,
      filter: '&filter=' + this.state.filter,
      API: '&key=AIzaSyBBq4haNEFJ88y3Nyny6hU_0W5ar1LvAnk'
    }
    const fullUrl = baseUrl + options.searchTerm + options.printType + options.filter + options.API
    console.log(fullUrl)
    fetch(fullUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data, 
          error: null
        });
        console.log(this.state.books)
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }




  render() {
    return (
      <main className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          handleUpdate={searchTerm => this.setSearchTerm(searchTerm)}
          clickSubmit={e => this.handleSubmit(e)} />
        <Filters
          printType={this.state.printType}
          handlePrint={print => this.setPrint(print)}
          filter={this.state.filter}
          handleFilter={filter => this.setFilter(filter)} />
        <BookList
          books={this.state.books.items} />
      </main>
    );
  }
}

export default App;
