import React from 'react';

export default function Book(props) {
    return(
        <div className="book">
            <div className="book_title">
                <h2>{props.volumeInfo.title}</h2>
                <h3>Author(s): {props.volumeInfo.authors}</h3>
            </div>
            <div className="book_image">
                <img src={props.volumeInfo.imageLinks.smallThumbnail}/>
            </div>
        </div>
    )
}