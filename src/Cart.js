import React from 'react';
import BookTitles from './BookTitles';

const Cart = ({cartItems, getTotal}) => {
    const addToCart = (list) => {
        return list.map((book,i) => {
            return (
                <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>${book.price}</td>
                </tr>
            )
        })
    }


    return (
        <div className="container-fluid">
        <div className="list-group-item col-md-12">
        <div> Shopping Cart
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {addToCart(cartItems)}
                <tr>
                <td colSpan="2" className="table-active">Total:</td>
                <td className="table-active">${getTotal()}</td>
                </tr>
            </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}

export default Cart