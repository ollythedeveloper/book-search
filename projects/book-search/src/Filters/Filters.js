import React, { Component } from 'react';
import BookTypeSelector from './BookTypeSelector';
import PrintSelector from './PrintSelector';

class Filters extends Component {
    render(){
        return(
            <div className="filters">
                <PrintSelector
                    printType={this.props.printType}
                    handlePrint={this.props.handlePrint} />
                <BookTypeSelector 
                    filter={this.props.filter}
                    handleFilter={this.props.handleFilter}/>
            </div>
        )
    }
}

export default Filters;