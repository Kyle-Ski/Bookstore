import React from 'react';

const BookTitles = ({bookTitleAPI}) => {
    const addTitle = (json) => {
        return json.map(book => {
            return (
                <div>
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