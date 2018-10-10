import React from 'react';

const Cart = () => {

    return (
        <div className="container-fluid">
        <div className="list-group-item col-md-12">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row" className="table-active">3</th>
                <td colSpan="2">Total</td>
                <td>$$$$</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    )
}

export default Cart