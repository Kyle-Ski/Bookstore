import React from 'react';

const SearchBar = () =>{

    const consoleLog = () => console.log('hi')

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light blue-grey lighten-5 mb-4">
                <a className="navbar-brand" href="#">g[99] Bookstore</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Filter By Author</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                    <button onClick={consoleLog} className="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                </form>
            </div>
        </nav>   

    )
}


export default SearchBar