import React, { Component } from 'react';
import './App.css';
import Filters from './Filters/Filters'
import SearchBar from './SearchBar/SearchBar'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'flowers',
      printType: 'All',
      filter: 'full',
    }
  }

  updateSearchTerm(newSearch) {
    this.setState({
      searchTerm: newSearch
    })

  }

  setPrint(printType) {
    this.setState({
      printType
    })
  }

  setFilter(filter){
    this.setState({
      filter
    })
  }

  handleSubmit(e) {
    e.preventDefault();
  }


  componentDidMount(){
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
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  


  render() {
    return (
      <main className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          handleUpdate={newSearch => this.updateSearchTerm(newSearch)}
          clickSubmit={e => this.handleSubmit(e)} />
        <Filters
          printType={this.state.printType}
          handlePrint={print => this.setPrint(print)}
          filter={this.state.filter}
          handleFilter={filter => this.setFilter(filter)} />
        {/* { bookList } */}
      </main>
    );
  }
}

export default App;
