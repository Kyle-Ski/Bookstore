import React from 'react';

const Cart = ({cartItems, getTotal, removeFromCartTitle}) => {
    const addToCart = (list) => {
        return list.map((book,i) => {
            return (
                <tr key={i}>
                <td className="clickable-row" onClick={removeFromCartTitle}>{book.title}</td>
                <td className="clickable-row" onClick={removeFromCartTitle}>{book.author}</td>
                <td><a href={book.website}>{book.subtitle}</a></td>
                <td>${book.price}</td>
                </tr>
            )
        })
    }


    return (
        <div className="container-fluid sticky-top">
        <div className="list-group-item col-md-12">
         <h3>Shopping Cart</h3>
        <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Website</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {addToCart(cartItems)}
                <tr>
                <th colSpan="3" className="table-active">Total:</th>
                <td className="table-active">${getTotal()}</td>
                </tr>
                <tr>
                <th colSpan="4">Click a cart item to delete it from the list</th>
                </tr>
            </tbody>
            </table>
            </div>
        
        </div>
    )
}

export default Cart