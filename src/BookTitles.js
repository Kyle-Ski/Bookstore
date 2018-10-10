import React from 'react';

const BookTitles = ({bookTitleAPI}) => {
    const addTitle = (json) => {
        return json.map((book,i) => {
            return (
                <div key={i} className="list-group-item">
                <p>{book.title}: {book.subtitle}</p>
                <p>by: {book.author}</p>
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