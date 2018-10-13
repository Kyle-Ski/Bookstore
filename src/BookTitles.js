import React from 'react';

const BookTitles = ({booksToRender, addToCart}) => {
    const addTitle = (booksList) => {

        return booksList.map((book,i) => {
            return (
                <button key={i} id="booksList" type="button" onClick={addToCart} value={book.title} className="list-group-item list-group-item-action">
                {book.title}: {book.subtitle}<br/>
                by: {book.author}<br/>
                Length: {book.pages} pages, Price: ${book.price}
                </button>
            )
        })
    }
    return (
        <div>
            {addTitle(booksToRender)}
        </div>
    )
}

export default BookTitles