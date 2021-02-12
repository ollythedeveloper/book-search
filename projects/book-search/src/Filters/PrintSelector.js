import React, {Component} from 'react';

class PrintSelector extends Component {
    changePrint(value) {
        this.props.handlePrint(value)
        }

    render(){
        return (
            <div className="print_selector">
                <form>
                    <label htmlFor="print">Print Type:</label>
                    <select 
                        id="print" 
                        name="print"
                        onChange={e => this.changePrint(e.target.value)}>
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default PrintSelector;