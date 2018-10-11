import React from 'react';

const BookTitles = ({bookTitleAPI, addToCart}) => {
    const addTitle = (json) => {
        return json.map((book,i) => {
            return (
                <button key={i} id="booksList" type="button" onClick={addToCart} value={book.title} className="list-group-item list-group-item-action">
                {/* <div key={i}   value={book.title} className="container-fluid"> */}
                {/* <div key={i} value={book.title} className="list-group-item col-md-12"> */}
                {book.title}: {book.subtitle}<br/>
                by: {book.author}<br/>
                Length: {book.pages} pages, Price: ${book.price}
                {/* </div>
                </div> */}
                </button>
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