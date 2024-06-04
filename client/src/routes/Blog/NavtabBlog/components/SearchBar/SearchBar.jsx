import React from 'react';
import './SearchBar.css';
import img from './search.png';

const SearchBar = () => {
    return (
        <div className="search-bar">
        <input type="text" placeholder="Cari..." ></input>
        <button type="button">
            <img src={img} alt="search" />
        </button> 
        </div>
    );
};

export default SearchBar;
