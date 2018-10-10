import React from 'react';

const BookTitles = ({bookTitleAPI}) => {
    const addTitle = (json) => {
        return json.map((book,i) => {
            return (
                <div key={i} className="container-fluid">
                <div key={i} className="list-group-item col-md-12">
                <p>{book.title}: {book.subtitle}</p>
                <p>by: {book.author}</p>
                </div>
                </div>
            )
        })
    }
    return (
        <div>
        {addTitle(bookTitleAPI)}
        </div>
    )
}

export default BookTitles