import React from 'react';

const SearchBar = ({filterThoseTitles, filterThoseAuthors, searchByTitle, searchTerm}) =>{

    const consoleLog = (e) => console.log(searchTerm)

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light blue-grey lighten-5 mb-4">
                <a className="navbar-brand" href="http://elastic-juice.surge.sh/">g[99] Bookstore</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="btn-group" role="group">
                    <button className="btn btn-outline-secondary" onClick={filterThoseAuthors}>Filter By Author</button>
                    <button className="btn btn-outline-secondary" onClick={filterThoseTitles}>Filter by Title</button>
                    <button className="btn btn-outline-secondary" href="http://elastic-juice.surge.sh/">Pricing</button>
                </div>
                <form className="form-inline">
                    <input onChange={searchByTitle} className="form-control mr-sm-2" type="text" placeholder="Search by Title" aria-label="Search"/>
                    <button onClick={consoleLog} className="btn btn-outline-secondary mr-sm-0" type="button" id="button-addon2">Submit</button>
                </form>
            </div>
        </nav>   

    )
}


export default SearchBar