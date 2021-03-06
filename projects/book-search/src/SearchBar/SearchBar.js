import React, { Component } from 'react';


class SearchBar extends Component {

    render() {
        return (
            <div className="searchbar">
                <h1>Google Book Search</h1>
                <form className="addsearchterm__form" onSubmit={e => this.props.clickSubmit(e)}>
                    <label htmlFor="search">Search:</label>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={this.props.searchTerm}
                        onChange={e => this.props.handleUpdate(e.target.value)} />
                    <button 
                        type="submit">Search</button>

                </form>
            </div>
        );
    }
}

export default SearchBar;