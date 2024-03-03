import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar: React.FC = () => {
    return (
        <div className="searchbar">
            <form className='searchForm'>
            <input type="text" className='inputSearchBar' placeholder="Search" />
            <button className='searchIconButton' type='submit'>
            <FaSearch className="search-icon" />
            </button>
            </form>
        </div>
    );
}

export default SearchBar;
