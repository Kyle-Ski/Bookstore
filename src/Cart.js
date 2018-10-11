import React from 'react';

const Cart = ({cartItems, getTotal}) => {
    const addToCart = (list) => {
        return list.map((book,i) => {
            return (
                <tr key={i}>
                <td>{book.title}</td>
                <td>{book.author}</td>
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
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {addToCart(cartItems)}
                <tr>
                <th colSpan="2" className="table-active">Total:</th>
                <td className="table-active">${getTotal()}</td>
                </tr>
            </tbody>
            </table>
            </div>
        
        </div>
    )
}

export default Cart