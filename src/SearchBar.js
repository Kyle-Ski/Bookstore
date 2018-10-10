import React from 'react';

const SearchBar = () =>{

    const consoleLog = () => console.log('hi')

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Which Book Are You Looking For?" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <div className="input-group-append">
            <button onClick={consoleLog} className="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
        </div>
        </div>
    )
}


export default SearchBar