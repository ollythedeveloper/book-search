import React, { Component } from 'react';

class BookTypeSelector extends Component {
    render() {
        return (
            <div className="booktype_selector">
                <form>
                    <label htmlFor="booktype">Book Type:</label>
                    <select
                        id="booktype"
                        name="booktype">
                        <option value="full">Full</option>
                        <option value="partial">Partial</option>
                        <option value="free-ebooks">Free Ebooks</option>
                        <option value="paid-ebooks">Paid Ebboks</option>
                        <option value="ebooks">Ebooks</option>
                    </select>
                </form>

            </div>
        );
    }
}

export default BookTypeSelector;