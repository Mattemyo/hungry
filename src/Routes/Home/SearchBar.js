import React from 'react';

const SearchBar = ({ onInputChange }) => {
  return (
    <div className="searchBar">
      <input type="text" onChange={onInputChange} />
      <button onClick={onInputChange}>Add</button>
    </div>
  );
};

export default SearchBar;
