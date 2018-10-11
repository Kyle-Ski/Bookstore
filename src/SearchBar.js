import React from 'react';

const SearchBar = () =>{

    const consoleLog = () => console.log('hi')

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light blue-grey lighten-5 mb-4">
                <a className="navbar-brand" href="http://elastic-juice.surge.sh/">g[99] Bookstore</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* <ul className="navbar-nav mr-auto"> */}
                <div className="btn-group" role="group">
                    {/* <li className="nav-item"> */}
                        <button className="btn btn-outline-secondary" href="http://elastic-juice.surge.sh/">Filter By Author</button>
                    {/* </li> */}
                    {/* <li className="nav-item"> */}
                        <button className="btn btn-outline-secondary" href="http://elastic-juice.surge.sh/">Features</button>
                    {/* </li> */}
                    {/* <li className="nav-item"> */}
                        <button className="btn btn-outline-secondary" href="http://elastic-juice.surge.sh/">Pricing</button>
                    {/* </li> */}
                </div>
                {/* </ul> */}
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                    <button onClick={consoleLog} className="btn btn-outline-secondary mr-sm-0" type="button" id="button-addon2">Submit</button>
                </form>
            </div>
        </nav>   

    )
}


export default SearchBar